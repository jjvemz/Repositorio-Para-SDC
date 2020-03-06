import React, { Component } from 'react';

import HeaderKpi from './commons/HeaderKpi';
import Tabs from './commons/Tabs';
import SectionSecurity from './commons/SectionSecurity';
import Huincha from './commons/Huincha';

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderKpi />
        <Tabs />
        <SectionSecurity />
        <Huincha />
      </React.Fragment>
    );
  }
}
