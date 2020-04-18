import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet'
import hash from 'object-hash';
import L from 'leaflet'
import _ from 'lodash'
import { LOAD_STATE, getKpiData } from '../commons/config'
import center_regions from '../commons/center_regions.json'

export default class MapGraph extends Component {

  constructor(props){
    super(props)

    this.state = {
      load_state: LOAD_STATE.LOADING,
      kpi_data: null,
      kpi_sel: 0,
      year_sel: 0,
      region_sel: 6,
      refAreaLeft: null,
      refAreaRight: null,
      bottom: null,
      top: null,
      left: null,
      right: null,
      latitude: -33.461133,
      longitude: -70.615593,
      mapZoom: 10.7,
      data_polys: []
    }

    this.getData = this.getData.bind(this)
    this.setSel = this.setSel.bind(this)
  }

  getData(){
    getKpiData(this.props.kpi_name)
    .then( response => {
      let kpi_head = response[_.keys(response)[0]][0][0]
      let kpi_data = [response[_.keys(response)[0]][1]]
      let all_kpi = _.keys(kpi_data)
      let kpi_sel_idx = all_kpi[this.state.kpi_sel]
      let data_kpi = kpi_data[kpi_sel_idx]
      let { features } = data_kpi

      kpi_data = features
      let all_regions_lat_lng = _.map(center_regions.regiones_centroides, d => {
        return { "Region": d.properties["Region"], "X": d.properties["X"], "Y": d.properties["Y"], "zoom": 9 } // Modificar para el nivel de zoom aqui
      })

      this.setState({ kpi_head, load_state: LOAD_STATE.LOADED, kpi_data, all_regions_lat_lng})
    })
    .catch(error => {
      console.log(error)
      this.setState({load_state: LOAD_STATE.ERROR})
    })
  }

  setSel(_kpi_sel, _year_sel, _region_sel){
    const map = this.mapInstance.leafletElement
    let lng_lat = this.state.all_regions_lat_lng[_region_sel]

    map.flyTo([lng_lat.Y, lng_lat.X], lng_lat.zoom)
    this.setState({ kpi_sel: _kpi_sel, year_sel: _year_sel, region_sel: _region_sel })
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
    const {kpi_head, load_state, kpi_data, isCountry, all_regions_lat_lng, latitude, longitude} = this.state

    if(load_state === LOAD_STATE.LOADING) return (
      <p>Cargando...</p>
    )
    if(load_state === LOAD_STATE.ERROR) return (
      <p>Error cargando datos...</p>
    )

    const position = [latitude, longitude]
    const map_style = {
      light: {
        color: "light",
        intensity: 0.1
      },
      height: 600
    };

    let { comment, linkPlot, LinkDatosOriginales } = kpi_head

    return (
      <div className="card kpi-card">
        <div className="card-header">
              {(comment) && <a className="btn btn__info" role="button" href="#comentario"
              data-toggle="popover" data-trigger="focus" tabIndex="0"
              data-content={comment}>
              <i className="fas fa-info-circle"></i>
              </a>}
            {/*<h5 className="card-header__title">{kpi_head.titulo}</h5>*/}
            <h5 className="card-header__title">Localización Proyectos con certificación LEED y CES</h5>
            {/*<span className="card-header__fuente d-block"> Fuente: {kpi_head.Fuente}</span>*/}
            <span className="card-header__fuente d-block"> Fuente: USGBC / CES</span>
         </div>

        <div className="card-body">
          <Map
            ref={e => { this.mapInstance = e }}
            center={position}
            zoom={this.state.mapZoom}
            style={map_style}
            scrollWheelZoom={false}>
            <TileLayer
              attribution='&amp;copy <a href="https://mapbox.com">MapBox</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {kpi_data &&
              <GeoJSON
                key={hash(kpi_data)}
                data={kpi_data}
                pointToLayer={(_ft, latlng)=>{
                  let _color = 'transparent'
                  if( _ft && _ft.properties.color) _color = _ft.properties.color
                  return L.circleMarker(latlng, { radius: 5, weight: 2, color: _color})
                }}
                onEachFeature={(feature, layer)=>{
                  if (feature.properties && feature.properties.direccion) {
                    let { tooltip } = feature.properties
                    let tt_arr = _.map(_.keys(tooltip), t => {
                      
                      return `${t}: ${tooltip[t]}<br/>`
                    })
                    if(tt_arr) layer.bindPopup(_.join(tt_arr,''));
                  }
                }}
              />
            }
          </Map>
        </div>

        <div className="card-footer">
          <div className="row align-items-center">
            <div className="col">
               {!isCountry && <select className={`time_serie_region ${this.props.kpi_name}`} defaultValue={this.state.region_sel} onChange={e => this.setSel(this.state.kpi_sel, this.state.year_sel, e.target.value)}>
                {_.map(all_regions_lat_lng, (e_k, idx) => <option value={idx} key={idx}>{e_k["Region"]}</option>)}
              </select>}
            </div>
            <div className="col simbologia_mapa text-center">
               <span>
                LEED
                <svg height="30" width="30">
                  <circle cx="15" cy="15" r="8" stroke="rgba(0,0,0,0)" strokeWidth="0" fill="green" />
                </svg>
               </span>
               <span>
                CES
                <svg height="30" width="30">
                  <circle cx="15" cy="15" r="8" stroke="rgba(0,0,0,0)" strokeWidth="0" fill="red" />
                </svg>
               </span>
            </div>
            <div className="col">
              <ul className="text-right">
                {(linkPlot) && <li className="card-footer__item"><a className="btn btn-circle btn__info--white" role="button" href={linkPlot} target="png">
                  <i className='fa fa-file'></i>
                </a></li>}

                {/*{(glosario) && <li className="card-footer__item"><a className="btn btn-circle btn__info--white" role="button" href={glosario} target="pdf">
                  <i className='fa fa-file-pdf'></i>
                </a></li>}*/}

                {(LinkDatosOriginales) && <li className="card-footer__item">
                  {/*<a className="btn btn-circle btn__info--white" role="button" href={`${LinkDatosOriginales}`} target="download">*/}
                  <a className="btn btn-circle btn__info--white" role="button" href="https://smartdata-demo.sfo2.digitaloceanspaces.com/data/Sustentabilidad.xlsx" target="download">
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
