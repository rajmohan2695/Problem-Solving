//App.js
// /* eslint-disable */
import React,{Component} from 'react';
import './App.css';
import ErrorBoundary from './errorBoundary'

class App extends Component{
constructor(props){
  super(props)
  this.state = {
    showPersons : false,
    persons : [
      {
        id:'qwd',
        name : "Raj",
        // value : "Raj Mohan"
      },
      {
        id : 'asav',
        name : "Mohan",
        // value : "Raju"
      }
    ]
  }
}

changeHandler = (event, id) => {
  const personsState = this.state.persons.map(person => {
    if(person.id == id){
      return {...person, name : event.target.value}
    }
    return person
  })//.slice()

  // personsState.hi = "Helloi"

  console.log("HHHH",JSON.stringify(this.state))

  // personsState

  console.log("KKKK",JSON.stringify(this.state))
  this.setState({
    // persons : personsState
    name : 'raj'
  })
}

// clickHandler = (event,id) => {
//   const personsState = this.state.persons.slice()
//   personsState.splice(id,1)
//   this.
// }

render(){
  return(
    <div>
      <Persons persons={this.state.persons} changeHandler={this.changeHandler}/>
    </div>
  )
}


}

const Persons = (props) => {

  const persons = (
    <div>
      {
        props.persons.map(person => {
          return(
           <Person name={person.name} id={person.id} changeHandler={props.changeHandler} />
          )
        })
      }
    </div>
  )
  return(
    <div>
      {persons}
    </div>
  )
}

const Person = (props) => {
  return(
    <div>
      <h2>{props.name}</h2>
      <input value={props.name} onChange={(e) => props.changeHandler(e, props.id)} />
    </div>
  )
}
export default App;

///////////////////////////////////////////////

// Stage - 1

//App.js
// /* eslint-disable */
import React,{Component} from 'react';
import './App.css';
import ErrorBoundary from './errorBoundary'

class App extends Component{
constructor(props){
  super(props)
  this.state = {
    showPersons : false,
    persons : [
      {
        id:'qwd',
        name : "Raj",
        // value : "Raj Mohan"
      },
      {
        id : 'asav',
        name : "Mohan",
        // value : "Raju"
      }
    ]
  }
}

changeHandler = (event, id) => {
  const personsState = [...this.state.persons]//.slice()

  personsState.hi = "Helloi"

  console.log("HHHH",JSON.stringify(this.state))

  personsState.map(person => {
    if(person.id == id){
      person.name = event.target.value
    }
  })

  console.log("KKKK",JSON.stringify(this.state))
  this.setState({
    name : event.target.value
  })
}

// clickHandler = (event,id) => {
//   const personsState = this.state.persons.slice()
//   personsState.splice(id,1)
//   this.
// }

render(){
  return(
    <div>
      <Persons persons={this.state.persons} changeHandler={this.changeHandler}/>
    </div>
  )
}


}

const Persons = (props) => {

  const persons = (
    <div>
      {
        props.persons.map(person => {
          return(
           <Person name={person.name} id={person.id} changeHandler={props.changeHandler} />
          )
        })
      }
    </div>
  )
  return(
    <div>
      {persons}
    </div>
  )
}

const Person = (props) => {
  return(
    <div>
      <h2>{props.name}</h2>
      <input value={props.name} onChange={(e) => props.changeHandler(e, props.id)} />
    </div>
  )
}
export default App;