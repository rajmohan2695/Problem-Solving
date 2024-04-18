function Button(props) {
  
    return (
        <button onClick={() => props.change(props.increment)}>+{props.increment}</button>
    )
  }
  
  function Display(props){
    return(
      <div>{props.message}</div>
    )
  }
  
  function App(){
    
    const [ counter, setCounter ] = useState(0);
    
    const changeCount = (incrementValue) => {
      setCounter(counter+incrementValue)
    }
    
    return (
      <div>
      <Button change={changeCount} increment={1} />
      <Button change={changeCount} increment={5} />
      <Button change={changeCount} increment={10} />
      <Button change={changeCount} increment={100} />
      <Display message={counter} />
    </div>
    );
  }
  
  ReactDOM.render(
    <App />, 
    document.getElementById('mountNode'),
  );