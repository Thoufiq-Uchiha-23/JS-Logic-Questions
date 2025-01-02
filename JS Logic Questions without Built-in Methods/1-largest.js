function findLargestNumber(arr) {
    // Handle edge cases (empty array)
    if (arr.length === 0) {
        return null; // No largest number in an empty array
    }

    // Initialize the largest number as the first element
    let largest = arr[0];

    // Loop through the array
    for (let i = 1; i < arr.length; i++) {
        // Update largest if a larger number is found
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

// Test cases
console.log(findLargestNumber([10, 20, 30, 40, 50])); // Output: 50
console.log(findLargestNumber([-10, -20, -30, -5]));  // Output: -5
console.log(findLargestNumber([5]));                 // Output: 5
console.log(findLargestNumber([]));                  // Output: null
