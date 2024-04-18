//HOC

import React, { Component } from 'react';

const withCounter = WrappedComponent => {
    class withCounter extends Component{
        constructor(props){
            super(props)
            this.state = {
                count : 0
            }
        }

        incrementCounter(){
            this.setState((prevState) => {
                count:prevState+1
            })
        }

        render(){
            return(
                <WrappedComponent count={this.state.count} 
                incrementCounter={this.incrementCounter} 
                {...this.props}       // This is very much important that the props from the Wrapped component will the passed to the updated component(withCounter component)
                />
            )
        }
    }

    return withCounter;
}

export default withCounter;

// Using Higher Order Components
class ClickCounter extends Component{
    render(){
        const { count, incrementCounter } = this.props;
        return(
            <div>
                <button onClick={incrementCounter}>Increment Counter : {count}</button>
            </div>
        )
    }
}
export default withCounter(ClickCounter)

// Reusing the counter functionality with HigherOrderComponent
class HoverCounter extends Component{
    render(){
        const { count, incrementCounter } = this. props;
        return(
            <h2 onMouseOver={incrementCounter}>Hover here to increment the counter : {count}</h2>
        )
    }
}
export default withCounter(HoverCounter)

/*---------------------------------------------------------------*/

// Passing arguments with components with Higher order component

const withCounter = ( WrappedComponent, incrementValue ) => {
    class withCounter extends Component{
        constructor(props){
            super(props)
            this.state = {
                count:0
            }
        }

        incrementCounter(){
            this.setState((prevState)=>{
                count:prevState+incrementValue
            })
        }

        render(){
            return(
                <WrappedComponent count={this.state.count} incrementCounter={this.incrementCounter} {...this.props} />
            )
        }
    }

    return withCounter;
}

export default withCounter;

class ClickCounter extends Component{
    render(){
        const { count, incrementCounter } = this.props;
        return(
            <div>
                <button onClick={incrementCounter}>Increment Counter : {count}</button>
            </div>
        )
    }
}
export default withCounter(ClickCounter, 5)     // The counter increments by 5 everytime

// Reusing the counter functionality with HigherOrderComponent
class HoverCounter extends Component{
    render(){
        const { count, incrementCounter } = this. props;
        return(
            <h2 onMouseOver={incrementCounter}>Hover here to increment the counter : {count}</h2>
        )
    }
}
export default withCounter(HoverCounter, 10)    // The counter increments by 10 everytime
