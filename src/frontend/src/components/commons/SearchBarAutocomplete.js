import React, {Component} from 'react';
import {renderGraphsName, GraphsData} from './plottings';
import {Autocomplete} from '@material-ui/lab';
import {TextField} from '@material-ui/core/';

import { Redirect, BrowserRouter } from 'react-router-dom'


const buttonStyle = {
  float: 'left',
  width: '20%',
  padding: '10px',
  background: '#2196F3',
  color: 'white',
  fontSize: '17px',
  border: '1px',
  borderLeft: 'none', /* Prevent double borders */
  cursor: 'pointer',
  position:'relative',
  right: 65,
  bottom: 40,
};
let Plots = GraphsData();

class AutocompleteBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      val: {},
      redirect: false,
      output :'',
      theName: '',
      theGraph:''
    };
    this.onValChange = this.onValChange.bind(this);
    this.passingParams = this.passingParams.bind(this);
  }



   onValChange = (event, values)=> {
     this.setState({
       val: values}, () =>{
         console.log(this.state.val)
       }
     );
   }

   setRedirect = () =>{
     this.setState({
       redirect: true,
     })
   }

   //const Child1 = () => console.log('match')

   renderRedirect = () =>{
     if(this.state.redirect){
       return <Redirect to='/Results/:Params_Graph/:Params_Name'/>
     }
   }
   passingParams = () =>{
     let equalTo = document.getElementById("mySearchBar").value;
     console.log(this.state.val.file);
     console.log(this.state.val.graph);
     console.log(document.getElementById("mySearchBar").value);
     this.setState({
       output : equalTo,
       theName: this.state.val.file,
       theGraph: this.state.val.graph
     })
     console.log(this.state);
    /* this.props.match.params = this.state.theName;
     const {Params_Name} = this.props.match.params;
     console.log(Params_Name);*/
     /*this.props.match.params.Params_Name = this.state.theName;
     console.log(this.props.match.params.Params_Name);
     this.props.match.params.Params_Graph = this.state.theGraph;
     console.log(this.props.match.params.Params_Graph);*/
  }

  render() {
    return (
      <div style={{ width: 250, position:'relative', top: 10 }}>
      {this.renderRedirect()}
        <Autocomplete
          id= "mySearchBar"
          ref="graphs"
          options={GraphsData()}
          getOptionLabel={item => item.name}
          onChange={this.onValChange}
          onSelect={this.passingParams}
          renderInput={params => (
            <TextField
              {...params}
              variant="standard"
              label="Seleccione el grafico"
              placeholder="Graficos"
              margin="normal"
            />
          )}
        />
        <button
        id ="Redirectioner-Button"
        style={buttonStyle}
        onClick={this.setRedirect}
        type="submit"><i class="fa fa-search"></i></button>
      </div>
    );
  }
}
export default AutocompleteBar;
