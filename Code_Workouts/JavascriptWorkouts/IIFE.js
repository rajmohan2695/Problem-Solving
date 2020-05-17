
// IIFE 1
(function(){
    console.log('Hello')        // Prints 'Hello' immediately 
})();

// IIFE 2
(function(){    
    console.log('Hello')        // Prints 'Hello' immediately 
}())

// IIFE 3
(()=>{
    console.log('Hello')        // Prints 'Hello' immediately 
})()

// IIFE and closures
var a = (function(){
    let b = 0;
    return {
    getB : function() {return b},
    incB : function(){b= b+1}
        
}
})();

a.getB()    // 0
a.incB()    
a.getB()    // 1
var k = a;  // Assigning a to the variable k
a.getB()    // 1

/*
    if we print k or a in this point, we can see the closure scopes contains the value b as 1 for both.
*/