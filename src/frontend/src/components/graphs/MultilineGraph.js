import React, { Component } from 'react';
import {
  ResponsiveContainer, LineChart, Line, Legend,
  XAxis, YAxis, Tooltip, ReferenceArea, ReferenceLine
} from 'recharts';
import _ from 'lodash'
import { LOAD_STATE, getKpiData } from '../commons/config'

const smartdataTooltip = {
  backgroundColor: '#fff',
  border: 'solid',
  borderWidth: 1,
  borderColor: '#aaa',
  padding: 10,
  display: 'row'
};

const intro = { fontSize: 12, textAlign: 'right' }

const titleStyle = { fontSize: 12, fontWeight: 'bold', textAlign: 'right' };

const row = {width: '500px', display: 'flex'} ;

const CustomizedLabel = ({x, y, fill, value}) =>  {
    return <text x={x} y={y} dy={-4} fill={fill} fontSize={10} textAnchor="middle">{value}</text>;
}
const SmartTooltip = ({ active, payload, label }) => {
  if (active && payload) {
    let pl = payload[0].payload;
    let titles = _.keys(pl.tooltip[0]);
    let values = _.values(pl.tooltip[0]);
    return (
      <div style={smartdataTooltip}>
        <div key={'a'} style={row}>
          <div style={{width: '30%'}}><span></span></div>
          <div style={{width: '15%', ...titleStyle}}><span>{values[5]}.</span></div>
          <div style={{width: '15%', ...titleStyle}}><span>{titles[2]}</span></div>
          <div style={{width: '20%', ...titleStyle}}><span>{titles[3]}</span></div>
          <div style={{width: '20%', ...titleStyle}}><span>{titles[4]}</span></div>
        </div>
        {_.map(pl.tooltip, (item, idx)=>{
            let title = _.keys(item)[0];
            let values = _.values(item);
            return (
              <div key={idx} style={row}>
                <div style={{width: '30%', textAlign: 'right'}}><span style={titleStyle}>{title}</span></div>
                <div style={{width: '15%', ...intro}}><span>{values[0]}</span></div>
                <div style={{width: '15%', ...intro}}><span>{values[2]}</span></div>
                <div style={{width: '20%', ...intro}}><span>{values[3]}</span></div>
                <div style={{width: '20%', ...intro}}><span>{values[4]}</span></div>
              </div>
            )
        })}
      </div>
    );
  }
  return null;
}

export default class MultilineGraph extends Component {

  constructor(props){
    super(props)

    this.state = {
      load_state: LOAD_STATE.LOADING,
      kpi_data: null,
      kpi_sel: 0,
      year_sel: 0,
      region_sel: 0,
      refAreaLeft: null,
      refAreaRight: null,
      bottom: null,
      top: null,
      left: null,
      right: null,
    }

    this.getData = this.getData.bind(this)
    this.setSel = this.setSel.bind(this)
    this.xAxisTickFormatter = this.xAxisTickFormatter.bind(this);
    this.yAxisTickFormatter = this.yAxisTickFormatter.bind(this);
  }

  getData(){
    getKpiData(this.props.kpi_name)
    .then( response => {
      let kpi_head = response[_.keys(response)[0]][0][0]
      let kpi_data = [response[_.keys(response)[0]][1]]
      let all_kpi = _.keys(kpi_data)
      let kpi_sel_idx = all_kpi[this.state.kpi_sel]
      let data_kpi = kpi_data[kpi_sel_idx]
      let all_years = _.map(data_kpi, kpi => kpi)
      let last_year = all_years.length - 1
      let { PAIS } = all_years[last_year].regiones
      let isCountry = PAIS ? true : false
      let { isAllYears } = this.props
      if(isAllYears) last_year = -1

      this.setState({ kpi_head, kpi_data, all_kpi, all_years, isCountry, isAllYears })
      this.setSel(this.state.kpi_sel, last_year, this.state.region_sel)
      this.setState({ load_state: LOAD_STATE.LOADED })
    })
    .catch(error => {
      console.log(error)
      this.setState({load_state: LOAD_STATE.ERROR})
    })
  }

  setSel(_kpi_sel, _year_sel) {
    let { all_years, isCountry } = this.state
    let x_idx = 1
    let graphData = []
    let all_materials = []
    let all_years_filter = (_year_sel > -1) ? [all_years[_year_sel]] : all_years
    all_years_filter.forEach(in_data => {
      all_materials = _.values(in_data.regiones);
      let all_materials_months = all_materials.map(row=>row.meses);
      let all_materials_months_aux = all_materials_months.map(row=>{ return _.values(row).map(fila => fila)});
      let flat_all_materials = _.flatten(all_materials_months_aux);
      let flat_all_materials_details = flat_all_materials.map(row => {
        let data = row.tooltip;
        data["Mes"] = row.tooltip["Fecha: "].split(' ')[1];
        return data;
      });
      let flat_all_materials_group = _.values(_.groupBy(flat_all_materials_details, "Mes"));
      flat_all_materials_group.forEach(material => {
        let data = {
          idx: x_idx++,
          x: material[0]['Mes'],
          a: material[0]['Barras de Acero [Ton]'],
          b: material[1]['Cemento [Ton]'],
          c: material[2]['Hormig�n [m3]'],
          d: material[3]['Mat construcc.'],
          tooltip: material,
        }

        graphData.push(data)
      })
      console.log("graphData new: ", graphData);
    })

    this.setState({ kpi_sel: _kpi_sel, year_sel: _year_sel,
      graphData})
  }

