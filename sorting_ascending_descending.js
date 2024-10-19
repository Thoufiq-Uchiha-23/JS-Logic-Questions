// ascending order
const numbers = [10, 45, 78, 23, 89, 14, 56];

// Sort the array in ascending order
numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [10, 14, 23, 45, 56, 78, 89]

// descending order

// Sort the array in descending order
numbers.sort((a, b) => b - a);

console.log(numbers); // Output: [89, 78, 56, 45, 23, 14, 10]
