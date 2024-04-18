function render(){
    document.getElementById('mountNode').innerHTML = `
        <div>
        Hello HTML
        <input />
        <pre>${(new Date).toLocaleTimeString()}</pre>
      </div>
    `;
    
    ReactDOM.render(
      React.createElement(
        'div', 
        null, 
        'Hello React',
        React.createElement('input',null),
        React.createElement('pre',null,(new Date).toLocaleTimeString())
      ),
      document.getElementById('mountNode2'),
    );
    }
    setInterval(() => render(), 1000);
    
    // 	currentTime: (new Date).toLocaleTimeString()
    //  setInterval(fn, 1000);
    
    
/*
    Execute the file in https://jscomplete.com/playground and check the elements tab to 
    see the difference between react and Vanilla javascript's execution.

    * The react basically matched the DOM already present and compare the changes and after that 
    it change the particular part where it is changed exactly.
*/    