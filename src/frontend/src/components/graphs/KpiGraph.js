import React, { Component } from 'react';
import _ from 'lodash'
import { LOAD_STATE, getKpiData } from '../commons/config'

export default class KpiGraph extends Component {

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
    let { all_years, isCountry } = this.state
    let x_idx = 1
    let graphData = []
    let all_years_filter = (_year_sel > -1) ? [all_years[_year_sel]] : all_years


    all_years_filter.forEach(in_data => {
      if (isCountry) {
        let data_months = in_data.regiones.PAIS.meses
        let n_months = _.keys(data_months)
        n_months.forEach(month_name => {
          let data_month = data_months[month_name]
          let data_in_month_key = _.keys(data_month)[0]
          let data_in_month_kpi = _.round(data_month[data_in_month_key], 4)
          let _k_tooltip = _.keys(data_month.tooltip)
          let _tooltip = _.map(_k_tooltip, (_k_t) => { return { label: _k_t, data: _.round(data_month.tooltip[_k_t], 3) } })

          let data = {
            idx: x_idx++,
            x: month_name,
            y: data_in_month_kpi,
            tooltip: _tooltip,
            tooltip_head: { label: `(${month_name})`,
            data: data_in_month_kpi}
            //tooltip_head: { label: `${data_in_month_key} (${month_name})`, data: data_in_month_kpi }
          }
          graphData.push(data)
        })
      } else {
        let keys_regions = _.keys(in_data.regiones)
        let data_months = in_data.regiones[keys_regions[_region_sel]].meses
        let n_months = _.keys(data_months)
        n_months.forEach(month_name => {
          let data_month = data_months[month_name]
          let data_in_month_key = _.keys(data_month)[0]
          let data_in_month_kpi = _.round(data_month[data_in_month_key], 4)
          let _k_tooltip = _.keys(data_month.tooltip)
          let _tooltip = _.map(_k_tooltip, (_k_t) => { return { label: _k_t, data: _.round(data_month.tooltip[_k_t], 3) } })

          let data = {
            idx: x_idx++,
            x: month_name,
            y: data_in_month_kpi,
            tooltip: _tooltip,
            tooltip_head: { label: `(${month_name})`,
            data: data_in_month_kpi}
            //tooltip_head: { label: `${data_in_month_key} (${month_name})`, data: data_in_month_kpi }
          }
          graphData.push(data)
        })
      }
    })

    this.setState({ kpi_sel: _kpi_sel, year_sel: _year_sel, region_sel: _region_sel, graphData })
  }

  componentDidMount() {
    this.getData()
  }

  initJQ(){
    let $ = window.jQuery
    $('[data-toggle="popover"]').popover()
    return true
  }

  render() {
    const { load_state, graphData, all_years, isCountry, kpi_head } = this.state

    if (load_state === LOAD_STATE.LOADING) return (
      <div className="card kpi-card">
        <div className="card-body">
          <p>Cargando...</p>
        </div>
      </div>
    )
    if (load_state === LOAD_STATE.ERROR) return (
      <div className="card kpi-card">
        <div className="card-body">
          <p>Error cargando datos...</p>
        </div>
      </div>
    )

    let this_kpi = _.last(graphData)
    let all_years_keys = _.map(all_years, kpi => kpi.anio)

    let all_years_filter = [all_years[this.state.year_sel]]
    let all_regions_keys = !isCountry ? _.keys(all_years_filter[0].regiones) : null

    let { comment, linkPlot, glosario, LinkDatosOriginales } = kpi_head

    function formating_numbers(x) {
      return (x).toString().replace(/\./g, ',')
    }

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
            <p className="kpi-data">{formating_numbers(this_kpi.y)}</p>

        </div>

        <div className="card-footer footer_kpi">
          <div className="row align-items-center">
            <div className="col">

                {all_regions_keys &&
                   <select className={`time_serie_year ${this.props.kpi_name}`} defaultValue={this.state.region_sel} onChange={e => this.setSel(this.state.kpi_sel, this.state.year_sel, e.target.value)}>
                  {_.map(all_regions_keys, (e_k, idx) => <option value={idx}  key={idx}>{e_k}</option>)}
                  </select>}

                {all_years_keys &&
                   <select className={`time_serie_year ${this.props.kpi_name}`} defaultValue={this.state.year_sel} onChange={e => this.setSel(this.state.kpi_sel, e.target.value, this.state.region_sel)}>
                  {_.map(all_years_keys, (e_k, idx) => <option value={idx} key={idx}>{e_k}</option>)}
                </select>}

            </div>

            <div className="col">
              <ul className="text-right">
                {(linkPlot) && <li className="card-footer__item"><a className="btn btn-circle btn__info--white" role="button" href={linkPlot} target="png">
                <i className="far fa-file-image"></i>
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
