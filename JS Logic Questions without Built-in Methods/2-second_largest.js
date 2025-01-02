function findSecondLargest(arr) {
    // Handle edge cases
    if (arr.length < 2) {
        return null; // Not enough elements for a second largest
    }

    // Initialize variables for largest and second largest
    let largest = -Infinity;
    let secondLargest = -Infinity;

    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            // Update second largest before updating largest
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            // Update second largest only if it's not equal to largest
            secondLargest = arr[i];
        }
    }

    // If secondLargest is still -Infinity, it means no second distinct value exists
    return secondLargest === -Infinity ? null : secondLargest;
}

// Test cases
console.log(findSecondLargest([10, 20, 30, 40, 50]));  // Output: 40
console.log(findSecondLargest([50, 50, 50]));          // Output: null
console.log(findSecondLargest([-10, -20, -5, -30]));   // Output: -10
console.log(findSecondLargest([5]));                   // Output: null
console.log(findSecondLargest([100, 90, 90, 80]));     // Output: 90
