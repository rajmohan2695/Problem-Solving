
var form = document.getElementById('percentage');

form.addEventListener("submit",function(event){
	if(!field1.value || !field2.value){
		alert("Please Input the Values");
	}
	else{
	var x = field1.value;
	var y = field2.value;
	
	var result = (x/y)*100;
	result1.innerText = "The Percentage is "+result+"%";
	//alert(result);
	event.preventDefault();
	}
});