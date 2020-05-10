
/*
    Create TWO new components: UserInput and UserOutput
    UserInput should hold an input element, UserOutput two paragraphs
    Output multiple UserOutput components in the App component (any paragraph texts of your choice)
    Pass a username (of your choice) to UserOutput via props and display it there
    Add state to the App component (=> the username) and pass the username to the UserOutput component
    Add a method to manipulate the state (=> an event-handler method)
    Pass the event-handler method reference to the UserInput component and bind it to the input-change event
    Ensure that the new input entered by the user overwrites the old username passed to UserOutput
    Add two-way-binding to your input (in UserInput) to also display the starting username
    Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets
*/

class App extends Component{

    constructor(props){
      super(props);
      this.state = {
        username : 'Raj Mohan'
      }
    }
  
    changeHandler = (e) => {
        this.setState({
          username : e.target.value
        })
    }
  
    render(){
      return(
        <>
        <UserInput changeHandler={this.changeHandler} username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={'Ganga'} />
        </>
      )
    }
  
  }
  
  export default App;
  
  const UserInput = (props) => {
    const inputStyle = {
      border : '1px solid red',
      padding : '20px',
      margin : '20px',
      backgroundColor : 'azure'
    }
    return (
      <input style={inputStyle} value={props.username} onChange={props.changeHandler} />
    )
  }
  
  const UserOutput = (props) => {
    const style = {
      border : '1px solid blue',
      padding : '20px',
      color : 'blue',
      margin : '10px',
      width : '60%',
      textAlign : 'center',
      backgroundColor : 'cornsilk'
    }
    return(
      <div style={style}>
      <p>UserName : {props.username}</p>
      <p>This is a paragraph</p>
      </div>
    )
  }
  