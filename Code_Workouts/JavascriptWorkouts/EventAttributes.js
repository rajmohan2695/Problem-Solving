
//Getting values by passing this as parameter in a function
function callFunc(e){
	console.log(e.value);
	console.log(e);
}

/* Output
	Hi
	<input type="text" value="Hi" onclick="callFunc(this)">
*/