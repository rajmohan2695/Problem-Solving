const counter = (state = 0, action ) => {
    switch (action.type){
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT' : 
        return state - 1;
      default:
        return state;
    }
  }
  
  const { createStore } = Redux;
  
  const store = createStore(counter);
  
  const Counter = ({value,onDecrement,onIncrement}) => (
    <div>
    <h1>{value}</h1>
    <button onClick={onDecrement}>-</button>
    <button onClick={onIncrement}>+</button>
    </div>
  );
  
  const render = () => {
    ReactDOM.render(
      <Counter
      value = {store.getState()}
      onIncrement = {() => store.dispatch({ type:'INCREMENT' }) }
      onDecrement = {() => store.dispatch({ type:'DECREMENT' }) }
      />,
      document.getElementById('root')
  );
  };
  
  store.subscribe(render);
  render();

  //HTML Code
  `
<!DOCTYPE html>
<html>
    <head>
     <meta name="description" content="ES6 in Action: New String Methods [3]">
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width">
     <script src="https://cdnjs.cloudflare.com/ajax/libs/redux/3.5.2/redux.js" type="text/javascript"></script>
    </head>
    <body>
     <div id="root"></div>
    </body>
</html>
  `