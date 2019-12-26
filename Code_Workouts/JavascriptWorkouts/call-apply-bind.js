// using call

var obj = {
    num:2
}

function addFunction(a,b){
    return this.num + a + b;
}

var a = addFunction.call(obj,1,2);

console.log(a); // 5

    //      ----x----

    let mammal = function(legs){
        this.legs = legs;
    }

    let cat = function(legs,isDomesticated){
        mammal.call(this,legs);
        this.domesticated = isDomesticated;
    }

    let lion = new cat(4,false);    

    console.log(lion);                  // cat {legs: 4, domesticated: false}

    let tiger = new cat(5,true);

    console.log(tiger);                 // cat {legs: 5, domesticated: true}

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