import React, { Component } from 'react';

import HeaderKpi from './commons/HeaderKpi';
import Tabs from './commons/Tabs';
import SectionDestacados from './commons/SectionDestacados';
import Huincha from './commons/Huincha';

export default class Indicadores extends Component {
  render() {
    return (
      <React.Fragment>
         <HeaderKpi />
         <Tabs />
         <SectionDestacados />
         <Huincha />
      </React.Fragment>
    );
  }
}
