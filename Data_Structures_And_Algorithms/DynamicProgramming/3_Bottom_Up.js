
// Bottom up approach

function fibonacci(n){
    let fib = new Array(n+1);
    fib[1] = fib[2] = 1;

    for(let i=3;i<n+1;i++){
        fib[i] = fib[i-1] + fib[i-2];
    }

    return fib[n];
}

console.log(fibonacci(5));

/*---------------------------------------------------------------*/
