//Mutations using Object.assign and Spread operators

// Creating Object
const obj = {
    id:1,
    name:"Raj Mohan",
    age:24
};

console.log("Original Object",obj)

// Using Object.assign()
const obj2 = Object.assign({},obj,{id:2});

console.log("Changed property using Object.assign() ",obj2);

//Using Spread
const obj3 = {...obj,id:3};
console.log("Changed Properties using spread operator ",obj3)

// Output
`
"Original Object"
[object Object] {
  age: 24,
  id: 1,
  name: "Raj Mohan"
}
"Changed property using Object.assign() "
[object Object] {
  age: 24,
  id: 2,
  name: "Raj Mohan"
}
"Changed Properties using spread operator "
[object Object] {
  age: 24,
  id: 3,
  name: "Raj Mohan"
}
`