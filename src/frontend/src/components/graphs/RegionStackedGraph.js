import React, { Component } from 'react';
import {
    ResponsiveContainer, AreaChart, CartesianGrid,
    XAxis, YAxis, Tooltip, Area, Legend
} from 'recharts';
import _ from 'lodash'
import { LOAD_STATE, getKpiData } from '../commons/config'

const LABEL_KEY = 'Valor Categoría'
const LABEL_OTHER_KEYS = 'Total'

const smartdataTooltip = {
    backgroundColor: '#fff',
    border: 'solid',
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    display: 'row'
  };
  const titleStyle = { fontSize: 14, fontWeight: 'bold', textAlign: 'left' };
  const row = { fontSize: 14, height: 20, margin: 0, padding: 0 };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div style={smartdataTooltip}>
          <p style={{...row, ...titleStyle}}>{`${label}`}</p>
          {
            _.map(payload, data =>
              <p style={row}><span style={titleStyle}>{`${data.dataKey}:`}</span> {parseFloat(data.value).toLocaleString('es-ES')}</p>
            )
          }
        </div>
      );
    }
    return null;
  };

export default class RegionStackedGraph extends Component {

    constructor(props) {
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
    }

    getData() {
        getKpiData(this.props.kpi_name)
            .then(response => {
                let kpi_head = response[_.keys(response)[0]][0][0]
                let kpi_data = response[_.keys(response)[0]][1]
                let all_kpi = _.keys(kpi_data)
                let kpi_sel_idx = all_kpi[this.state.kpi_sel]
                let data_kpi = kpi_data[kpi_sel_idx]

                let all_years = _.map(data_kpi, kpi => kpi)
                let last_year = all_years.length - 1
                let { PAIS } = all_years[last_year].regiones
                let isCountry = PAIS ? true : false

                this.setState({ kpi_head, kpi_data, all_kpi, all_years, isCountry })
                this.setSel(this.state.kpi_sel, last_year, this.state.region_sel)
                this.setState({ load_state: LOAD_STATE.LOADED })
            })
            .catch(error => {
                console.log(error)
                this.setState({ load_state: LOAD_STATE.ERROR })
            })
    }

    setSel(_kpi_sel, _year_sel, _region_sel) {
        let { kpi_data, all_kpi } = this.state
        let kpi_sel_idx = all_kpi[_kpi_sel]
        let data_kpi = kpi_data[kpi_sel_idx]

        let all_years = _.map(data_kpi, kpi => kpi)

        let x_idx = 0
        let graphData = []
        let all_regions = _.keys(all_years[0].regiones)

        all_years.forEach(in_data => {
            let sum_kpis = _.sum(_.map(_.keys(in_data.regiones), (_k) => {
                let month_name = _.keys(in_data.regiones[_k].meses)[0]
                let _data_month = in_data.regiones[_k].meses[month_name]
                let _data_in_month_key = _.keys(_data_month)[0]
                return _.round(_data_month[_data_in_month_key], 1)
            }))

            let region_name = all_regions[_region_sel]
            let data_region = in_data.regiones[region_name]

            let keys_months = _.keys(data_region.meses)
            let data_month = data_region.meses[_.last(keys_months)]
            let keys_month = _.keys(data_month)
            let data_region_kpi = data_month[keys_month[0]]
            let _k_tooltip = _.keys(data_month.tooltip)
            let _tooltip = _.map(_k_tooltip, (_k_t) => { return { label: _k_t, data: data_month.tooltip[_k_t] } })

            x_idx++

            let data = {
                idx: x_idx++,
                [LABEL_OTHER_KEYS]: _.round(sum_kpis,1),
                [LABEL_KEY]: data_region_kpi,
                name: `${in_data.anio} (${_.round(data_region_kpi*100/sum_kpis, 2)}%)`,
                size: data_region_kpi,
                tooltip: _tooltip,
                tooltip_head: { label: `${keys_month[0]} (${region_name})`, data: data_region_kpi }
            }
            graphData.push(data);
        })

        this.setState({ kpi_sel: _kpi_sel, year_sel: _year_sel, region_sel: _region_sel, graphData, all_regions })
    }

    componentDidMount() {
        this.getData()
    }

    initJQ() {
        let $ = window.jQuery
        $('[data-toggle="popover"]').popover()
        return true
    }

    xAxisTickFormatter(data) {
        return data.split(' ')[0];
    }

    render() {
        const { load_state, graphData, all_regions, kpi_head, all_kpi } = this.state

        if (load_state === LOAD_STATE.LOADING) return (
            <p>Cargando...</p>
        )
        if (load_state === LOAD_STATE.ERROR) return (
            <p>Error cargando datos...</p>
        )

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

                <div className="card-body text-right">
                   <ResponsiveContainer width="100%" height={350}>
                       <AreaChart
                           width={500}
                           height={400}
                           data={graphData}
                           margin={{
                               top: 10, right: 30, left: 0, bottom: 0,
                           }}
                       >
                           <CartesianGrid strokeDasharray="3 3" />
                           <XAxis dataKey="name" tickFormatter={this.xAxisTickFormatter} interval={0} />
                           <YAxis />
                           <Tooltip content={CustomTooltip} />
                           <Legend formatter={(value, entry)=>{
                                const { color } = entry;
                                return <span style={{ color, fontSize: 14 }}>{value}</span>;
                            }} />
                           <Area type="monotone" dataKey={LABEL_OTHER_KEYS} stackId="2" stroke="#529FC9" fill="#529FC9" />
                           <Area type="monotone" dataKey={LABEL_KEY} stackId="1" stroke="#275F7D" fill="#275F7D" />
                       </AreaChart>
                   </ResponsiveContainer>
                </div>

                <div className="card-footer">
                    <div className="row align-items-center">
                        <div className="col">
                           {all_kpi && <select className={`time_serie_year ${this.props.kpi_name}`} defaultValue={this.state.region_sel}
                               onChange={e => this.setSel(e.target.value, this.state.year_sel, this.state.region_sel)}>
                               {_.map(all_kpi, (e_k, idx) => <option value={idx} key={idx}>{e_k}</option>)}
                           </select>}

                           {all_regions && <select className={`time_serie_year ${this.props.kpi_name}`} defaultValue={this.state.region_sel}
                               onChange={e => this.setSel(this.state.kpi_sel, this.state.year_sel, e.target.value)}>
                               {_.map(all_regions, (e_k, idx) => <option value={idx} key={idx}>{e_k}</option>)}
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
