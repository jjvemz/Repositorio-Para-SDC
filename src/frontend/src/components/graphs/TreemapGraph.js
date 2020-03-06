import React, { Component } from 'react';
import {
  ResponsiveContainer, Treemap, Tooltip
} from 'recharts';

import _ from 'lodash'

import { LOAD_STATE, getKpiData } from '../commons/config'

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].payload.extended_name}`}</p>
      </div>
    );
  }

  return null;
};

export default class TreemapGraph extends Component {

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
      latitude: -33.4525,
      longitude: -70.6586,
      mapZoom: 10,
      data_polys: []
    }

    this.getData = this.getData.bind(this)
    this.setSel = this.setSel.bind(this)
  }

  getData() {
    getKpiData(this.props.kpi_name)
      .then(response => {
        let kpi_head = response[_.keys(response)[0]][0][0]
        let kpi_data = [response[_.keys(response)[0]][1]]
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
    let { all_years } = this.state
    let x_idx = 0
    let graphData = []
    let all_years_filter = (_year_sel > -1) ? [all_years[_year_sel]] : all_years
    let all_regions = []

    all_years_filter.forEach(in_data => {
      all_regions = _.keys(in_data.regiones)
      all_regions.forEach(region_name => {
        let data_region = in_data.regiones[region_name]
        let keys_months = _.keys(data_region.meses)
        let data_month = data_region.meses[_.last(keys_months)]
        let keys_month = _.keys(data_month)
        let data_region_kpi = data_month[keys_month[0]]
        let _k_tooltip = _.keys(data_month.tooltip)
        let _tooltip = _.map(_k_tooltip, (_k_t) => { return { label: _k_t, data: data_month.tooltip[_k_t] } })

        x_idx++

        let data = {
          x: region_name,
          y: data_region_kpi,
          name: x_idx,
          extended_name: `${region_name} (${data_region_kpi})`,
          size: data_region_kpi,
          tooltip: _tooltip,
        }
        graphData.push(data)
      })
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

  render() {
    const { load_state, graphData, all_years, isCountry, kpi_head } = this.state

    if (load_state === LOAD_STATE.LOADING) return (
      <p>Cargando...</p>
    )
    if (load_state === LOAD_STATE.ERROR) return (
      <p>Error cargando datos...</p>
    )

    let all_years_keys = _.map(all_years, kpi => kpi.anio)

    let all_years_filter = [all_years[this.state.year_sel]]
    let all_regions_keys = !isCountry ? _.keys(all_years_filter[0].regiones) : null

    let { comment, linkPlot, glosario, LinkDatosOriginales } = kpi_head

    return (
      <div className="card kpi-card">
        <div className="card-header text-right">
          <p className="titleUp">{kpi_head.titulo}</p>

          {all_regions_keys && <select className={`time_serie_year ${this.props.kpi_name}`} defaultValue={this.state.region_sel} onChange={e => this.setSel(this.state.kpi_sel, this.state.year_sel, e.target.value)}>
            {_.map(all_regions_keys, (e_k, idx) => <option value={idx} key={idx}>{e_k}</option>)}
          </select>}

          {all_years_keys && <select className={`time_serie_year ${this.props.kpi_name}`} defaultValue={this.state.year_sel} onChange={e => this.setSel(this.state.kpi_sel, e.target.value, this.state.region_sel)}>
            {_.map(all_years_keys, (e_k, idx) => <option value={idx} key={idx}>{e_k}</option>)}
          </select>}

        </div>

        <div className="card-body">

          <div className="row">
            <div className="col-12">

              <ResponsiveContainer width="100%" height={350}>
                <Treemap
                  data={graphData}
                  dataKey="size"
                  ratio={4 / 3}
                  stroke="#222"
                  fill="#fff"
                >
                  <Tooltip content={CustomTooltip}></Tooltip>
                </Treemap>
              </ResponsiveContainer>

            </div>
          </div>

        </div>

        <div className="card-footer text-right">
          <div className="row">
            <div className="col">
              <ul className="smartdata-links">
                <li className="title">
                  <span>
                    {kpi_head.titulo}
                  </span>
                </li>
                <li className="source">
                  <span>
                    {kpi_head.Fuente}
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-100"></div>
            <div className="col">
              <ul className="smartdata-links">
                {(comment) && <li><a className="btn btn-sm btn-default info-box" role="button" href="#comentario"
                  data-toggle="popover" data-trigger="focus" tabIndex="0"
                  data-content={comment}>
                  <i className="fas fa-info-circle"></i>
                </a></li>}

                {(linkPlot) && <li><a className="btn btn-sm btn-default info-box" role="button" href={linkPlot} target="png">
                  <i className='fa fa-file'></i>
                </a></li>}

                {(glosario) && <li><a className="btn btn-sm btn-default info-box" role="button" href={glosario} target="pdf">
                  <i className='fa fa-file-pdf'></i>
                </a></li>}

                {(LinkDatosOriginales) && <li className="download">
                  <a className="btn btn-sm btn-default info-box" role="button" href={`${LinkDatosOriginales}`} target="download">
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
