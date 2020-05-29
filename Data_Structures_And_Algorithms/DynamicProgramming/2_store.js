

// 2. Store approach ( Memoization )
let store = new Array();
function fibonacci(n){

    if(n == 1 || n == 2){
        return 1;
    }

    if(store[n]){
        return store[n];
    }
    
    store[n] = fibonacci(n-1) + fibonacci(n-2);

    return store[n];
}

console.log(fibonacci(5));

/*---------------------------------------------------------------*/
