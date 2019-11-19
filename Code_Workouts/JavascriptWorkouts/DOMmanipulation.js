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

//document.querySelectorAll is used to get all the data from the given element and keeo it in an object
var e = document.querySelectorAll('li');
console.log(typeof(e));
console.log(e);

/* Output
	object
	NodeList(5) [li.a, li.a, li.a, li.a, li.a]
*/

/*---------------------------------------------------------------*/

//Different ways of getting the data from an element
var div1 = document.getElementById('helloworld').innerText;
var div2 = document.querySelector('divv').innerText;
var div3 = document.querySelectorAll('divv')[0].innerText;
var div4 = document.getElementsByTagName('divv')[0].innerText;
console.log(div1+" "+div2+" "+div3+" "+div4);
/* Output
	Hello World! Hello World! Hello World! Hello World!
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

//Changing the CSS properties by using DOM manipulation
var h = document.querySelector('div');
h.style.background = 'black';
h.style.color = 'white';

/* Created HTML DOM is:
	<div id="content" style="background: black; color: white;">
		<!-- innerHTML vs innerText -->
		Hi, This is <b> Awesome </b>
	</div>
*/

/*---------------------------------------------------------------*/

//Removing child element usign DOM manipulation
var i = document.getElementById('one');
i.removeChild(i.querySelector('div'));	

//Deleted element in webpage using Parent - Child Relationship
//Deleted the child div of the parent(id="one")

/*---------------------------------------------------------------*/

//Checking whether a element has any child node or not
var j = document.getElementById('two');
if(i.hasChildNodes()){
	console.log('true');
}
else{
	console.log('false');
}
if(j.hasChildNodes()){
	console.log('true');
}
else{
	console.log('false');
}
/* Output
	true
	false
*/

/*---------------------------------------------------------------*/