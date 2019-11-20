//functions
//function callbacks
var x = function(callback){
	console.log("Hello");
	callback();
}

var y = function(){
	console.log("Hi");
}

//function callbacks - 2
let add = function(x,y){
	return x+y;
}

let mul = function(x,y){
	return x*y;
}

let doWhatEver = function(x,y){
	return `here are the two numbers ${x} and ${y}`;
}

let calc = function(x,y,callback){
	return callback(x,y);
}

console.log(calc(5,5,add));

//function callbacks - 3
