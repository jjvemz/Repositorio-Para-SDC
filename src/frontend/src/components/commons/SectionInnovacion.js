import React, { Component } from 'react';
import KpiGraph from '../graphs/KpiGraph';
import TimeSerie from '../graphs/TimeSerie';

import Sharing from './Sharing';

export default class SectionInnovacion extends Component {
  render() {
    return (
      <section id="kpis" className="kpiSection container">
         <h2 className='section-header__title' id='macro'> Innovacion y BIM</h2>
         <div className='row'>
            <div className="col-lg-3">
               <p className='section_description'>
                En una definición global, la innovación es el motor que transforma en valor las ideas que no se encuentran en el mercado,
                donde por valor se entiende algo que genera resultados positivos para todas las partes involucradas en cualquier organización,
                ya sea una industria, un país o una empresa.
               </p>
               <a className="download_info_section" role="button" href='https://smartdata-demo.sfo2.digitaloceanspaces.com/data/glosarios/Glosario_Innovacion_y_BIM_31_05_2019.pdf' target="pdf"><i className='fa fa-file-pdf pr-2'></i>Descarga más información aquí </a>
               <Sharing shareUrl={'indicadores/Innovacion'} />
            </div>
            <div className="col-lg-9">
                <div className="card-deck mb-3">
                  <KpiGraph kpi_name='Tasa_de_Innovación_en_la_Industria_de_la_Construcción'></KpiGraph>
                  <KpiGraph kpi_name='Gasto_en_nnovación_en_relación_a_las_ventas'></KpiGraph>
                  <KpiGraph kpi_name='Continuidad_de_la_Innovación'></KpiGraph>
                </div>
                <div className="card-deck mb-3">
                  <KpiGraph kpi_name='Nota_Costos'></KpiGraph>
                  <KpiGraph kpi_name='Nota_Conocimiento'></KpiGraph>
                  <KpiGraph kpi_name='Nota_Mercado'></KpiGraph>
                </div>
                <div className="card-deck mb-3">
                  <KpiGraph kpi_name='Nota_Otros'></KpiGraph>
                  <KpiGraph kpi_name='Innovación_Futura_a_2_años'></KpiGraph>
                  <KpiGraph kpi_name='Instituciones_capacitación_formal_BIM_institución_carrera'></KpiGraph>
                </div>
                <div className="card-deck mb-3">
                  <TimeSerie kpi_name='Instituciones_capacitación_formal_BIM_institución_region' isAllYears={true}></TimeSerie>
                </div>
            </div>
         </div>
      </section>
    );
  }
}
