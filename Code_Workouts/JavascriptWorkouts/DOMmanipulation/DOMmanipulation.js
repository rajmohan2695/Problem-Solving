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

//Looping
//for loop
var str = "Hello World";
for(var i=0;i<str.length;i++){
console.log(str[i])
}

//foreach loop
for(var i=0;i<str.length;i++){
console.log(str[i])
}

/* Output for both will be 
H
e
l
l
o

W
o
r
l
d
*/

/*---------------------------------------------------------------*/

//Arrays
//using 'slice' method
var arr = [1,2,3,4,5];
console.log(arr.slice(1,4));
/* Output:
	[2, 3, 4]
*/

/*---------------------------------------------------------------*/

//using 'splice' method
var arr = [1,2,3,4,5];
arr.splice(2,0,6,7,8,9);
console.log(arr);
/* Output:
	[1, 2, 6, 7, 8, 9, 3, 4, 5]
*/

/*---------------------------------------------------------------*/

//using 'concat' method
var arr = [1,2,3,4,5,6];
var arr2 = [6,5,4,3,2,1];
var final = arr.concat(arr2);
console.log(final);
/* Output
	[1, 2, 3, 4, 5, 6, 6, 5, 4, 3, 2, 1]
*/

/*---------------------------------------------------------------*/

//Sorting array elements
var arr = ["Banana","Apple","Cat","Bat"];
arr.sort();
console.log(arr);

/* Output:
	["Apple", "Banana", "Bat", "Cat"]
*/

//Sorting array number elements
function arrSort(a,b){
	return a-b; //for descending order : b-a
}
var arr = [5,3,4,2,1];
arr.sort(arrSort);
console.log(arr.sort(arrSort));

/* Output
	[1, 2, 3, 4, 5]
*/

/*---------------------------------------------------------------*/

//Manipulations inside arrays using methods in array

var arr = [1,2,3,4,5,6,7,8,9,10];
arr.shift();//deletes the first element
console.log(arr);
arr.unshift(1);//inserts the element in the first position
console.log(arr);
arr.pop(); //deletes the last element in the array
console.log(arr);
arr.push(10); //inserts at the end of the array
arr[arr.length] = 10; //does the same like arr.push(10);
console.log(arr);

/* Output
	[2, 3, 4, 5, 6, 7, 8, 9, 10]
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	[1, 2, 3, 4, 5, 6, 7, 8, 9]
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10]
*/

/*---------------------------------------------------------------*/

//Datatype initialization

var a = "Hello";				// Take it as a String automatically
console.log(typeof(a));

var b = new String("Hello");	// Take is an object if we use 'new' kwyword
console.log(typeof(b));

/* Output
	string
	object
*/

/*---------------------------------------------------------------*/
