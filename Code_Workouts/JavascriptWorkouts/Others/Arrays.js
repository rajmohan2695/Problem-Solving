	// Working with Arrays in JavaScript
	// Using push and splice
	// push is used to push the elements into an array
	// splice is used to remove the element from an array
	// indexOf is used to find the index of an element from an array
	
	var student = ["Hari","Kushant","John","Kavi"];
	var naughtyList = [];
	
	naughtyList.push(student[2]);
	
	var index = student.indexOf("John");
	
	if(index > -1)			 // if element is not present the "indexOf" returns "-1"
	student.splice(index,1); // "1" represents no of items to be removed after the index 
								
	console.log(student);	
	console.log(naughtyList);