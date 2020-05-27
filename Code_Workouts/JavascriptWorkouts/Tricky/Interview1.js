
// 1. Operator associativity
console.log(1 < 2 < 3);     // true
console.log(3 > 2 > 1);     // false

// It returned false because that's how the javascript engine works on the operator associativity
// It compares left to right : so, 3 > 2 becomes true
// Then, it compares true > 1
// Here it translates the true to 1. So, it becomes 1 > 1
// There you go. It becomes false. 

/*---------------------------------------------------------------*/

// 2. Write a VERY SHORT PROGRAM to find whether the given string is palindrome or not

let str = "LeveL"

console.log(str == str.split('').reverse().join('')) // true

/*---------------------------------------------------------------*/
