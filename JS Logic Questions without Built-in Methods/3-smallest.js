function findSmallestNumber(arr) {
    // Handle edge case: empty array
    if (arr.length === 0) {
        return null; // No smallest number in an empty array
    }

    // Initialize the smallest number as the first element
    let smallest = arr[0];

    // Loop through the array
    for (let i = 1; i < arr.length; i++) {
        // Update smallest if a smaller number is found
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;
}

// Test cases
console.log(findSmallestNumber([10, 20, 30, 40, 50])); // Output: 10
console.log(findSmallestNumber([-10, -20, -30, -5]));  // Output: -30
console.log(findSmallestNumber([5]));                 // Output: 5
console.log(findSmallestNumber([]));                  // Output: null
console.log(findSmallestNumber([100, 90, 50, 80]));    // Output: 50

// PRACTICE
function smallest(arr){
    if(arr.length === 0){
        return null;
    }

    let smallest = arr[0];

    for(let i=1; i<arr.length; i++) {
        if(arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest
}

console.log(smallest([10, 20, 30, 40, 50]))