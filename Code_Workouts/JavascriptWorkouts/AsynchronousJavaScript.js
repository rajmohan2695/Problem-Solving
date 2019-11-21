//asynchronous javascript
//using setTimeOut
var a = () => {
	setTimeout(() => {
		console.log("Async, Hey there");
	},2000);								//2000 milliseconds
}

var b = () => {
	console.log("Hey there");
	a();
	console.log("The End");
}

b();

			//--or--

var a = () => {
	console.log("Async, Hey there");
}

var b = () => {
	console.log("Hey there");
	setTimeout(a,2000);					//for setTimeout, we dont have to specify empty braces for a function
	console.log("The End");
}

b();

/*	Output
		Hey there
		The End
		Async, Hey there		//After 2secs

*/