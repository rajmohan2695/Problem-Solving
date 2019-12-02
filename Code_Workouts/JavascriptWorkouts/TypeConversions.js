//Type Conversions

//String Conversions 
let a = true;
console.log(typeof a);			// boolean

a = String(a);					// Now the value of 'a' is converted to a string "true"
console.log(typeof a);			// string

/*---------------------------------------------------------------*/

//Numeric Conversions
let b = "11";
console.log(typeof b);			// string
b = Number(b);
console.log(typeof b);			// number

let c = "Hello";
console.log(typeof c);			// string
c = Number(c);
console.log(c);					// NaN

//Numeric Conversions - 2
console.log("11"-2);			// 9
console.log(typeof (12 -"11"));	// number
console.log(typeof "11"-2);		// NaN

//Numeric Conversions - 3
console.log("10"/2);			// 5
console.log(10/"2");			// 5
console.log("10"/"2");			// 5

//Numeric Conversions - 4
console.log(Number(""));			// 0
console.log(Number(" "));			// 0
console.log(Number(true));			// 1
console.log(Number(false));			// 0
console.log(Number(null));			// 0
console.log(Number(undefined));		// NaN

/*---------------------------------------------------------------*/