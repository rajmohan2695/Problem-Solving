// Redux Methods Implementation

// JS Code

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
  
  const createStore = (reducer) => {
    let state;
    let listeners = [];
    
    const getState = () => state;
    
    const dispatch = (action) => {
      state = reducer(state,action);
      listeners.forEach( listener => listener());
    }
    
    const subscribe = (listener) => {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter(l => l !== listener);
      }
    }
    return { getState, dispatch, subscribe };
  }
  
  const store = createStore(counter);
  
  const render = () => {
      console.log(store.getState());
    document.body.innerText = store.getState();
  }
  
  store.subscribe(render);   
  document.addEventListener('click',() => {
    store.dispatch({ type:'INCREMENT' });
  });

// HTML Code
  `
<!DOCTYPE html>
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
</html>
  `