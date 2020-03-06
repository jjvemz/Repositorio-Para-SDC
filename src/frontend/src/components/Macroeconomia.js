import React, { Component } from 'react';

import HeaderKpi from './commons/HeaderKpi';
import Tabs from './commons/Tabs';
import SectionMacro from './commons/SectionMacro';
import Huincha from './commons/Huincha';

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderKpi />
        <Tabs />
        <SectionMacro />
        <Huincha />
      </React.Fragment>
    );
  }
}
