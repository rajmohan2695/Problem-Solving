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
                <WrappedComponent count={this.state.count} incrementCounter={this.incrementCounter} />
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

class HoverCounter extends Component{
    render(){
        const { count, incrementCounter } = this. props;
        return(
            <h2 onMouseOver={incrementCounter}>Hover here to increment the counter : {count}</h2>
        )
    }
}