import React, { Component } from 'react';
import {Linking,Platform,TouchableOpacity} from "react-native";
import HeaderContacto from './commons/HeaderContacto';
import PropTypes from 'prop-types';

//<a class="arrow_link" href="#">Llámanos: +56 2 2978 0749</a>

export default class Contacts extends Component {
  constructor(props) {
	super(props);
	this.state = {
  	name: '',
    lastName: '',
  	mail: '',
  	bussines: '',
    phone: '',
    rubro: '',
    motivo: '',
    message: '',
    enviado : false,
	  }
  }

/*  resetForm(){
    this.setState({
      name: '',
      lastName: '',
      mail: '',
      bussines: '',
      message: '',
      phone: '',
      motivo: '',
      rubro: '',
      enviado : false,
      }
    )
  }*/

  dialCall = (number) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
    else {phoneNumber = `telprompt:${number}`; }
    Linking.openURL(phoneNumber);
  };

  handleCancel=() => {
    this.setState({
      name: '',
      lastName: '',
      mail: '',
      bussines: '',
      message: '',
      phone: '',
      motivo: '',
      rubro: '',
    })
  }

  onNameChange = (e)=> { this.setState({name: e.target.value}) }

  onLastNameChange = (e)=> { this.setState({lastName: e.target.value}) }

  onMailChange = (e)=> { this.setState({mail: e.target.value}) }

  onBusinessChange = (e)=> {this.setState({bussines: e.target.value}) }

  onMessageChange = (e)=> {this.setState({message: e.target.value}) }

  onPhoneChange = (e)=> {this.setState({phone: e.target.value}) }

  onMotiveChange = (e)=> {this.setState({motivo: e.target.value}) }

  onRubroChange = (e)=> {this.setState({rubro: e.target.value}) }

  handleSubmit = e =>{
      e.preventDefault()
      const {
        REACT_APP_EMAILJS_RECEIVER: receiverEmail,
        REACT_APP_EMAILJS_TEMPLATEID: template,
        REACT_APP_EMAILJS_USERID: user,
      } = this.props.env;

      this.sendContactForm(

      );
  }

  /*sendContactForm(templateId, sEmail,rEmail, message,fName,lname, user, motivo, rubro){
    windows.emailjs
      .send('default_service',templateId,{
        sEmail,
        rEmail,
        fName,
        lName,
        message,
        motivo,
        rubro
      },
      user
    )
    .then(res=>{
      this.setState({
        enviado:true
      });
    })
    .catch(err=>console.error('Hubo un fallo al enviar el mensaje. Error: ', err));
  } */



  render(){
    return(
      <div class="container-fluid">
        <div class="rows">
          <div class="col-md-4">
            <h2 style={{marginBottom:"0px",}}>Nuestra direccion</h2>
              <h3>Estamos ubicados a minutos de la estacion Parque OHiggins</h3>
              <hr></hr>
              <h5 style={{marginBottom:"4px",}}>CTeC  </h5>
              <p>Somos el Centro Tecnológico para la Innovación en la Construcción, y nuestro objetivo es contribuir al proceso de transformación de la industria de la construcción nacional.</p>
              <p style={{marginBottom:"4px",}}>
              </p>
              <p style={{marginBottom:"4px",}}>
                <TouchableOpacity>
                  <a class="arrow_link" onPress={()=>{this.dialCall(+56977666273)}}>Llámanos: +56 2 2978 0749</a>
                </TouchableOpacity>
              </p>
          </div>
          <div class="col-md-4">
            <div class="image_frame image_item no_link scale_with-grid aligncenter no_border">
              <img class="scale-with-grid" src={"https://ctecinnovacion.cl/dev/wp-content/uploads/2018/04/home_ctec_map_pin_big.png"} alt="home_ctec_map_pin_big" width="250px" height="232px"/>
            </div>
          </div>
          <div class="col-md-4">
            <h2 style={{marginBottom:"0px",}}> Envianos un mensaje</h2>
            <h3>Dejanos tus datos y te contactaremos</h3>
            <div  role="form" dir="ltr" lang="en-US">
              <div>
                <form  id="contact-form" onSubmit={this.handleSubmit}>
                    <div>
                      <span>
                        <input type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.onNameChange}
                        size="40"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Nombre"/>
                      </span>
                    </div>
                    <div>
                      <span >
                        <input type="text"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.onLastNameChange}
                        size="40"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Apellidos"/>
                      </span>
                      </div>
                      <div>
                      <span>
                        <input type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onMailChange}
                        size="40"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Correo"/>
                      </span>
                    </div>
                    <div>
                      <span>
                        <input type="text"
                        name="bussines"
                        value={this.state.bussiness}
                        onChange={this.onBusinessChange}
                        size="40"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Empresa"/>
                      </span>
                    </div>
                    <div>
                      <span>
                        <input type="text"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.onPhoneChange}
                        size="40"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Teléfono"/>
                      </span>
                    </div>
                    <div>
                      <span>
                      <select name="rubro" value={this.state.rubro} onChange={this.onRubroChange} aria-invalid="false">
                        <option value="SELECCIONE RUBRO">SELECCIONE RUBRO</option>
                        <option value="Minería">Minería</option>
                        <option value="Energía">Energía</option>
                        <option value="Sector Público">Sector Público</option>
                        <option value="Constructora">Constructora</option>
                        <option value="Inmobiliaria">Inmobiliaria</option>
                        <option value="Ingeniería">Ingeniería</option>
                        <option value="Proveedor de Materiales">Proveedor de Materiales</option>
                        <option value="Universidad y/o Entidades de Educación">Universidad y/o Entidades de Educación</option>
                        <option value="Consultora">Consultora</option>
                        <option value="Oficina de Arquitectura">Oficina de Arquitectura</option>
                        <option value="Industria">Industria</option>
                        <option value="Asociación Gremial">Asociación Gremial</option>
                        <option value="Otros">Otros</option></select>
                      </span>
                    </div>
                    <div >
                      <span >
                        <select name="motivo" value={this.state.motivo} onChange={this.onMotiveChange} aria-invalid="false">
                          <option value="MOTIVO">MOTIVO</option>
                          <option value="Formar parte">Formar parte</option>
                          <option value="Felicitaciones">Felicitaciones</option>
                          <option value="Sugerencias u observaciones">Sugerencias u observaciones</option>
                          <option value="Otros">Otros</option></select>
                      </span>
                    </div>
                    <div>
                        <span>
                          <textarea name="message" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Mensaje"></textarea>
                      </span>
                    </div>
                    <div>
                      <span >
                        <input type="submit" value="ENVIAR" class="wpcf7-form-control wpcf7-submit"/>
                      </span>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

Contacts.propTypes = {
  env: PropTypes.object.isRequired
};
