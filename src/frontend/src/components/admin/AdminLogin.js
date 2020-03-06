import React, { Component } from 'react'

import { fetch } from 'whatwg-fetch'

import { API_PATH, API_ACCESS_KEY } from '../commons/config'
import Cookie from 'universal-cookie'
const cookie = new Cookie()

export default class AdminLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      logedin: false,
      login_attempt: false,
      login_fail: false,
      login_checking: true
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onLogout = this.onLogout.bind(this)
  }

  onSubmit(event) {
    event.preventDefault()

    this.setState({ login_fail: false, logedin: false, login_attempt: true })

    fetch(`${API_PATH}/auth/admin`, {
      method: 'POST',
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.error_code) {
        this.setState({ login_fail: true, login_attempt: true })
      } else {
        cookie.set(API_ACCESS_KEY, data)
        this.setState({ logedin: true, login_fail: false, login_attempt: true })
      }
    })
    .catch(error => {
      console.log("Login Error", error)
      this.setState({ login_fail: true })
    })

  }
  onLogout(event) {
    event.preventDefault()

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
    let _cookie = cookie.get(API_ACCESS_KEY)
    if (_cookie && !_cookie.error_code) {
      this.setState({ logedin: true, login_fail: false, login_attempt: true })
    }
    this.setState({ login_checking: false })
  }

  render() {
    if (this.state.login_checking) return (
      <div className="login-dark">
        <form onSubmit={this.onSubmit}>
          <h2 className="sr-only">Login Form</h2>
          <div className="illustration"><i className="icon ion-ios-locked-outline"></i></div>
          <div className="form-group"><label className="text-center text-success">Cargando acceso...</label></div>
        </form>
      </div>
    )

    return (
      <div className="login-clean">
        <form onSubmit={this.onSubmit}>
          <h2 className="sr-only">Login Form</h2>
          <div className="illustration"><i className="icon ion-ios-locked-outline"></i></div>

          {!this.state.logedin &&
            <React.Fragment>
              {this.state.login_fail && this.state.login_attempt &&
                <div className="form-group"><label className="text-center text-danger">Error de usuario o contraseña.</label></div>
              }
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.username}
                  onChange={e => {
                    this.setState({ username: e.target.value })
                  }} />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={e => {
                    this.setState({ password: e.target.value })
                  }} />
              </div>
              <div className="form-group"><button className="btn btn-primary btn-block" type="submit">Entrar</button></div>
            </React.Fragment>
          }
          {this.state.logedin &&
            <React.Fragment>
              <div className="form-group"><label className="text-center text-success">Has ingresado correctamente.</label></div>
              <div className="form-group">
                <button
                  className="btn btn-primary btn-block"
                  type="button"
                  onClick={() => { window.location.href = 'admin-panel' }} >Continuar</button>
              </div>
              <div className="form-group">
                <button
                  className="btn btn-warning btn-block"
                  type="button"
                  onClick={this.onLogout} >Salir</button>
              </div>
            </React.Fragment>
          }

        </form>
      </div>
    );
  }
}
