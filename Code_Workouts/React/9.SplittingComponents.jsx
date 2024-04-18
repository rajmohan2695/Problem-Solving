import React,{Component} from 'react';
import './App.css';

class App extends Component{
constructor(props){
  super(props)
  this.state = {
    showPersons : true,
    persons : [
      {
        id:'qwd',
        name : "Raj",
      },
      {
        id : 'asav',
        name : "Mohan",
      }
    ]
  }
}

changeHandler = (event, id) => {

  const personsState = [...this.state.persons]

  personsState.map(person => {
    if(person.id == id){
      person.name = event.target.value
    }
  })

  this.setState({
    name : event.target.value
  })
}

toggleViewHandler = () => {
  this.setState({
    showPersons : !this.state.showPersons
  })
}

removePersonHandler = (event, id) => {
  console.log('Came Inside')
  const personsArray = [...this.state.persons]

  for(let index = 0;index < personsArray.length; index++){
    console.log('Inside')
    if(personsArray[index].id == id){
      personsArray.splice(index,1);
      break;
    }
  }

  this.setState({
    persons:personsArray
  })
}



render(){
  return(
    <div>
      <Cockpit show={this.state.showPersons} toggleView={this.toggleViewHandler} />
      { this.state.showPersons ? <Persons removePerson={this.removePersonHandler} persons={this.state.persons} changeHandler={this.changeHandler}/> : null }
    </div>
    )
  }
}

const Persons = (props) => {

  const persons = (
    <div>
      {
        props.persons.map((person,index) => {
          return(
           <Person key={index} name={person.name} removePerson={props.removePerson} id={person.id} changeHandler={props.changeHandler} />
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
  const personStyle = {
    margin : '20px'
  }

  const headerStyle = {
    align : 'center',
    color : 'teal',
    margin : '10px',
  }

  return(
    <div style={personStyle}>
      <h2 style={headerStyle} onClick={(event)=> props.removePerson(event, props.id)}>{props.name}</h2>
      <input value={props.name} onChange={(e) => props.changeHandler(e, props.id)} />
    </div>
  )
}

const Cockpit = props => {

  const isShowPersons = {
    color: 'white',
    width : '200px',
    margin : '10px',
    padding : '10px',
    backgroundColor : props.show ? 'green' : 'red'
  }

    return(
      <div>
          <button style={isShowPersons} onClick={props.toggleView}>Toggle Persons</button>
      </div>
    )
}

export default App;