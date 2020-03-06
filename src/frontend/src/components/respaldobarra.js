import React, {Component} from 'react';
import {renderGraphsName, GraphsData} from './plottings';
import Autocomplete from 'react-autocomplete';
import { Redirect } from 'react-router-dom'
import './stylised.css';


const buttonStyle = {
  float: 'left',
  width: '10%',
  padding: '10px',
  background: '#2196F3',
  color: 'white',
  fontSize: '17px',
  border: '1px',
  borderLeft: 'none', /* Prevent double borders */
  cursor: 'pointer',
  position:'relative',
  right: 35,
  bottom: 40,
};
let Plots = GraphsData();

class AutocompleteBar extends Component {

  state = {
    val: '',
    redirect: false,
   };

   //function findArrayElementByName(array, Name) {
  //   return array.find((element) => {
  //     return element.graph === graph;
  //   })
   //}

   onValChange = (event)=> { this.setState({val: event.target.value}) }

   setRedirect = () =>{
     this.setState({
       redirect: true,
       val: ''
     })
   }

   //const Child1 = () => console.log('match')

   renderRedirect = () =>{
     if(this.state.redirect){
       return <Redirect to='/Results/:Params_Graph/:Params_Name'/>
     }
   }

   pressedKey = () =>{
     var ParamName = this.state.val;
     console.log(this.state.val)
     let output = Plots.find(result => result.name === ParamName);
     if(this.state.redirect && this.state.val !== '' ){
       this.Params_Name = output.file;
       console.log(this.Params_Name);
       this.Params_Graph =  output.graph;
       console.log(this.Params_Graph);
       return <Redirect to='/Results/:Params_Graph/:Params_Name'/>
    }
   }

  render() {
    console.log(this.props);
    return (
      <div className="autocomplete-wrapper">
        <Autocomplete
          type= "text"
          id= "Redirectioner-Search-Bar"
          placeholder="Graficos"
          onChange={this.onValChange}
          value={this.state.val}
          items={GraphsData()}
          getItemValue={item => item.name}
          shouldItemRender={renderGraphsName}
          renderMenu={item => (
            <div className="dropdown">
              {item}
            </div>
          )}
          renderItem={(item, isHighlighted) =>
            <div className={`item ${isHighlighted ? 'selected-item' : ''}`}>
              {item.name}
            </div>
          }
          onSelect={val => this.setState({ redirect:  false, val: this.state.val})}
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
