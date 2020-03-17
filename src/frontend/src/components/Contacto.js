import React, { Component } from 'react';

import HeaderContacto from './commons/HeaderContacto';
import Contacts from './Contacts';
import Huincha from './commons/Huincha';

export default class Contacto extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderContacto />
        <Contacts />
        <Huincha />
      </React.Fragment>
    );
  }
}
