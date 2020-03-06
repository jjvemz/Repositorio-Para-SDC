import React, { Component } from 'react';
import TimeSerie from '../graphs/TimeSerie';
import KpiGraph from '../graphs/KpiGraph';
import StackedGraph from '../graphs/StackedGraph';
import RegionStackedGraph from '../graphs/RegionStackedGraph';

import Sharing from './Sharing';

export default class SectionMacro extends Component {
  render() {
    return (
      <section id="kpis" className="kpiSection container">
         <h2 className='section-header__title' id='macro'>Macroindicadores</h2>
         <div className="row">
            <div className='col-lg-3'>
               <p className='section_description'>
                Los Macroindicadores muestran la evolución económica y de otros tipos de variables estratégicas, que dan una visión rápida del comportamiento sectorial de la construcción nacional.
               </p>
               <a className="download_info_section" role="button" href='https://smartdata-demo.sfo2.digitaloceanspaces.com/data/glosarios/Glosario_Macroindicadores_28_05_2019.pdf' target="pdf"> <i className='fa fa-file-pdf pr-2'></i> Descarga más información aquí  </a>
               <Sharing shareUrl={'indicadores/macroeconomia'} />
            </div>
            <div className="col-lg-9">
               <div className="card-deck mb-3">
                  <KpiGraph kpi_name='PTF_Variacion'></KpiGraph>
                  <KpiGraph kpi_name='PML_Chile_Contruccion'></KpiGraph>
               </div>
               <div className="card-deck mb-3">
                  <KpiGraph kpi_name='Ranking_Formalidad'></KpiGraph>
                  <KpiGraph kpi_name='Promedio_Cesantes'></KpiGraph>
               </div>

               <div className="card-deck mb-3">
                  <TimeSerie kpi_name='PIB_Contruccion'></TimeSerie>
               </div>

               <div className="card-deck mb-3">
                  <StackedGraph kpi_name='Participacion_respecto_economia'></StackedGraph>
                  <RegionStackedGraph kpi_name='Participacion_regional_MM_total_pais_anio'></RegionStackedGraph>
               </div>

               <div className="card-deck mb-3">
                  <TimeSerie kpi_name='Permisos_Edificacion_M2'></TimeSerie>
                  <TimeSerie kpi_name='Permisos_Edificacion_Viviendas'></TimeSerie>
               </div>
               <div className="card-deck mb-3">
                  <TimeSerie kpi_name='Permisos_Edificacion_Acumulados_m2'></TimeSerie>
                  <TimeSerie kpi_name='Permisos_Edificacion_por_Anio' isAllYears={true}></TimeSerie>
               </div>
               <div className="card-deck mb-3">
                  <TimeSerie kpi_name='IMACON_Variacion_Mensual_2'></TimeSerie>
                  <TimeSerie kpi_name='IMACON_Variacion_Anual'></TimeSerie>
               </div>
               <div className="card-deck mb-3">
                  <TimeSerie kpi_name='INACOR_Variacion_Mensual'></TimeSerie>
                  <TimeSerie kpi_name='INACOR_Variacion_Anual'></TimeSerie>
               </div>
               <div className="card-deck mb-3">
                  <TimeSerie kpi_name='Inversion_Vivivenda' isAllYears={true}></TimeSerie>
                  <TimeSerie kpi_name='Inversion_Infraestructura' isAllYears={true}></TimeSerie>
                </div>
                <div className="card-deck mb-3">
                  <TimeSerie kpi_name='Trabajadores_Promedio_Anual' isAllYears={true}></TimeSerie>
                  <TimeSerie kpi_name='Trabajadores_Region' isAllYears={true}></TimeSerie>
                </div>
                <div className="card-deck mb-3">
                  <RegionStackedGraph kpi_name='Promedio_Anual_Sector_Region' isAllYears={true}></RegionStackedGraph>
                </div>
                <div className="card-deck mb-3">
                  <TimeSerie kpi_name='Por_Regiones_Trimestre_Mensual' isAllYears={true}></TimeSerie>
               </div>
            </div>
         </div>
      </section>
    );
  }
}
