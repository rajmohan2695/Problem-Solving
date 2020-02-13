//ES 5
const elements = [1,2,3,4,5];

var newElements = elements.map(function(ele){
    return 1+ele;
})

console.log(newElements);  // [2, 3, 4, 5, 6]

//ES6

const elements = [1,2,3,4,5];

var newElements = elements.map(ele =>{
    return 1+ele;
})

console.log(newElements);   // [2, 3, 4, 5, 6]

//MAPS in ES6

var map1 = new Map();
map1.set('Hi','Hello');
map1.set(1,2);
map1.set(2,3);
map1.set(3,4);
console.log(map1.get('Hi'));
map1.forEach((value,key) => {
    console.log(`Key is ${key} and the value is ${value}`);
})
map1.delete('Hi')
map1.forEach((value,key) => {
    console.log(`Key is ${key} and the value is ${value}`);
})
map1.clear();
map1.get(1);

/*
Output:
Hello
Key is Hi and the value is Hello
8 Key is 1 and the value is 2
8 Key is 2 and the value is 3
8 Key is 3 and the value is 4
12 Key is 1 and the value is 2
12 Key is 2 and the value is 3
12 Key is 3 and the value is 4
undefined
*/