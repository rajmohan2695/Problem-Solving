//Changing state in react Hooks

//App.js
import React,{useState} from 'react';
import Person from './Person/Person';
import './App.css';

const App = () => {
  const [personState,personStateChange] = useState({
    person:[
      {
        name:"Raju",
        age:"23"
      },
      {
        name:"Mohan",
        age:"21"
      }
    ],
    otherState : "HelloTwo"
  });

  const stateChange = () => {
    personStateChange(
      {
        person:[
          {
            name:"Raj Mohan",
            age:"23"
          },
          {
            name:"Mohan Jayakumar",
            age:"21"
          }
        ]
      }
    )
  }

  return(
    <div className="App">
      <button onClick={stateChange}>Change State</button>
      <Person name={personState.person[0].name} age={personState.person[0].age} />
      <Person name={personState.person[1].name} age={personState.person[1].age} />
    </div>
  );

}

export default App;

// Person/Person.js

import React from 'react';

const Person = props=> {
    return (
        <div>
            <h3>Hi, This is {props.name} and my age is {props.age}</h3>
        </div>
    );
}

export default Person;

