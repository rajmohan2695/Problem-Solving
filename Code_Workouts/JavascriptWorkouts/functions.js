//functions

//Anonymous Function
console.log(func(1,2,function(a,b){return a*b;}));

/*---------------------------------------------------------------*/

//function callbacks
var x = function(callback){
	console.log("Hello");
	callback();
}

var y = function(){
	console.log("Hi");
}

/*---------------------------------------------------------------*/

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
	if(typeof callback === "function"){   //here typeof is used to check whether it is a function or some garbage value
		return callback(x,y);
	}
}

console.log(calc(5,5,add));

/*---------------------------------------------------------------*/

//function callbacks - 3 (Anonymous function for a callback function)
let calc1 = function(x,y,callback){
	if(typeof callback === "function"){
		return callback(x,y);
	}
}
console.log(calc1(2,3,function(a,b){
	return 2*3;
}));

/*---------------------------------------------------------------*/

//passing functions with unsatisfied parameters
function hello(a,b){
	console.log(a+"  "+b);
}

hello();				//undefined  undefined

hello(5,3,4,2,1);		//5  3

hello(43);				//43  undefined

hello("43 12");			//43 12 undefined

function mul(a,b){
    console.log(a*b);
}

mul(2,3);				//6

mul();					// NaN

mul(2);					// NaN

mul([2]);				// NaN

mul([2,3]);				// NaN

mul({a:5,b:5});			// NaN

mul('a','b');			// NaN

/*---------------------------------------------------------------*/

//Converting an object into an array
function Age(){
var arr = Array.prototype.slice.call(arguments);
	console.log(arguments);
	arr.forEach(e => console.log(e>3));
}
Age(1,2,3,4);
/////////////////////////