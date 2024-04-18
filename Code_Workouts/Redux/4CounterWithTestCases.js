// Counter with TestCases
//JS code
const { createStore } = Redux;
const counter = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT':
      return state+1;
    case 'DECREMENT':
      return state-1;
    default:
      return state;
  }
}

expect( counter(1,{type: 'INCREMENT'})).toEqual(2);

expect( counter(1,{type: 'DECREMENT'})).toEqual(0);

expect( counter(-1,{type: 'INCREMENT'})).toEqual(0);

const store = createStore(counter);

const Counter = ({value,increment,decrement}) =>(
  <div>
  <h1>{value}</h1>
  <button onClick={decrement}>-</button>
  <button onClick={increment}>+</button>
    </div>
);  



const render = () => {
  ReactDOM.render(
  <Counter
    value = {store.getState()}
    decrement = {()=> store.dispatch({type:'DECREMENT'})}
    increment = {()=> store.dispatch({type:'INCREMENT'})}
    />,document.getElementById('root'));
};
store.subscribe(render);
render();

console.log("Tests are passed");

//HTML Code
`
<!DOCTYPE html>
<html>
    <head>
     <meta name="description" content="ES6 in Action: New String Methods [3]">
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width">
     <script src="https://cdnjs.cloudflare.com/ajax/libs/redux/3.5.2/redux.js" type="text/javascript"></script>
      <script src="https://wzrd.in/standalone/expect@latest"></script>
    </head>
    <body>
     <div id="root"></div>
    </body>
</html>
`