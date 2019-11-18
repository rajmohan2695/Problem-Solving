
//innerText displays only the 'text' present inside the element
var a = document.getElementById('content').innerText;
console.log(a);

/* Output 
	Hi, This is Awesome
*/

//innerHTML displays all the content present inside the element including the comments
var b = document.getElementById('content').innerHTML;
console.log(b);

/* Output 
	<!-- innerHTML vs innerText -->
	Hi, This is <b> Awesome </b>
*/

/*---------------------------------------------------------------*/