import React, { Component } from 'react';
import toastr from 'toastr';
import { Text, StyleSheet, View, Linking, Platform, TouchableOpacity } from 'react-native';
import { Redirect } from 'react-router-dom'
import HeaderContacto from './commons/HeaderContacto';
import * as emailjs from 'emailjs-com';
import validator from 'validator';
import 'jquery';
import './styleForm.css'

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
    errors:{
      name: '',
      lastName: '',
      mail: '',
      bussines: '',
      phone: '',
      rubro: '',
      motivo: '',
      message: '',
    }
	  }
  }

  handleInputChange(event){
    event.preventDefault()
      const target = event.target
      const name = target.name
      const value = target.value

      this.setState({[name]: value})

  }

  sentMessage(event){
    event.preventDefault()

    if (!this.validateMail()){
      return
    }

    var template_params = {
     to_mail: 'smartdata@ctecinnovacion.cl',
     from_name: this.state.mail,
     motive: this.state.motivo,
     Thename: this.state.name + " " + this.state.lastName,
     from_Fname: this.state.name,
     Thebusiness: this.state.bussines,
     workplace: this.state.rubro,
     message_html: this.state.message,
     phone: this.state.phone
   }
   var service_id = "default_service";
   var template_id = "template_Lio0e16T";
   var user_id = 'user_HRfMb4or8c8GfwzfM4nIh';

   emailjs.send("default_service", "template_Lio0e16T", template_params, 'user_HRfMb4or8c8GfwzfM4nIh')
   .then(function(response){
     toastr.success('Mensaje enviado con exito')
     console.log("EXITOOO!", response.status, response.text)
   }, function(err){
     toastr.error(err)
     console.log(err)
   })

   this.setState({
     name: '',
     lastName: '',
     mail: '',
     bussines: '',
     phone: '',
     rubro: '',
     motivo: '',
     message: ' ',
   })
   return(<Redirect to ='/contacto' />)
  }

  validateMail(){
    let errors= {}
    let formIsValid = true
    let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w)*(\.\w{2,3})+$/

    if(!this.state.name || this.state.name.length <3){
      errors.name = "3 caracteres como minimo"
      formIsValid = false
    }

    if(!this.state.lastName || this.state.lastName.length <3){
      errors.lastName = "3 caracteres como minimo"
      formIsValid = false
    }

    if(!this.state.message || this.state.message.length <10){
      errors.message = "10 caracteres como minimo"
      formIsValid = false
    }

    if(validator.isMobilePhone(this.state.phone) === false || this.state.phone.length <8){
      errors.message = "8 digitos como minimo"
      formIsValid = false
    }

    if(!this.state.bussines || this.state.bussines.length <3){
      errors.bussines = "10 caracteres como minimo"
      formIsValid = false
    }

    if(!this.state.mail || this.state.mail.length <10){
      errors.mail = "10 caracteres como minimo"
      formIsValid = false
    }

    if(!pattern.test(this.state.mail) ){
      errors.mail= "No es un mail valido"
      formIsValid = false
    }
    this.setState({
      errors: errors
    })
    return formIsValid
  }
  dialCall = () => {

    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${+56229780749}';
    } else if (Platform.OS === 'IOS') {
      phoneNumber = 'telprompt:${+56229780749}';
    }

    Linking.openURL(phoneNumber);
  };



  render(){
    console.log(this.state);
    return(
      <section>
        <main>
          <div class ="container">
            <div class="Contact-container">
                <div class="column-left">
                  <h2 style={{marginBottom:"0px",}}>Nuestra dirección: Plaza Ercilla 883, Santiago.</h2>
                    <h3 class="green-h3" >Estamos ubicados a minutos de la estacion Parque OHiggins</h3>
                    <hr></hr>
                    <h5 style={{marginBottom:"4px",}}>CTeC  </h5>
                    <p>Somos el Centro Tecnológico para la Innovación en la Construcción, y nuestro objetivo es contribuir al proceso de transformación de la industria de la construcción nacional.</p>
                    <p style={{marginBottom:"4px",}}>
                    </p>
                    <p style={{marginBottom:"4px",}}>
                      <View>
                        <TouchableOpacity>
                          <Text class="arrow_link" onPress={this.dialCall}  activeOpacity={0.7}>Llámanos: +56 2 2978 0749</Text>
                        </TouchableOpacity>
                      </View>
                    </p>
                </div>
                <div class="column-center">
                  <div class="image_frame image_item no_link scale_with-grid aligncenter no_border">
                    <img class="scale-with-grid" src={"https://ctecinnovacion.cl/dev/wp-content/uploads/2018/04/home_ctec_map_pin_big.png"} alt="home_ctec_map_pin_big" width="250px" height="232px"/>
                  </div>
                </div>
                <div class="column-right">
                  <h2 > Envianos un mensaje</h2>
                  <h3 class="green-h3" >Dejanos tus datos y te contactaremos</h3>
                  <div role="form" dir="ltr" lang="en-US">
                    <div>
                      <form  class="contact-form" onSubmit={this.handleSubmit} >
                          <div>
                          <ul>
                            <li>
                              <input type="text"
                              name="name"
                              class="field-style field-split align-left"
                              value={this.state.name}
                              onChange={this.handleInputChange.bind(this)}
                              size="40"
                              aria-required="true"
                              aria-invalid="false"
                              error={this.state.errors.name}
                              placeholder="Nombre"/>
                              <input type="text"
                              name="lastName"
                              class="field-style field-split align-right"
                              value={this.state.lastName}
                              onChange={this.handleInputChange.bind(this)}
                              size="40"
                              aria-required="true"
                              aria-invalid="false"
                              error={this.state.errors.lastName}
                              placeholder="Apellidos"/>
                            </li>
                              <li >
                                <input type="text"
                                name="mail"
                                class="field-style field-split align-left"
                                value={this.state.mail}
                                onChange={this.handleInputChange.bind(this)}
                                size="40"
                                aria-required="true"
                                aria-invalid="false"
                                error={this.state.errors.mail}
                                placeholder="Mail"/>
                              <input type="text"
                              name="bussines"
                              class="field-style field-split align-right"
                              value={this.state.bussines}
                              onChange={this.handleInputChange.bind(this)}
                              size="40"
                              aria-required="true"
                              aria-invalid="false"
                              error={this.state.errors.bussines}
                              placeholder="Empresa"/>
                            </li>
                            <li>
                              <input type="text"
                              name="phone"
                              class="field-style field-split align-left"
                              value={this.state.phone}
                              onChange={this.handleInputChange.bind(this)}
                              size="40"
                              aria-required="true"
                              aria-invalid="false"
                              error={this.state.errors.phone}
                              placeholder="Teléfono"/>
                            </li>
                            <li>
                            <select name="rubro"
                            class="field-style field-full align-none"
                            value={this.state.rubro}
                            onChange={this.handleInputChange.bind(this)}
                            aria-invalid="false"
                            error={this.state.errors.rubro}>
                              <option class="option-text" value="SELECCIONE RUBRO">SELECCIONE RUBRO</option>
                              <option class="option-text" value="Minería">Minería</option>
                              <option class="option-text" value="Energía">Energía</option>
                              <option class="option-text" value="Sector Público">Sector Público</option>
                              <option class="option-text" value="Constructora">Constructora</option>
                              <option class="option-text" value="Inmobiliaria">Inmobiliaria</option>
                              <option class="option-text" value="Ingeniería">Ingeniería</option>
                              <option class="option-text" value="Proveedor de Materiales">Proveedor de Materiales</option>
                              <option class="option-text" value="Universidad y/o Entidades de Educación">Universidad y/o Entidades de Educación</option>
                              <option class="option-text" value="Consultora">Consultora</option>
                              <option class="option-text" value="Oficina de Arquitectura">Oficina de Arquitectura</option>
                              <option class="option-text" value="Industria">Industria</option>
                              <option class="option-text" value="Asociación Gremial">Asociación Gremial</option>
                              <option class="option-text" value="Otros">Otros</option>
                              </select>
                            </li>
                            <li >
                              <select name="motivo"
                              class="field-style field-full align-none"
                              value={this.state.motivo}
                              onChange={this.handleInputChange.bind(this)}
                              aria-invalid="false"

                              error={this.state.errors.motivo}>
                                <option class="option-text" value="MOTIVO">MOTIVO</option>
                                <option class="option-text" value="Formar parte">Formar parte</option>
                                <option class="option-text" value="Felicitaciones">Felicitaciones</option>
                                <option class="option-text" value="Sugerencias u observaciones">Sugerencias u observaciones</option>
                                <option class="option-text" value="Otros">Otros</option>
                                </select>
                            </li>
                              <li>
                                <textarea name="message"
                                cols="40"
                                rows="10"
                                class="field-style"
                                aria-invalid="false"
                                error={this.state.errors.message}
                                onChange={this.handleInputChange.bind(this)}
                                placeholder="Mensaje"></textarea>
                            </li>
                            <li >
                              <input
                              type="submit"
                              value="ENVIAR"
                              class="wpcf7-form-control wpcf7-submit"
                              onClick={this.sentMessage.bind(this)}/>
                            </li>
                            </ul>
                          </div>
                      </form>
                    </div>
                  </div>
                </div>
            </div>
          </div>
      </main>
    </section>
    );
  }
}
