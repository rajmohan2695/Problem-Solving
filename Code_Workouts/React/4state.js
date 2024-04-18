// Using state inside a class

import React, { Component } from 'react';
import './App.css';

class PersonComp extends Component {

  state = {
    person : [
      {
        name:'Ram',
        age:27
      },
      {
        name:'Rajesh',
        age:25
      }
    ]
  }

  clickHandler = () => {
    this.setState({
      person:[
        {
          name:'Sudha',
          age:27
        },
        {
          name:'Raju',
          age:25
        }
      ]
    })
  }

render(){
  return(
    <>
    <button  onClick={this.clickHandler}>Toggle persons</button>
    <Person name={this.state.person[0].name} age={this.state.person[0].age} />
    <Person name={this.state.person[1].name} age={this.state.person[1].age} />
    </>
  )
}

}

const Person = (props) => {
  return(
    <h2>{props.name} is {props.age} years old.</h2>
  )
}

export default PersonComp;
