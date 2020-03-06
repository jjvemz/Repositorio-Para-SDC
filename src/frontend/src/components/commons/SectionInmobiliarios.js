import React, { Component } from 'react';
import TimeSerie from '../graphs/TimeSerie'
import TotalStackedGraph from '../graphs/TotalStackedGraph';


import Sharing from './Sharing';

export default class SectionInmobiliarios extends Component {
  render() {
    return (
      <section id="kpis" className="kpiSection container">
         <h2 className='section-header__title' id='macro'>Inmobiliarios y Habitacionales</h2>
         <div className='row'>
            <div className="col-lg-3">
                <p className='section_description'>
                El mercado inmobiliario es el conjunto de las acciones de oferta y demanda de bienes inmuebles. La naturaleza de estos bienes puede ser muy distinta, diferenciándose entre bienes de naturaleza residencial, comercial, industrial, urbano, etc. Todas las operaciones que se produzcan relacionadas con la compra y venta de este tipo de inmuebles forman el sector inmobiliario, esencial para el desarrollo de una economía sostenible del país.
                </p>
                <a className="download_info_section" role="button" href='https://smartdata-demo.sfo2.digitaloceanspaces.com/data/glosarios/Glosario_Inmobiliarios_31_05_2019.pdf' target="pdf"><i className='fa fa-file-pdf pr-2'></i>Descarga más información aquí </a>
                <Sharing shareUrl={'indicadores/Inmobiliarios'} />
            </div>
            <div className="col-lg-9">
                <div className="card-deck mb-3">
                  <TimeSerie kpi_name='Permisos_de_Edificacion'></TimeSerie>
                  <TimeSerie kpi_name='Vivienda_cantidad_y_m2_acumulados'></TimeSerie>
                </div>
                <div className="card-deck mb-3">
                  <TimeSerie kpi_name='Ventas_de_viviendas'></TimeSerie>
                  <TimeSerie kpi_name='Ventas_Santiago'></TimeSerie>
                </div>
                <div className="card-deck mb-3">
                  <TimeSerie kpi_name='Indice_Real_Precios_Vivienda_Santiago'></TimeSerie>
                </div>
                <div className="card-deck mb-3">
                  <TotalStackedGraph kpi_name='Habitacionales_CASEN_Hacinamiento' />
                  <TotalStackedGraph kpi_name='Habitacionales_CASEN_Materialidad' />
                  <TotalStackedGraph kpi_name='Habitacionales_CASEN_Conservacion' />
                </div>
            </div>
         </div>
      </section>
    );
  }
}
