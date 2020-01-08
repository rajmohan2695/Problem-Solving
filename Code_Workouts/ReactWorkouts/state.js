// Using state inside a class

state={
    person : [
        {
            name : "Raju",
            age : "23"
        },
        {
            name : "Mohan",
            age : "21"
        }
    ]
}

stateHandler = () => {

 this.setState( {person : [
    {
        name : "Raj Mohan",
        age : "24"
    },
    {
        name : "Kumar",
        age : "21"
    }
]})
}

render() {
  return (
    <div className="App">
      <h1>Hello, Welcome!!!</h1>
      <button onClick={this.stateHandler}>State Change</button>
      <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
      <Person name={this.state.person[1].name} age={this.state.person[1].age}/>
    </div>
  );
}