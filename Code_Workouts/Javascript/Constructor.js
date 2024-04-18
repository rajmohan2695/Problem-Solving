// Contructors in Javascript

function SmallUser() {

    if(!new.target){                // used to find whether the function is called without 'new' keyword
        return { name : 'Kaushik' } // returns the object
    }

    this.name = "John";

    return 5;               // <-- returns this ignoring the primitive value 5
}

let one = SmallUser();      // Called without 'new' keyword
console.log( one.name );   // Kaushik
let two = new SmallUser;   // Both new SmallUser() and new SmallUser are same if there is no parameter
console.log( two.name );         // John

/*---------------------------------------------------------------*/

// Finding the instance of a contructor
// Using instanceof
// Dog Catcher function

function dogCatcher(){

}

function Cat(name, color, weight){
    this.name = name;
    this.color = color;
    this.weight = weight;
}

function Dog(name, color, weight){
    this.name = name;
    this.color = color;
    this.weight = weight;
}

let mahe = new Cat('mahe','white',2);
let lehe = new Dog('lehe','Black',3);
let hehe = new Dog('hehe','Brown',3);
let pehe = new Cat('pehe','Wheat',1.4);

let dogs = [ mahe, lehe, hehe, pehe ];

const name = obj => Object.keys(dogs)[0];

for(let dog of dogs){
    if(dog instanceof Dog){
        console.log(`${dog.name} is a ${dog.color} coloured dog`)
    }
    else{
        console.log(`${dog.name} is not a dog`)
    }
}

/*---------------------------------------------------------------*/

// Instance of Object literal

let a = {
    one : 'hi'
}

console.log(a instanceof Object) // true

/*---------------------------------------------------------------*/
