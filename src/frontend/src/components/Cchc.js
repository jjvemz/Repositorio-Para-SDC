import React, { Component } from 'react';

import HeaderKpi from './commons/HeaderKpi';
import Tabs from './commons/Tabs';
import SectionCCHC from './commons/SectionCCHC';
import Huincha from './commons/Huincha';
// import SectionMacro from './commons/SectionMacro';
// import SectionDestacados from './commons/SectionDestacados';
// import SectionSecurity from './commons/SectionSecurity';
// import SectionSustain from './commons/SectionSustain';

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderKpi />
        <Tabs />
        <SectionCCHC />
        <Huincha />
      </React.Fragment>
    );
  }
}
