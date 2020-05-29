// Dynamic programming
// Recursion approach 

// Fibonacci number of 6 :

// Method 1 :
function fibonacci(n) {
    if( n == 1 || n == 2){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);     // 8
}

console.log(fibonacci(6))

// Method 2
function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6))               // 13

/*---------------------------------------------------------------*/