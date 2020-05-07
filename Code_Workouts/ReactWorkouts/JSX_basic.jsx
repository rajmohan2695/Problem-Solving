import React, { Component } from 'react';
import './App.css';

class SayHi extends Component {

render(){
  return(
    React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hello People! \'Element Created\''))
  )

  //The above code is equivalent to -

  /* 
  <div className="App">
      <h1>Hello People!</h1>
    </div>
  */

  // So in the execution, the code is converted to the code in the return statement.
  // To make it done, we are importing the 'React' keyword.
}
}

export default SayHi;
