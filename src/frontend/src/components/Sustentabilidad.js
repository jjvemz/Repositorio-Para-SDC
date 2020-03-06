import React, { Component } from 'react';

import HeaderKpi from './commons/HeaderKpi';
import Tabs from './commons/Tabs';
import SectionSustain from './commons/SectionSustain';
import Huincha from './commons/Huincha';

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderKpi />
        <Tabs />
        <SectionSustain />
        <Huincha />
      </React.Fragment>
    );
  }
}
