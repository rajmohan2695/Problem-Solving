import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError:false,
            errorInfo:null
        }
    }

    componentDidCatch(error, errorInfo){
        this.setState({hasError:true, errorInfo:error})
    }

    render(){

        // this is executed once the error is caught
        if(this.state.hasError){
            console.error("Error catch at error boundary : ",this.state.errorInfo)
            return <h1>Something Went Wrong</h1>
        }

        // this will be executed by default
        return this.props.children;
    }
}

// Implementing error boundaries for components
<ErrorBoundary>
    <ShowIndividualWords text={this.state.text} changeValue={this.changeValue}/> 
</ErrorBoundary>

/**
 * Once the error is thrown in <ShowIndividualWords>, then it will be catched 
 * by the error boundary and displayed. So that other components won't get affected
 */

export default ErrorBoundary;