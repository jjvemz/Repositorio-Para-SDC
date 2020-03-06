import React, { Component } from 'react';
import Huincha from './commons/Huincha';
import HeaderQuienes from './commons/HeaderQuienes';

export default class Quienes extends Component {
  render() {
    return (
      <main>
         <HeaderQuienes />
         <section className='container quienes'>
            <div className="section-header d-flex align-items-center">
               <h2 className="section-header__title d-inline-block">Qué es SmartData Construcción </h2>
               <img src={`${window.PUBLIC_URL}/assets/img/logo_smartdata_construccion_colores.png`} className='section-header__img ml-auto d-inline-block' alt="SmartData"/>
            </div>
              <p>
                  El <a className="about-link" href="https://ctecinnovacion.cl">Centro Tecnológico para la Innovación en la Construcción</a>, CTeC, pretende promover el cambio
                  cultural que implica la Construcción 4.0 en Chile, consistente en aprovechar las capacidades de
                  las nuevas tecnologías habilitadoras para digitalizar procesos, integrarlos y conectarlos de modo
                  que permitan una toma de decisiones de inversión más ajustadas y pertinentes, basadas en datos
                  fidedignos.
              </p>
              <p>
                  Con este propósito, CTeC ha desarrollado la plataforma tecnológica SmartData Construcción, conformada
                  partir de diferentes alianzas con instituciones público-privadas. Esta plataforma busca consolidar
                  datos públicos del sector, actualizados, levantados y procesados desde múltiples fuentes, que permita
                  generar indicadores relevantes de sustentabilidad y productividad de la industria de la construcción en
                  Chile, facilitándole y respaldando la toma de decisiones, permitiendo la resolución de problemas y
                  visualizando nuevas oportunidades.
              </p>
              <p className='textPage'>
                  SmartData Construcción espera ir escalando a medida que se incorpore más información y generando indicadores
                  de confianza que vayan dando respuesta a las necesidades sectoriales.
              </p>
            </section>
            <Huincha />
        </main>
    );
  }
}
