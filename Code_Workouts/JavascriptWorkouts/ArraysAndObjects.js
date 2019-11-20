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

//Sorting Objects with respective to the keys present in it using anonymous function
var myArr = [{
	fruit : "banana",
	id : 2
},
{
	fruit : "apple",
	id : 1
},
{
	fruit : "orange",
	id : 3
}]

myArr.sort(function(a,b){
	if(a.fruit < b.fruit){			// for id(number), we can use 'return a.id - b.id;'
		return -1;
	}
	else{
		return 1;
	}
});

console.log(myArr);

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

//Creating Object

var a = {
	obj1 : "Hello",
	obj2 : "World",
	obj3 : function(){					//Declaring function inside an object
		return this.obj1+this.obj2;
	}
}

console.log(a.obj1);					//Accessing a component inside the function
console.log(a.obj2);
console.log(a.obj3());					//Accessing the function inside object

/*	Output:
		Hello
		World
		HelloWorld
*/

/*---------------------------------------------------------------*/