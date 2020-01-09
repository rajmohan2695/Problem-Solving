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

// 2. Passing method references between the components inside a function

// App.js
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
      <Person name={personState.person[1].name} age={personState.person[1].age} click={stateChange}/>
    </div>
  );

}

export default App;

// Person/Person.js
import React from 'react';

const Person = props=> {
    return (
        <div>
            <h3 onClick={props.click}>Hi, This is {props.name} and my age is {props.age}</h3>
        </div>
    );
}

export default Person;

// 3.Passing method reference between the component in class with parameter

//App.js
import React,{Component} from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component{
    state = {
        person:[
          {
            name:"Raj Mohan",
            age:"23"
          },
          {
            name:"Ragul",
            age:"21"
          }
        ],
        others : "Hello"
      };

    
      changeState = (newValue = "Call") => {
        this.setState(
          {
            person:[{
              name:"Raj Mohan jayakumar",
              age:"11"
            },
            {
              name:newValue,
              age:"21"
            }]
          }
        );
      }
    
      render(){
        return (
          <div className="App">
            <button onClick={()=>this.changeState()}>Change State</button>
            <Person click={this.changeState.bind(this,"Maxi!")} name={this.state.person[0].name} age={this.state.person[0].age} />
            <Person name={this.state.person[1].name} age={this.state.person[1].age} />
          </div>
        );
      }
    }
    
    export default App;

// Person/Person.js
import React from 'react';

const Person = props=> {
    return (
        <div>
            <h3 onClick={props.click}>Hi, This is {props.name} and my age is {props.age}</h3>
        </div>
    );
}

export default Person;

//Chaning the value dynamically using onChange and also added style to the component

//App.js
import React,{Component} from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component{

  state = {
    person:[
      {
        name:"Raj Mohan",
        age:"23"
      },
      {
        name:"Ragul",
        age:"21"
      }
    ],
    others : "Hello"
  };

  changeState = (newValue = "Call") => {
    this.setState(
      {
        person:[{
          name:"Raj Mohan",
          age:"11"
        },
        {
          name:newValue,
          age:"21"
        }]
      }
    );
  }

  changeHandler = (event) => {
    this.setState({
      person:[{
          name:event.target.value,
          age:"11"
        },
        {
          name:"Raj Mohan jayakumar",
          age:"21"
        }]
      }
    );
}

  render(){
    return (
      <div className="App">
        <button onClick={()=>this.changeState()}>Change State</button>
        <Person click={this.changeState.bind(this,"Maxi!")} 
        changed={this.changeHandler} 
        name={this.state.person[0].name} 
        age={this.state.person[0].age}
        value={this.state.person[0].name} />
        <Person name={this.state.person[1].name} age={this.state.person[1].age} />
      </div>
    );
  }
}

export default App;

// Person/Person.js
import React from 'react';
import './Person.css'

const Person = props => {
    return (
        <div>
            <input type="text" onChange={props.changed} value={props.value}/>
            <h3 onClick={props.click}>Hi, This is {props.name} and my age is {props.age}</h3>
        </div>
    );
}

export default Person;

// Person/Person.css
.Person{
    margin:auto;
    margin-top: 30px;
    width : 60%;
    border : 1px solid black;
    box-shadow: 0 2px 3px grey;
    padding : 5px;
    text-align: center;
}