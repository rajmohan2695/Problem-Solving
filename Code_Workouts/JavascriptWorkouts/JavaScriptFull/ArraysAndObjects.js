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
