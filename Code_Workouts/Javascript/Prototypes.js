// Adding prototype to function object

Function.prototype.defer = function(ms){
    setTimeout(this,ms);
}

function sayHello(){
    console.log('Hello World!')
}

sayHello();                  // Prints 'Hello World!' immediately

sayHello.defer(1000);       // Prints 'Hello World!' after one sec

/*---------------------------------------------------------------*/

Function.prototype.defer = function(ms){
    let addFunc = this;
    return function(...args){
        setTimeout(() => addFunc.apply(this,args),ms)
    }
}

function addNum(a, b){
    console.log( a + b )
}

addNum(3,2);                  // Prints 5 immediately

addNum.defer(1000)(3,2);      // Prints 5 after one sec

/*---------------------------------------------------------------*/
