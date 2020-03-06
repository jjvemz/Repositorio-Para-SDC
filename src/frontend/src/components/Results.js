import React, { Component } from 'react';
import { Router, Redirect, BrowserRouter } from 'react-router-dom'
import {renderGraphsName, GraphsData} from './commons/plottings';
import axios from 'axios';
/*import KpiGraph from './graphs/KpiGraph';
import KpiGraph from './graphs/MapGraph';
import KpiGraph from './graphs/MultlineGraph';
import KpiGraph from './graphs/RegionStackedGraph';
import KpiGraph from './graphs/RegionTreemapGraph';
import KpiGraph from './graphs/StackedGraph';
import KpiGraph from './graphs/TotalStackedGraph';
import KpiGraph from './graphs/TimeSerie';
import KpiGraph from './graphs/TreemapGraph';

*/
export default class Results extends Component{
  constructor(props){
    super(props);
    this.state = {
      Pname: '',
    };
  }

  componentDidMount() {
  const { match: { params } } = this.props;

  axios.get(`Results/${params.Params_Name}`)
    .then(({ Pname }) => {
      this.setState({ Pname : params.Params_Name});
      console.log(this.state.Pname );

    });
}
  render(){
    console.log(this.state.Pname);
    return(
      <h3> Hola, esta es una pagina de pruebas para mostrar los graficos.</h3>
      );
    }
/*const {match} = this.props;



  render(){
    if (graph === KpiGraph)
    return(
      <div className="card-deck mb-3">
        <KpiGraph kpi_name=Params_Name></KpiGraph>
      </div>
    );
    if (graph === MapGraph)
    return(
      <div className="card-deck mb-3">
        <MapGraph kpi_name=Params_Name></MapGraph>
      </div>
    );
    if (graph === MultilineGraph)
    return(
      <div className="card-deck mb-3">
        <MultilineGraph kpi_name=Params_Name></MultilineGraph>
      </div>
    );
    if (graph === RegionStackedGraph)
    return(
      <div className="card-deck mb-3">
        <RegionStackedGraph kpi_name=Params_Name></RegionStackedGraph>
      </div>
    );
    if (graph === RegionTreemapGraph)
    return(
      <div className="card-deck mb-3">
        <RegionTreemapGraph kpi_name=Params_Name></RegionTreemapGraph>
       </div>
    );
    if (graph === StackedGraph)
    return(
      <div className="card-deck mb-3">
        <StackedGraph kpi_name=Params_Name></StackedGraph>
       </div>
    );
    if (graph === TotalStackedGraph)
    return(
    <div className="card-deck mb-3">
       <TotalStackedGraph kpi_name=Params_Name></TotalStackedGraph>
    </div>
    );
    if (graph === TimeSerie)
    return(
      <div className="card-deck mb-3">
        <TimeSerie kpi_name=Params_Name></TimeSerie>
       </div>
    );
    if (graph === TreemapGraph)
    return(
      <div className="card-deck mb-3">
        <TreemapGraph kpi_name=Params_Name></TreemapGraph>
        </div>
    );
  */
}
