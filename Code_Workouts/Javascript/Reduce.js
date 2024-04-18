// Reducers
// Used to reducer an array into a single value
let arr = [1,2,3,9,8,7];

let sum = arr.reduce((acc, value) => {
    return acc = acc + value
})

console.log(sum);   // 30

    //    -- or --

let sum = arr.reduce((acc, value) => acc + value)

console.log(sum);   // 30

/*---------------------------------------------------------------*/

let arr = [1,2,3,9,8,7];

let sum = arr.reduce((acc, value) =>{ 
    console.log(acc, value)
    return acc = acc + value+1
})                                      // Without Initial value

/**
  Output : 
    1 2
    4 3
    8 9
    18 8
    27 7
    35
 */

 /*---------------------------------------------------------------*/

let arr = [1,2,3,9,8,7];

let sum = arr.reduce((acc, value) =>{ 
    console.log(acc, value)
    return acc = acc + value+1
},0)                                    // With Initial value

/**
  Output : 
    0 1
    2 2
    5 3
    9 9
    19 8
    28 7
    36
 */

  /*---------------------------------------------------------------*/
  