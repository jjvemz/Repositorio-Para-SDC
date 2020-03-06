import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SectionLanding extends Component {
  render() {
    return (
      <header id="landing" className="header-home clean-block clean-hero">
        <div className="header-home-content mt-5 text-center">
            <img src={`${window.PUBLIC_URL}/assets/img/logo_smartdata_construccion.png`} className='header-home__logo mx-auto d-block' id='lp' alt="SmartData"/>
            <p id="descripcion" className="header-home-content__text">
              SmartData Construcción, es una plataforma tecnológica de acceso libre y gratuito, que busca consolidar datos públicos, actualizados, levantados y procesados desde fuentes, que permitan generar, visualizar de indicadores relevantes para la industria de la construcción en Chile.
            </p>
            <Link to='/indicadores' className="header-home__link">
               <span>Explorar Indicadores</span>
               <svg>
                  <polyline className="o1" points="0 0, 250 0, 250 50, 0 50, 0 0"></polyline>
                  <polyline className="o2" points="0 0, 250 0, 250 50, 0 50, 0 0"></polyline>
               </svg>
            </Link>

        </div>
      </header>
    );
  }
}
