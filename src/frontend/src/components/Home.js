import React, { Component } from 'react';

import SectionLanding from './commons/SectionLanding';
import Huincha from './commons/Huincha';

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <SectionLanding />
        <Huincha />
      </React.Fragment>
    );
  }
}
