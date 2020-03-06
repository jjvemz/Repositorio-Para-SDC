import React, { Component } from 'react';
import KpiGraph from '../graphs/KpiGraph';
import TimeSerie from '../graphs/TimeSerie';

import Sharing from './Sharing';
// import ScreenCapture from './Screen_capture'

export default class SectionDestacados extends Component {
  render() {
    return (
      <section id="kpis" className="kpiSection container">
         <h2 className='section-header__title' id='dest'>Destacados</h2>   
         <div className='row'>
            <div className='col-lg-3'>
               <p className='section_description'>
               Los indicadores Destacados de SmartData Construcción, hacen referencia a información relevante del sector que permite tener una visualización rápida y macro del estado de la industria en materias económicas, sustentabilidad, laborales, etc. Los indicadores Destacados a disponer en la plataforma, dependerán también de la contingencia actual y el interés de la industria de la construcción.
               </p>
               <Sharing shareUrl={'indicadores'} />
            </div>
            <div className="col-lg-9">
               <div className="card-deck mb-3">
                  <KpiGraph kpi_name='PIB_Construccion_MM'></KpiGraph>
                  <KpiGraph kpi_name='PIB_Construccion_PER'></KpiGraph>
               </div>
               <div className="card-deck mb-3">
                  <KpiGraph kpi_name='Edificaciones_Certificacion_Sustentable'></KpiGraph>
                  <KpiGraph kpi_name='Participacion_Empleo_Sectorial_Total_Nacional_PER'></KpiGraph>
               </div>
               <div className="card-deck mb-2">
                  <TimeSerie kpi_name='IMACON_Variacion_Mensual'></TimeSerie>
               </div>
               <div className="card-deck mb-2">
                  <TimeSerie kpi_name='Permisos_Edificacion_Acumulados_m2'></TimeSerie>
               </div>
            </div>
         </div>
      </section>
    );
  }
}