  xAxisTickFormatter(data) {
    return data.split(' ')[0];
  }

  yAxisTickFormatter(data) {
    return parseFloat(data).toLocaleString('es-ES');
  }

  componentDidMount(){
    this.getData()
  }

  initJQ() {
    let $ = window.jQuery
    $('[data-toggle="popover"]').popover()
    return true
  }

  render() {
    const {load_state, all_years, isCountry, kpi_head, isAllYears,
      graphData, left, right, refAreaLeft, refAreaRight, bottom, top
    } = this.state

    if(load_state === LOAD_STATE.LOADING) return (
      <p>Cargando...</p>
    )
    if(load_state === LOAD_STATE.ERROR) return (
      <p>Error cargando datos...</p>
    )

    let all_years_keys = _.map(all_years, kpi => kpi.anio)
    let { comment, linkPlot, glosario, LinkDatosOriginales } = kpi_head

    return (
      <div className="card kpi-card">
        <div className="card-header">
          <h5 className="card-header__title">{kpi_head.titulo}</h5>
          <span className="card-header__fuente d-block"> Fuente: {kpi_head.Fuente}</span>

          {(comment) && <a className="btn btn__info" role="button" href="#comentario"
            data-toggle="popover" data-trigger="focus" tabIndex="0"
            data-content={comment}>
            <i className="fas fa-info-circle"></i>
          </a>}
        </div>

        <div className="card-body text-center">
            <ResponsiveContainer width="95%" height={350}>
                <LineChart
                  data={graphData}
                  margin={{
                    top: 25, right: 10, left: 10, bottom: 25,
                  }}
                >
                  <XAxis
                    allowDataOverflow={false}
                    interval={0}
                    dataKey="x"
                    stroke="#222"
                    domain={[left, right]}
                    tickFormatter={this.xAxisTickFormatter}
                  />
                  <YAxis
                    allowDataOverflow={false}
                    stroke="#222"
                    domain={[bottom, top]}
                    padding={{ top: 20, bottom: 20 }}
                    tickFormatter={this.yAxisTickFormatter}
                  />
                  <ReferenceLine y={0} stroke="#000" />
                  <Tooltip content={<SmartTooltip />}/>
                  <Legend formatter={(value, entry)=>{
                    const { color } = entry;
                    return <span style={{ color, fontSize: 14 }}>{value}</span>;
                  }} />
                  <Line type="monotone"
                    dataKey="a"
                    name="Barras de Acero [Ton]"
                    stroke="#ecbe7a"
                    fill="#ecbe7a"
                    dot={true}
                    activeDot={{ r: 0.6 }}
                  />
                  <Line type="monotone"
                    dataKey="b"
                    name="Cemento [Ton]"
                    stroke="#e08963"
                    fill="#e08963"
                    dot={true}
                    activeDot={{ r: 0.6 }}
                  />
                  <Line type="monotone"
                    dataKey="c"
                    name="Hormig�n [m3]"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                    dot={true}
                    activeDot={{ r: 0.6 }}
                  />
                  <Line type="monotone"
                    dataKey="d"
                    name="Mat construcc."
                    stroke="#8884d8"
                    fill="#8884d8"
                    dot={true}
                    activeDot={{ r: 0.6 }}
                  />
                  {
                    (refAreaLeft && refAreaRight) &&
                    <ReferenceArea x1={refAreaLeft} x2={refAreaRight} strokeOpacity={0.3} stroke="#2872d0"/>
                  }
                </LineChart>
              </ResponsiveContainer>
        </div>

        <div className="card-footer">
          <div className="row align-items-center">
            <div className="col">
               {!isAllYears && all_years_keys && <select className={`time_serie_year ${this.props.kpi_name}`} defaultValue={this.state.year_sel} onChange={e => this.setSel(this.state.kpi_sel, e.target.value, this.state.region_sel)}>
                 {_.map(all_years_keys, (e_k, idx) => <option value={idx} key={idx}>{e_k}</option>)}
               </select>}
            </div>
            <div className="col">
              <ul className="text-right">
                {(linkPlot) && <li className="card-footer__item"><a className="btn btn-circle btn__info--white" role="button" href={linkPlot} target="png">
                  <i className='fa fa-file'></i>
                </a></li>}

                {(glosario) && <li className="card-footer__item"><a className="btn btn-circle btn__info--white" role="button" href={glosario} target="pdf">
                  <i className='fa fa-file-pdf'></i>
                </a></li>}

                {(LinkDatosOriginales) && <li className="card-footer__item">
                  <a className="btn btn-circle btn__info--white" role="button" href={`${LinkDatosOriginales}`} target="download">
                    <i className='fa fa-download'></i>
                  </a>
                </li>}
              </ul>
            </div>
          </div>
        </div>
        {this.initJQ()}
      </div>
    )
  }
}
