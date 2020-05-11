class App extends Component{

    constructor(props){
      super(props)
  
      this.state = {
        text : "Click on a word to remove"
      }
    }
  
    updateValue = (event) => {
      this.setState({
        text : event.target.value
      })
    }
  
    changeValue = (newValue) => {
      this.setState({
        text : newValue
      })
    }
  render(){
    return (
      <div>
        <input type="text" value={this.state.text} onChange={this.updateValue}/>
        <ShowIndividualWords text={this.state.text} changeValue={this.changeValue}/> 
      </div>
    )
  }
  }
  
  const ShowIndividualWords = (props) => {
  
    let sentence = props.text
  
    let words = sentence.split(' ');
  
    let showWords = null;
  
    const removeWord = (index) => {
      words.splice(index,1)
      props.changeValue(words.join(' '))
    }
  
    if(words.length){
      showWords = (
        <div>
          { words.map((word, index) => {
            return(
            <div>
            <h4 onClick={() => removeWord(index)}>{word}</h4>
            </div>
          )}) }
        </div>
      )
    }
    return(
      <div>
          {showWords}
      </div>
    )
  }
  
  export default App;