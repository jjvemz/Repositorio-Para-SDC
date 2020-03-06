import React, { Component } from 'react'
import _ from 'lodash'

import { fetch } from 'whatwg-fetch'

import { API_PATH, API_ACCESS_KEY } from '../commons/config'
import Cookie from 'universal-cookie'
const cookie = new Cookie()

const listFiles = (data_files, data_sel) => {
  let list_files = []

  if (data_files) {
    _.each(data_files, f => {
      if (f.name === data_sel) {
        list_files = f.files
      }
    })
  }

  return list_files.map((fl, fl_idx) => {
    return <div className="form-group" key={`${fl_idx}`}>
      <label className="text-center text-primary">
        <b>{fl.name}</b>
      </label>
      <input type="file" accept="*.csv, *.json" name={fl.name} className="form-control" />
    </div>
  })

}


export default class AdminPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      kpi_name: '',
      kpi_files: '',
      logedin: false,
      login_attempt: false,
      login_fail: false,
      login_checking: true,
      uploaded: false,
      upload_attempt: false,
      upload_fail: false,
      upload_checking: true,
      data_files: null,
      data_sel: null,
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onLogout = this.onLogout.bind(this)
    this.onValidSession = this.onValidSession.bind(this)
    this.getFilesStructures = this.getFilesStructures.bind(this)
  }

  onSubmit(event) {
    event.preventDefault()

    this.setState({ upload_fail: false, uploaded: false, upload_attempt: true })

    let _cookie = cookie.get(API_ACCESS_KEY)
    if(!_cookie) this.onLogout()

    let list_files = document.querySelectorAll("input[type=file]")

    const formData = new FormData();
    formData.append("kpi_name", this.state.data_sel)
    _.each(list_files, f => {
      let f_name = f.name
      f = f.files[0]
      if(f) formData.append("kpi_field", f_name)
      if(f) formData.append("kpi_file", f, f.file_name)
    })

    fetch(`${API_PATH}/admin/files`, {
      method: 'POST',
      mode: "cors",
      headers: {
        // "Content-Type": "application/json",
        "Authorization": `Bearer ${_cookie.access_token}`
      },
      body: formData
    })
    .then(response => {
      if(response.status === 401){
        this.onLogout()
        return
      }
      if(response.status !== 200) throw new Error('No es posible subir el archivo')
      else return response.json()
    })
    .then(data => {
      if (data.error_code) {
        this.setState({ upload_fail: true, upload_attempt: true })
      } else {
        this.setState({ uploaded: true, upload_fail: false, upload_attempt: true })
      }
    })
    .catch(error => {
      console.log("Upload Error", error)
      this.setState({ upload_fail: true, upload_attempt: true })
    })
  }

  onValidSession(){
    let _cookie = cookie.get(API_ACCESS_KEY)
    if (!_cookie) this.onLogout()

    fetch(`${API_PATH}/auth/admin`, {
      method: 'PUT',
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${_cookie.refresh_token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.error_code) {
        throw new Error('No tienes autorización')
      } else {
        _cookie.access_token = data.access_token
        cookie.set(API_ACCESS_KEY, _cookie)
        this.setState({ logedin: true, login_fail: false, login_checking: false, login_attempt: true })
        this.getFilesStructures()
      }
    })
    .catch(error => {
      this.onLogout()
    })

  }

  getFilesStructures(){
    let _cookie = cookie.get(API_ACCESS_KEY)

    fetch(`${API_PATH}/admin/files`, {
      method: 'GET',
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${_cookie.access_token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.error_code) {
        throw new Error('No tienes autorización')
      } else {
        let data_sel = 0
        if(data.data_files.length) data_sel = data.data_files[0].name
        this.setState({ data_files: data.data_files, data_sel: data_sel})
      }
    })
    .catch(error => {
      this.onLogout()
    })

  }

  onLogout() {

    this.setState({ logout_fail: false, logout_attempt: true })

    fetch(`${API_PATH}/auth/admin`, {
      method: 'DELETE',
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.error_code) {
        this.setState({ logout_fail: true, logout_attempt: true })
      } else {
        cookie.remove(API_ACCESS_KEY)
        window.location.href = '/'
      }
    })
    .catch(error => {
      console.log("Login Error", error)
      this.setState({ login_fail: true })
    })

  }

  componentDidMount() {
    this.onValidSession()
  }

  render() {
    let {login_checking, data_files, data_sel} = this.state


    if (login_checking || !data_files) return (
      <div className="container-fluid login-clean admin-panel">
        <form onSubmit={this.onSubmit}>
          <h2 className="sr-only">Login Form</h2>
          <div className="illustration"><i className="icon ion-ios-locked-outline"></i></div>
          <div className="form-group"><label className="text-center text-success">Cargando información...</label></div>
        </form>
      </div>
    )
    if (data_files && data_files.length) return (
      <div className="container-fluid login-clean admin-panel">
        <form onSubmit={this.onSubmit}>
          <h2 className="sr-only">Login Form</h2>
          <div className="illustration"><i className="icon ion-ios-navigate"></i></div>
          <fieldset>
            <legend>Administrador de Archivos de Datos</legend>
            <div className="form-group">
              <label className="text-center text-primary">Selecciona el Indicador para subir archivo(s)</label>
              <select className="form-control" 
                defaultValue={data_sel}
                onChange={ e => {this.setState({data_sel: e.target.value})}}
                >
                {data_files.map( (f, idx) => {
                  return <option key={idx} value={f.name}>{f.name}</option>
                })}
              </select>
            </div>

            { data_files && data_sel && listFiles(data_files, data_sel) }
          </fieldset>
          {
            this.state.uploaded && 
            <div className="form-group"><label className="text-center text-success">El archivo se ha cargado correctamente.</label></div>
          }
          {
            !this.state.uploaded && this.state.upload_attempt && this.state.upload_fail &&
            <div className="form-group"><label className="text-center text-danger">No es posible subir el archivo, intenta nuevamente.</label></div>
          }
          <div className="form-group"><button className="btn btn-primary btn-block" type="submit">subir archivo</button></div>
        </form>
      </div>
    )
    else return null
  }
}
