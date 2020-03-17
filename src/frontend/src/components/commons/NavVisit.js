import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import AppBar from '../commons/appBar';


export default class NavVisit extends Component {

  render() {
    return (
      <nav className="navbar navbar-light navbar-expand-lg bg-white fixed-top" id="mainNav">
        <div className="container">
          <NavLink to='/' className="navbar-brand js-scroll-trigger"><img id='logo_ctec_nav' src={`${window.PUBLIC_URL}/assets/img/LG-CTEC@1x.png`} alt="CteC"/></NavLink>
          <button className="navbar-toggler float-right" data-toggle="collapse" data-target="#navbarResponsive"
                  aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="nav navbar-nav ml-auto nav-pills">
              <li className="nav-item" role="presentation">
                <AppBar id= "mySearchBar"/>
              </li>
            <ul className="nav navbar-nav ml-auto nav-pills">
              <li className="nav-item" role="presentation">
                <NavLink to='/' className="nav-link js-scroll-trigger" activeClassName="active" exact>Home</NavLink >
              </li>
              <li className="nav-item" role="presentation">
                <NavLink to="/quienes" className="nav-link js-scroll-trigger">Quiénes Somos</NavLink>
              </li>
              <li className="nav-item dropdown">
                 <NavLink to="/indicadores" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Indicadores</NavLink>
                 <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                     <NavLink to="/indicadores" className="dropdown-item">Destacados</NavLink>
                     <NavLink to="/indicadores/macroeconomia" className="dropdown-item">Macroindicadores</NavLink>
                     <NavLink to="/indicadores/Inmobiliarios" className="dropdown-item">Inmobiliarios y habitacionales</NavLink>
                     <NavLink to="/indicadores/sustentabilidad" className="dropdown-item">Sustentabilidad</NavLink>
                     <NavLink to="/indicadores/Innovacion" className="dropdown-item">Innovación y BIM</NavLink>
                     <NavLink to="/indicadores/Seguridad" className="dropdown-item">Seguridad Laboral</NavLink>
                     <NavLink to="/indicadores/Cchc" className="dropdown-item">CChC</NavLink>
                 </div>
               </li>
              <li className="nav-item" role="presentation">
                <NavLink to="/fuentes" className="nav-link js-scroll-trigger">Fuente de datos</NavLink>
              </li>
              <li className="nav-item" role="presentation">
                <NavLink to="/Contacto" className="nav-link js-scroll-trigger">Contacto</NavLink>
              </li>
              {/*
              <li className="nav-item" role="presentation">
                <NavLink to="/admin" className="nav-link bg-default border rounded" id="link-btn-professional">acceso admin</NavLink>
              </li>
              */}


              </ul>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
