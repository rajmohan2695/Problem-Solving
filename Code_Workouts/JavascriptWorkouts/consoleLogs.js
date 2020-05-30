
// Adding style to the console log
console.log('%c Hello Console', 'color:green;font-weight:bold;font-size:50px')

// show the name of the object
var foo = {
    a : 10,
    b : 20,
    c : 30,
}

var bar = {
    c : 10,
    b : 20,
    a : 30,
}

var baz = {
    b : 40,
    e : 90,
    f : 50,
}

console.log(foo,bar)            //  {a: 10, b: 20, c: 30} {c: 10, b: 20, a: 30}
console.log({foo,bar})          //  Prints object with name

console.table(foo)              // Prints the object in table
console.table({foo,bar,baz})    // Prints object in table with index(first column) as object name
console.table([foo,bar,baz])    // Prints object in table with index as number (starts from 0)

const traceConsole = () => console.trace('Hello');

traceConsole();

traceConsole();

// Prints the line number where the function is called and also prints the line number from where the function is called.

