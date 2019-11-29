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

//forEach loop
function add(args){
j=0;    
args.forEach((i,k,l,m)=>{
    j+=i;    
	console.log(m);
})
console.log(j);
}
add(1,2,3,4,5);

//forin
function add(...args){
for(let i in args){
    console.log(i);    
}
}
add(1,2,3,4,5);

/* Output
	0 
	1 
	2 
	3 
	4
*/

//forof							// It is used to iterate all the elements present inside the function
function add(args){
j=0;    
for(let i of args){
    j+=i;    
}
console.log(j);					// 15
}
add([1,2,3,4,5]);

/*---------------------------------------------------------------*/

//while loop
var i=1;
while(i<=5){
	console.log(i);
	i++;
}
/*	Output:
		1
		2
		3
		4
		5
		5
*/

/*---------------------------------------------------------------*/

//do..while loop
var i=1000;
do{
	console.log('Hello');
}while(i<10);

/* Output
	Hello
*/

/*---------------------------------------------------------------*/