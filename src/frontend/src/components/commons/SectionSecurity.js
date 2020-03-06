import React, { Component } from 'react';
import TimeSerie from '../graphs/TimeSerie'
import StackedGraph from '../graphs/StackedGraph';

import Sharing from './Sharing';

export default class SectionSecurity extends Component {
  render() {
    return (
      <section id="treemap" className="kpiSection container treemap-space">
         <h2 className='section-header__title' id='macro'> Seguridad</h2>
         <div className="row">
            <div className='col-lg-3'>
               <p className='section_description'>
                La Seguridad Laboral se entiende como el conjunto de técnicas y procedimientos que tienen por objeto evitar y, en su caso,
                eliminar o minimizar los riesgos que pueden conducir a la materialización de accidentes con ocasión del trabajo, es decir,
                evitar lesiones y los efectos agudos producidos por agentes o productos peligrosos.
               </p>
               <a className="download_info_section" role="button" href='https://smartdata-demo.sfo2.digitaloceanspaces.com/data/glosarios/Glosario_Seguridad_Laboral_29_05_2019.pdf' target="pdf"> <i className='fa fa-file-pdf pr-2'></i> Descarga más información aquí  </a>
               <Sharing shareUrl={'indicadores/Seguridad'} />
            </div>
            <div className="col-lg-9">
               <div className="card-deck mb-2">
                  <TimeSerie kpi_name='Num_Empr_adherentes_Seguro_Ley_Actividad_Economica'></TimeSerie>
                  <TimeSerie kpi_name='Trabajadores_protegidos_Seguro_Ley_Actividad_Económica'></TimeSerie>
               </div>
               <div className="card-deck mb-2">
                  <StackedGraph kpi_name='Trabajadores_protegidos_sector_construcción_región'></StackedGraph>
                  <TimeSerie kpi_name='Accidentes_Tasa_acc'></TimeSerie>
               </div>
            </div>
         </div>
      </section>
    )
  }
}
