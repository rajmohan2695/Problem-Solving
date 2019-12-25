// using call

var obj = {
    num:2
}

function addFunction(a,b){
    return this.num + a + b;
}

var a = addFunction.call(obj,1,2);

console.log(a); // 5

/*---------------------------------------------------------------*/

// using apply

var obj = {
    num : 2
}

function addFunction(a,b){
    return this.num + a + b;
}

var arr = [1,2];

var a = addFunction.apply(obj,arr);

console.log(a); // 5

/*---------------------------------------------------------------*/

var obj = {
    num : 2
}

var a = addFunction.bind(obj);

var b = a(1,2);

console.log(b);  // 5

/*---------------------------------------------------------------*/