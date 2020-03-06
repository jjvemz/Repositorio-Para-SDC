import React, { Component } from 'react';
import TimeSerie from '../graphs/TimeSerie';
import StackedGraph from '../graphs/StackedGraph';
import MapGraph from '../graphs/MapGraph';

import Sharing from './Sharing';

export default class SectionSustain extends Component {
  render() {
    return (
      <section id="treemap" className="kpiSection container">
         <h2 className='section-header__title' id='sust'>Sustentabilidad</h2>
         <div className='row'>
            <div className="col-lg-3">
                <p className='section_description'>
                El  impacto  acumulado  del  diseño,  construcción  y  operaciones  de  los  edificios tienen  profundas  implicancias  para  la salud  humana,
                el  medio  ambiente  y  la economía.  En  este  contexto,  el  objetivo  es  lograr  edificios  mejor  calidad  del ambiente interior, minimizando
                los impactos ambientales asociados a su ciclo de vida y respetando el entorno que los rodea.
                </p>
                <a className="download_info_section" role="button" href='https://smartdata-demo.sfo2.digitaloceanspaces.com/data/glosarios/Glosario_Sustentabilidad_27_05_2019.pdf' target="pdf"><i className='fa fa-file-pdf pr-2'></i>Descarga más información aquí  </a>
                <Sharing shareUrl={'indicadores/Sustentabilidad'} />
            </div>
            <div className="col-lg-9">
               <div className="card-deck mb-3">
                  <TimeSerie kpi_name='Indicador_anual_Sustentabilidad_Comercial' isAllYears={true}></TimeSerie>
                  <TimeSerie kpi_name='Indicador_anual_Sustentabilidad_Publico' isAllYears={true}></TimeSerie>
                </div>
                <div className="card-deck mb-3">
                  <TimeSerie kpi_name='Indicador_anual_de_Sustentabilidad_Residencial' isAllYears={true}></TimeSerie>
                  <TimeSerie kpi_name='Indicador_anual_de_Sustentabilidad_Total' isAllYears={true}></TimeSerie>
                </div>
                <div className="card-deck mb-3">
                  <TimeSerie kpi_name='Indicador_mensual_de_Sustentabilidad_Comercial'></TimeSerie>
                  <TimeSerie kpi_name='Indicador_mensual_de_Sustentabilidad_Publico'></TimeSerie>
                </div>
                <div className="card-deck mb-3">
                  <TimeSerie kpi_name='Indicador_mensual_de_Sustentabilidad_Residencial'></TimeSerie>
                  <TimeSerie kpi_name='Indicador_mensual_de_Sustentabilidad_Total'></TimeSerie>
                </div>
                <div className="card-deck mb-3">
                  <TimeSerie kpi_name='Cantidad_proyectos_tipo_Certificacion_y_proyecto_mensual' isAllYears={true}></TimeSerie>
                </div>
                <div className="card-deck mb-3">
                  <StackedGraph kpi_name='CEV1' isAllYears={true}></StackedGraph>
                  <StackedGraph kpi_name='CEV2' isAllYears={true}></StackedGraph>
                </div>
                <div className="map-graph">
                  <div className="card-deck mb-3">
                    <MapGraph kpi_name='LEED_CES'></MapGraph>
                  </div>
                </div>
            </div>
         </div>
      </section>
    )
  }
}
