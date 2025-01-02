// Factorial Using Iteration

function factorial(n) {
    // Handle edge case for negative numbers
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }

    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i; // Multiply result by the current number
    }

    return result;
}

// Test cases
console.log(factorial(5));  // Output: 120
console.log(factorial(0));  // Output: 1 (by definition)
console.log(factorial(10)); // Output: 3628800
console.log(factorial(-3)); // Output: "Factorial is not defined for negative numbers."


// Factorial Using Recursion

function factorialRecursive(n) {
    // Handle edge case for negative numbers
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }

    // Base case: 0! = 1
    if (n === 0) {
        return 1;
    }

    // Recursive case
    return n * factorialRecursive(n - 1);
}

// Test cases
console.log(factorialRecursive(5));  // Output: 120
console.log(factorialRecursive(0));  // Output: 1 (by definition)
console.log(factorialRecursive(10)); // Output: 3628800
console.log(factorialRecursive(-3)); // Output: "Factorial is not defined for negative numbers."

console.log("PRACTICE")

console.log("Factorial Iteration")

function factorial(n) {
    if(n < 0){
        return "Factorial is not defined for negative numbers"
    }


    let result = 1;

    for(let i = 1; i <=n ; i++){
        result *= i;
    }

    return result;
}

console.log(factorial(5))

console.log("Factorial Recursion")

function factrec(n) {
    if(n < 0) {
        return "Factorial is not defined for negative numbers"
    }

    if(n===0){
        return 1;
    }

    return n * factrec(n-1);
}

console.log(factrec(5))