function findSecondSmallest(arr) {
    // Handle edge cases
    if (arr.length < 2) {
        return null; // Not enough elements for a second smallest
    }

    // Initialize variables for smallest and second smallest
    let smallest = Infinity;
    let secondSmallest = Infinity;

    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            // Update second smallest before updating smallest
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
            // Update second smallest only if it's not equal to smallest
            secondSmallest = arr[i];
        }
    }

    // If secondSmallest is still Infinity, it means no second distinct value exists
    return secondSmallest === Infinity ? null : secondSmallest;
}

// Test cases
console.log(findSecondSmallest([10, 20, 30, 40, 50]));  // Output: 20
console.log(findSecondSmallest([50, 50, 50]));          // Output: null
console.log(findSecondSmallest([-10, -20, -5, -30]));   // Output: -20
console.log(findSecondSmallest([5]));                   // Output: null
console.log(findSecondSmallest([100, 90, 90, 80]));     // Output: 90
