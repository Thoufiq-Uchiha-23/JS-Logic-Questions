// using sort function to find second smallest
const numbers = [10, 45, 78, 23, 89, 14, 56];

// Sort the array in descending order
numbers.sort((a, b) => b - a);

// The second largest number will be at index 1 (if array has at least two unique numbers)
const secondLargest = numbers[1];

console.log(secondLargest); // Output: 78