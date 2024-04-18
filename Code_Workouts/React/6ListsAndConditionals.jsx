class App extends Component{

    state = {
      person:[
        {
          id:'asd',
          name:"Raj Mohan",
          age:"23"
        },
        {
          id:'asas',
          name:"Ragul",
          age:"21"
        },
        {
          id:'affs',
          name:"Rajesh",
          age:"21"
        } 
      ],
      others : "Hello"
    };
  
    resetState = () => {
      this.setState(
        {
          person:[
            {
              id:'asd',
              name:"Raj Mohan",
              age:"23"
            },
            {
              id:'asas',
              name:"Ragul",
              age:"21"
            },
            {
              id:'affs',
              name:"Rajesh",
              age:"21"
            } 
          ],
          others : "Hello"
        }
      );
    }
  
    changeHandler = (event, personIndex) => {
  
      const persons = this.state.person.slice();    //Copying the Array from its reference
  
      persons[personIndex].name = event.target.value;
  
      this.setState({
        person: persons
        }
      );
  }
  
    deleteRecord = (event, personIndex) => {
      const persons = this.state.person.slice();
  
      persons.splice(personIndex,1)
  
      this.setState({
        person: persons
        }
      );
    }
  
    render(){
  
      // Adding inline style
      const style = {
          backgroundColor: 'azure',
          borderColor: 'blue',
          padding: '8px',
          borderRadius: '20%',
          cursor:'pointer',
          margin:'20px'
        }
  
        let persons = null;
  
        if(this.state.person){
          persons = (
            <div>
              { this.state.person.map(( person, personIndex) =>
                <PersonCard 
                name={person.name} 
                age={person.age} 
                key={person.id} 
                changed={(event) => this.changeHandler(event, personIndex)} 
                value={person.name}
                click={(event) => this.deleteRecord(event,personIndex)}/>
              )}
            </div>
          )
        }
  
      return (
        <div className="App">
          <button style={style} onClick={this.resetState}>Reset State</button>
           {persons}
        </div>
      );
    }
  }
  
  export default App;
  
  const PersonCard = props => {
      return (
          <div>
              <input type="text" onChange={props.changed} value={props.value}/>
              <h3 onClick={props.click}>Hi, This is {props.name} and my age is {props.age}</h3>
          </div>
      );
  }
