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