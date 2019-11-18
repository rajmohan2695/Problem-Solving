//innerText displays only the 'text' present inside the element
var a = document.getElementById('content').innerText;
console.log(a);

/* Output 
	Hi, This is Awesome
*/

/*---------------------------------------------------------------*/

//innerHTML displays all the content present inside the element including the comments
var b = document.getElementById('content').innerHTML;
console.log(b);

/* Output 
	<!-- innerHTML vs innerText -->
	Hi, This is <b> Awesome </b>
*/

/*---------------------------------------------------------------*/

//document.getElementByClassName 
var c = document.getElementsByClassName('a');
console.log(typeof(c));
console.log(c[2].innerText);

/*	Output
	object
	VM80:3 Content 3
*/

/*---------------------------------------------------------------*/

//document.querySelector is used to select the firsr instance of the element
var d = document.querySelector('li');
console.log(typeof(d));
console.log(d.innerText);

/* Output
	object
	Content 1
*/

/*---------------------------------------------------------------*/

//document.querySelectorAll is used to get all the elements from the given element and keeo it in an object
var e = document.querySelectorAll('li');
console.log(typeof(e));
console.log(e);

/* Output
	object
	NodeList(5) [li.a, li.a, li.a, li.a, li.a]
*/

/*---------------------------------------------------------------*/

//creating a tag and inputting the elements in it using DOM manipulation
var f = document.createElement('div');
var g = document.createTextNode('Hello World! I\'ve a working DOM');
f.appendChild(g);
document.body.appendChild(f);

/* Output
	Hi, This is Awesome
	Content 1
	Content 2
	Content 3
	Content 4
	Content 5
	Hello World! I've a working DOM
*/

/*---------------------------------------------------------------*/

