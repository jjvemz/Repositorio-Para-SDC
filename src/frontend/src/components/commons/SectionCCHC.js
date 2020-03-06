import React, { Component } from 'react';
import TimeSerie from '../graphs/TimeSerie';
import MultilineGraph from '../graphs/MultilineGraph';

import Sharing from './Sharing';

export default class SectionCCHC extends Component {
  render() {
    return (
      <section id="treemap" className="kpiSection container treemap-space">
         <h2 className='section-header__title' id='cchc'> Cámara Chilena de la Construcción</h2>
         <div className="row">
            <div className='col-lg-3'>
               <p className='section_description'>
                La Cámara Chilena de la Construcción, CChC, es una Asociación Gremial, formalizada en 1979. Su objetivo primordial es promover el desarrollo
                y fomento de la actividad de la construcción, como una palanca fundamental para el desarrollo del país en el contexto de una economía social de mercado basada en la iniciativa privada.
               </p>
               <a className="download_info_section" role="button" href='https://smartdata-demo.sfo2.digitaloceanspaces.com/data/glosarios/Glosario_CChC_29_05_2019.pdf' target="pdf"><i className='fa fa-file-pdf pr-2'></i>Descarga más información aquí</a>
               <Sharing shareUrl={'indicadores/Cchc'} />
            </div>
            <div className="col-lg-9">
               <div className="card-deck mb-2">
                  <TimeSerie kpi_name='CChC_IMACON_Variacion_Mensual'></TimeSerie>
                  <TimeSerie kpi_name='CChC_IMACON_Variacion_Anual'></TimeSerie>
               </div>
               <div className="card-deck mb-2">
                  <TimeSerie kpi_name='CChC_INACOR_Variacion_Mensual'></TimeSerie>
                  <TimeSerie kpi_name='CChC_INACOR_Variacion_Anual'></TimeSerie>
               </div>
               <div className="card-deck mb-2">
                  <TimeSerie kpi_name='CChC_Ventas_Santiago'></TimeSerie>
                  <TimeSerie kpi_name='CChC_Indice_Real_Precios_Vivienda_Santiago'></TimeSerie>
               </div>
               <div className="card-deck mb-2">
                  <MultilineGraph kpi_name='CChC_materiales' />
               </div>
            </div>
         </div>
      </section>
    )
  }
}
