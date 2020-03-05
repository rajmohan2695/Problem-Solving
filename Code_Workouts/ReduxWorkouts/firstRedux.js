// program to increament the counter using Redux

//JS File
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
  
  const store = createStore(counter);       // creating ReduxStore
  
  const render = () => {
      console.log(store.getState());
    document.body.innerText = store.getState();
  }
  render();  
  
  store.subscribe(render);                  // Subscribe method
  document.addEventListener('click',() => {
    store.dispatch({ type:'INCREMENT' });   // action dispatch method
  });

  
//HTML File
`<!DOCTYPE html>
<html>
<head>
  <meta name="description" content="ES6 in Action: New String Methods [3]">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/redux/3.5.2/redux.js" type="text/javascript"></script>
  <title>ES6 in Action: New String Methods</title>
</head>
<body>

</body>
</html>`