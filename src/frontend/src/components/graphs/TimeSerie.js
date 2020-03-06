import React, { Component } from 'react';
import {
  ResponsiveContainer, LineChart, Line,
  XAxis, YAxis, Tooltip, ReferenceArea, ReferenceLine
} from 'recharts';
import _ from 'lodash'
import { LOAD_STATE, getKpiData } from '../commons/config'

const smartdataTooltip = {
  backgroundColor: '#fff',
  border: 'solid',
  borderWidth: 1,
  borderColor: '#aaa',
  padding: 10
};

const intro = { fontSize: 14, margin: 0, padding: 0 }

const span = { fontWeight: 'bold' }

const SmartTooltip = ({ active, payload, label }) => {
  if (active && payload) {
    let pl = payload[0].payload
    return (
      <div style={smartdataTooltip}>
        {_.map(pl.tooltip, (item, idx)=>{
          return (
            <p style={intro} key={idx}>
              <span style={span}>{item.label === 'Fecha: ' ? item.label : `${item.label}: `}</span>
              {parseFloat(item.data).toLocaleString('es-ES')}
            </p>)
        })}
      </div>
    );
  }
  return null;
}

export default class TimeSerie extends Component {

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
      bottom: 0,
      top: 0,
      left: null,
      right: null,
      negative: false
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

  setSel(_kpi_sel, _year_sel, _region_sel) {
    let { all_years, isCountry } = this.state
    let x_idx = 1
    let graphData = []
    let all_regions = []
    let all_years_filter = (_year_sel > -1) ? [all_years[_year_sel]] : all_years
    let negative = false;
    let bottom = 0;
    let top = 0;
    all_years_filter.forEach(in_data => {
      if (isCountry) {
        let data_months = in_data.regiones.PAIS.meses
        let n_months = _.keys(data_months)
        n_months.forEach(month_name => {
          let data_month = data_months[month_name]
          let data_in_month_key = _.keys(data_month)[0]
          let data_in_month_kpi = _.round(data_month[data_in_month_key], 4)
          let _k_tooltip = _.keys(data_month.tooltip)
          let _tooltip = _.map(_k_tooltip, (_k_t) => { return { label: _k_t, data: data_month.tooltip[_k_t] } })

          let month_year = `${month_name} ${in_data.anio}`
          negative = data_in_month_kpi < 0;
          bottom = data_in_month_kpi < this.state.bottom ? data_in_month_kpi : this.state.bottom;
          top = data_in_month_kpi > this.state.bottom ? data_in_month_kpi : this.state.top;
          let data = {
            idx: x_idx++,
            x: month_year,
            y: data_in_month_kpi,
            tooltip: _tooltip,
            tooltip_head: { label: `${data_in_month_key} (${month_year})`, data: data_in_month_kpi }
          }
          graphData.push(data)
        })
      } else {
        all_regions = _.keys(in_data.regiones)
        let selected_region = all_regions[_region_sel]
        let data_months = in_data.regiones[selected_region].meses
        let n_months = _.keys(data_months)
        n_months.forEach(month_name => {
          let data_month = data_months[month_name]
          let data_in_month_key = _.keys(data_month)[0]
          let data_in_month_kpi = _.round(data_month[data_in_month_key], 4)
          let _k_tooltip = _.keys(data_month.tooltip)
          let _tooltip = _.map(_k_tooltip, (_k_t) => { return { label: _k_t, data: data_month.tooltip[_k_t] } })

          let month_year = `${month_name} ${in_data.anio}`
          negative = data_in_month_kpi < 0;
          bottom = data_in_month_kpi < this.state.bottom ? data_in_month_kpi : this.state.bottom;
          top = data_in_month_kpi > this.state.bottom ? data_in_month_kpi : this.state.top;
          let data = {
            idx: x_idx++,
            x: month_year,
            y: data_in_month_kpi,
            name: `${month_name} (${data_in_month_kpi})`,
            size: data_in_month_kpi,
            tooltip: _tooltip,
            tooltip_head: { label: `${data_in_month_key} (${month_year})`, data: data_in_month_kpi }
          }
          graphData.push(data)
        })
        // console.log("graphData: ", graphData);
      }
    })

    this.setState({ kpi_sel: _kpi_sel, year_sel: _year_sel, region_sel: _region_sel,
      graphData, all_regions, negative, bottom, top})
  }

  xAxisTickFormatter(data) {
    const { kpi_name } = this.props;
    const found =
    [
    /* Gráficos de Macroindicadores */
      "Permisos_Edificacion_por_Anio"
    , "Inversion_Vivivenda"
    , "Inversion_Infraestructura",
    , "Trabajadores_Promedio_Anual",
    , "Trabajadores_Region",
    , "Por_Regiones_Trimestre_Mensual",
    /* Gráficos de Sustentabilidad */
    , "Indicador_anual_Sustentabilidad_Comercial"
    , "Indicador_anual_Sustentabilidad_Publico"
    , "Indicador_anual_de_Sustentabilidad_Residencial"
    , "Indicador_anual_de_Sustentabilidad_Total"
    , "Cantidad_proyectos_tipo_Certificacion_y_proyecto_mensual"
    /* Gráficos de Innovación */
    , "Instituciones_capacitación_formal_BIM_institución_region"
    ].find(row => row === kpi_name);

    if (found)
      return data.split(' ')[1];
    else
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
    let all_years_filter = (isAllYears) ? [all_years[all_years.length - 1]] : [all_years[this.state.year_sel]]
    let all_regions_keys = !isCountry ? _.keys(all_years_filter[0].regiones) : null
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
                    top: 25, right: 15, left: 10, bottom: 25,
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
                    dataKey="y"
                    domain={[bottom, top]}
                    tickFormatter={this.yAxisTickFormatter}
                  />
                  <ReferenceLine y={0} stroke="#000" />
                  <Tooltip content={<SmartTooltip />}/>
                  <Line type="monotone"
                    dataKey="y"
                    stroke="#222"
                    // fill="#2872d0"
                    fill="#222"
                    dot={true}
                    activeDot={{ r: 0.5 }}
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
               {all_regions_keys && <select className={`time_serie_year ${this.props.kpi_name}`} defaultValue={this.state.region_sel} onChange={e => this.setSel(this.state.kpi_sel, this.state.year_sel, e.target.value)}>
                 {_.map(all_regions_keys, (e_k, idx) => <option value={idx} key={idx}>{e_k}</option>)}
               </select>}

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
