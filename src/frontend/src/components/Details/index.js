import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Page from './page';
import findCurrentItem from '../../redux/actions/findCurrentItem';

import KpiGraph from '../graphs/KpiGraph';
import MapGraph from '../graphs/MapGraph';
import MultilineGraph from '../graphs/MultilineGraph';
import RegionStackedGraph from '../graphs/RegionStackedGraph';
import RegionTreemapGraph from '../graphs/RegionTreemapGraph';
import StackedGraph from '../graphs/StackedGraph';
import TotalStackedGraph from '../graphs/TotalStackedGraph';
import TreemapGraph from '../graphs/TreemapGraph';


class Details extends Component {
  constructor(props){
    super(props);
    this.goTo = this.goTo.bind(this);
  }
  //posible raiz de los problemas
  componentDidMount(){
    const {
      match:{params:{graphId}},
      findCurrentItem,
    } = this.props;
    findCurrentItem(graphId);
  }


  goTo(path){this.props.history.push(path);}

  render(){
    console.log(this.props)

    const {currentItem} = this.props;

    return(
      <Page
        currentItem = {currentItem}
        goTo ={this.goTo}
      />
    );
  }
}

const mapStateToProps = (state) =>({
  results: state.results,
  currentItem: state.currentItem,
});

const mapDispatchToProps ={
  findCurrentItem,

}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Details)
);
