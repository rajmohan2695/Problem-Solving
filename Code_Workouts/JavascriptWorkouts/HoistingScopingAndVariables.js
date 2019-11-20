//Experiment 1
var x = function(){
	var a = 10;
	console.log(a); 	//prints 10
}
	console.log(a);		//error : a is not defined
x();

//Experiment 2 ( var Vs let )
var x = function(){
	if(true){
		var a = 20;
		let b = 30;
		console.log(b);
	}
	console.log(a);		//prints 20
	console.log(b);		//error : b is not defined
}
	console.log(a);		//error : a is not defined
x();