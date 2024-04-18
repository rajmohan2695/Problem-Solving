
// Scopes
var a = 10;
function printA(){
    console.log(a);             // 10 : printed because of the variable found in the lexical scoping        
    console.log(window.a);      // 10 : printed because of the variable declared in the very top level of the scope 
                                //      in code. Because those variables becomes global variable and added to window object in browsers 
    console.log(this.a);        // 10 : because by default 'this' refers to the window object in a fuction
}

printA();

/*---------------------------------------------------------------*/

var a = "Hi";

function printA(){
    if(a === undefined){
        var a = "Hello"
    }
    console.log(a)              // Hello
}

printA()

/*
    Because the var inside the if block is hoisted to the top of the function
*/

// The above code after the hoisting will look like : 
var a = "Hi";

function printA(){
    var a;                      // undefined
    if(a === undefined){                
        a = "Hello"
    }
    console.log(a)              // Hello
}

printA()

/*---------------------------------------------------------------*/

// let Vs const in window variable

var a = "Hello";
let b = "Hi";

console.log(window.a);          // Hello     : Because the var declared at very top level of the code becomes global and added to window object
console.log(window.b);          // undefined : Eventhough the let is declared at very top level of the code, it becomes global to the code 
                                //             in the sense that has block scope, but it is not added to the window object

/*---------------------------------------------------------------*/
