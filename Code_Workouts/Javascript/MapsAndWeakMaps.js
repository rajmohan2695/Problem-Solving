
// Map()
var a = new Map();

{
    let key = 10;
    a.set(key,10)
}

/*---------------------------------------------------------------*/

console.log(a)  // Prints the object(key) and value


// WeakMap()
{
    let key = {c:[1,2]};
    var b = new WeakMap();
    b.set(key,10)
}

console.log(b)  // Prints nothing (empty map), because the the value of let(which is block scoped is garbage collected)

/*---------------------------------------------------------------*/
