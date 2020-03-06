import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavVisit from './components/commons/NavVisit';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Macroeconomia from './components/Macroeconomia';
import Cchc from './components/Cchc';
import Sustentabilidad from './components/Sustentabilidad';
import Innovacion from './components/Innovacion';
import Inmobiliarios from './components/Inmobiliarios';
import Seguridad from './components/Seguridad';
import Indicadores from './components/Indicadores';
import Results from './components/Results';
// import HeaderQuienes from './components/commons/HeaderQuienes';
import Quienes from './components/Quienes';
import Fuentes from './components/Fuentes';
import Huincha from './components/commons/Huincha';
import Sharing from './components/commons/Sharing';
import Footer from './components/commons/Footer';
import AdminLogin from './components/admin/AdminLogin';
import AdminPanel from './components/admin/AdminPanel';

export default class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      user: null,
      admin: null
    }

    this.onAdminLogin = this.onAdminLogin.bind(this)
    this.onAdminLogout = this.onAdminLogout.bind(this)
  }

  onAdminLogin(admin){
    this.setState({admin})
  }

  onAdminLogout(){
    this.setState({admin: null})
  }

  render() {

    return (
      <Router>
        <React.Fragment>
          <NavVisit />
          <Route path='/' exact={true} component={Home} />
          <Route path='/indicadores' exact={true} component={Indicadores} />
          <Route path='/indicadores/macroeconomia' exact={true} component={Macroeconomia} />
          <Route path='/indicadores/Cchc' exact={true} component={Cchc} />
          <Route path='/indicadores/Sustentabilidad' exact={true} component={Sustentabilidad} />
          <Route path='/indicadores/Innovacion' exact={true} component={Innovacion} />
          <Route path='/indicadores/Inmobiliarios' exact={true} component={Inmobiliarios} />
          <Route path='/indicadores/Seguridad' exact={true} component={Seguridad} />
          <Route path='/quienes' exact={true} component={Quienes} />
          <Route path='/fuentes' exact={true} component={Fuentes} />
          <Route path='/contacts' exact={true} component={Contacts} />
          <Route path='/huincha' exact={true} component={Huincha} />
          <Route path='/results/:Params_Name' component={Results} />
          <Route path='/Sharing' exact={true} component={Sharing} />
          <Route path='/admin' render={({location, match})=>(
            <AdminLogin
              location={location}
              onAdminLogin={this.onAdminLogin}
              onAdminLogout={this.onAdminLogout}
              adminuser={this.state.adminuser}
            >
            </AdminLogin>
          )} />
          <Route path='/admin-panel' render={({location, match})=>(
            <AdminPanel
              location={location}
              onAdminLogin={this.onAdminLogin}
              onAdminLogout={this.onAdminLogout}
              adminuser={this.state.adminuser}
            >
            </AdminPanel>
          )} />
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}
