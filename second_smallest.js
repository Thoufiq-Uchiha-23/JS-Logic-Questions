// using for loop finding second smallest
const numbers = [10, 45, 78, 23, 89, 14, 56];

// Initialize smallest and second smallest numbers
// let smallest = Infinity;
// let secondSmallest = Infinity;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < smallest) {
//         secondSmallest = smallest;
//         smallest = numbers[i];
//     } else if (numbers[i] < secondSmallest && numbers[i] !== smallest) {
//         secondSmallest = numbers[i];
//     }
// }

// console.log(secondSmallest); // Output: 14

// using sorting to find second smallest

// Sort the array in ascending order
numbers.sort((a, b) => a - b);

// The second smallest number will be at index 1 (if array has at least two unique numbers)
const secondSmallest = numbers[1];

console.log(secondSmallest); // Output: 14
