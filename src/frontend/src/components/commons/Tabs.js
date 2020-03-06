import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Tabs extends Component {

  render() {
    return (
      <section id="tabs-space" className="kpiTabs">
         <div className="btn-toolbar container d-flex justify-content-around justify-content-sm-between" role="toolbar" aria-label="Lista de Indicadores">
           <NavLink to='/indicadores' className="kpiTabs-link js-scroll-trigger" activeClassName="active" exact>Destacados</ NavLink>
           <NavLink to='/indicadores/macroeconomia' className="kpiTabs-link js-scroll-trigger">Macroindicadores</ NavLink>
           <NavLink to='/indicadores/Sustentabilidad' className="kpiTabs-link js-scroll-trigger">Sustentabilidad</ NavLink>
           <NavLink to='/indicadores/Inmobiliarios' className="kpiTabs-link js-scroll-trigger">Inmobiliarios y Habitacionales</ NavLink>
           <NavLink to='/indicadores/Innovacion' className="kpiTabs-link js-scroll-trigger">Innovación y BIM</ NavLink>
           <NavLink to='/indicadores/Seguridad' className="kpiTabs-link js-scroll-trigger">Seguridad Laboral</ NavLink>
           <NavLink to='/indicadores/Cchc' className="kpiTabs-link js-scroll-trigger">Cámara Chilena de la Construcción</ NavLink>
          </div>
      </section>
    );
  }
}
