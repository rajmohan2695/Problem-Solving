import React, { Component } from 'react';

class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {
      count:0,
    }
  }

  incrementCounter = (incrementValue = 1) => {
    this.setState({
      count : this.state.count + incrementValue
    })
  }

  decrementCounter = (event ,decrementValue = 1) => {
  this.setState({
    count : this.state.count - decrementValue
  })
}

render(){
  return(
    <div>
      <h1>{this.state.count}</h1>
      <br></br>
      <button onClick={()=>this.incrementCounter()}>Increment</button>
      <br></br>
      <button onClick={()=>this.incrementCounter(5)}>IncrementBy5</button>
      <br></br>
      <button onClick={this.decrementCounter}>Decrement</button>
    </div>
  )
}

}

export default Counter;
