//using this inside the global window
console.log(this);			//Prints the global window object

/*---------------------------------------------------------------*/

//using this inside the function window
calculate();
function calculate(){
	console.log(this);		//Again it prints the global window object
}

/*---------------------------------------------------------------*/

//Using this inside an object
var obj = {
	name:"John",
	Age:"24",
	printAge:function(){
		console.log(this);		// {name: "John", Age: "24", printAge: ƒ}
	}
}

obj.printAge();

/*---------------------------------------------------------------*/

//Using this inside a fuction declaration inside an object
var obj = {
	name:"John",
	Age:"24",
	printAge:function(){
		console.log(this);			// {name: "John", Age: "24", printAge: ƒ}
		function print(){
			console.log(this);		// Prints the window object
		}
		print();
	}
}

obj.printAge();

/*---------------------------------------------------------------*/


//ES5
//To use the 'this' inside a function, we can store this in a variable and access it
var obj = {
	name:"John",
	Age:"24",
	printAge:function(){
		var self = this;
		console.log(this);			// {name: "John", Age: "24", printAge: ƒ}
		function print(){
			console.log(self);		// {name: "John", Age: "24", printAge: ƒ}
		}
		print();
	}
}

obj.printAge();

/*---------------------------------------------------------------*/

//ES5
//Using Arrow function
// var obj = {
// 	name:"John",
// 	Age:"24",
// 	printAge:function(){
// 		console.log(	// {name: "John", Age: "24", printAge: ƒ}
// 		() => {
// 			console.log(this);		// Prints the window object
// 		});
// 		print();
// 	}
// }

// obj.printAge();

/*---------------------------------------------------------------*/ 

//prototype and bind
//ES5
function Person(name){
	this.name = name;
}

Person.prototype.myFriends = function(friends){
	var arr = friends.map(function(el) {
		return this.name +" is the friend of "+el;
	}.bind(this));
	console.log(arr);
}

friends = ["Ram","Keshav","Ragu"];

new Person('John').myFriends(friends);

/* Output:
	["John is the friend of Ram", "John is the friend of Keshav", "John is the friend of Ragu"]
*/


//Using Arrow function
function Person(name){
	this.name = name;
}

Person.prototype.myFriends = function(friends){
	var arr = friends.map(el => `${this.name} is the friend of ${el}`);
	console.log(arr);
}

friends = ["Ram","Keshav","Ragu"];

new Person('John').myFriends(friends);

/* Output
	["John is the friend of Ram", "John is the friend of Keshav", "John is the friend of Ragu"]
*/

/*---------------------------------------------------------------*/

/* ################################################################################################## */

										/* Second Run */

/* ################################################################################################## */

// Global Scope

this.table = 'John\'s table';
console.log(window.table);		// 'John\'s table'
console.log(this.table);		// 'John\'s table'

this.garage = {
    table:'Garage\'s table'
}

console.log(this.garage.table)     // "Garage's table"
console.log(window.garage.table)   // "Garage's table"

/*---------------------------------------------------------------*/

// Inside an Object

let johnsRoom = {
	table : 'John\'s table'
}

console.log(johnsRoom.table) 	// 'John\'s table'

/*---------------------------------------------------------------*/

// Inside Object vs Outer scope of an object

let props = 20;

const test = {
	props : 30,
	func : function(){
		console.log(this.props + " " +props)	// 30 20
	}
}

test.func();

/*---------------------------------------------------------------*/

// Inside a method

let johnsRoom = {
	table : 'John\'s table',
	cleanTable(){
		console.log(`Cleaning ${this.table}`)		
	}
}

johnsRoom.cleanTable(); 	// Cleaning John's table

/*---------------------------------------------------------------*/

// Inside a function

this.table = 'John\'s table';
const cleanTable = function(){
    console.log(`Cleaning ${this.table}`)
}
cleanTable();		// Cleaning John's table

'use strict'		// Using 'use strict' for the same above function
this.table = 'John\'s table';
const cleanTable = function(){
    console.log(`Cleaning ${this.table}`)
}
cleanTable();

/* Output : Error
	Uncaught TypeError: Cannot read property 'table' of undefined
    at cleanTable1 (<anonymous>:3:34)
    at <anonymous>:1:1
*/

// Because inside a function you should not give access to this/window object

/*---------------------------------------------------------------*/

// Call function for the rescue

'use strict'
this.table = "John\'s table"
const cleanTable = function(){
    console.log(`Cleaning ${this.table}`)
}

cleanTable.call(this) 		// Cleaning John's table


'use strict'
this.table = "John\'s table"
const cleanTable = function(soap){
    console.log(`Cleaning ${this.table} using ${soap} soap`)
}

cleanTable.call(this,'Surf') // Cleaning John's table using Surf soap

/*---------------------------------------------------------------*/

// Inside an inner function

// Method.1 : Supplying this to the inner funciton using a variable
'use strict'
this.table = "John\'s table"
const cleanTable = function(soap){

	let that = this;
	const innerFunction = function(_soap){
	console.log(`Cleaning ${that.table} using ${_soap} soap`)
	}
	innerFunction(soap);
}

cleanTable.call(this,'Surf')	// Cleaning John's table using Surf soap

// Method.2 : Using one more call inside a function

'use strict'
this.table = "John\'s table"
const cleanTable = function(soap){

	const innerFunction = function(_soap){
	console.log(`Cleaning ${this.table} using ${_soap} soap`)
	}
	innerFunction.call(this,soap);
}

cleanTable.call(this,'Surf')	// Cleaning John's table using Surf soap

// Method.3 : Using bind which binds and create a new function

'use strict'
this.table = "John\'s table"
const cleanTable = function(soap){

	const innerFunction = function(_soap){
	console.log(`Cleaning ${this.table} using ${_soap} soap`)
	}
	innerFunction.bind(this)(soap);
}

cleanTable.call(this,'Surf')	// Cleaning John's table using Surf soap

// Method.4 : Arrow function use the this from the outer function

'use strict'
this.table = "John\'s table"
const cleanTable = function(soap){

	const innerFunction = (_soap) => {
	console.log(`Cleaning ${this.table} using ${_soap} soap`)
	}
	innerFunction(soap);
}

cleanTable.call(this,'Surf')	// Cleaning John's table using Surf soap

/*---------------------------------------------------------------*/

// Inside a constructor - using prototype 

function createRoom(name){
	this.table = `${name}'s table`
}

 let johnsRoom = new createRoom('John');

createRoom.prototype.cleanTable = function(soap){
	console.log(`Cleaning ${this.table} using ${soap} soap`)
}

johnsRoom.cleanTable('Surf')	// Cleaning John's table using Surf soap

/*---------------------------------------------------------------*/

// Inside a class

class createRoom {
	constructor(name){
		this.table = `${name}'s table`
	}

	cleanTable(soap) {				// functions inside class are treated as prototype
		console.log(`Cleaning ${this.table} using ${soap} soap`)
	}
}

let johnsRoom = new createRoom("John");

johnsRoom.cleanTable('Ariel');		// Cleaning John's table using Ariel soap

/*---------------------------------------------------------------*/
