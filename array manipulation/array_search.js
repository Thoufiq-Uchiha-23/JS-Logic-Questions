let arr = [10, 20, 30, 40, 50];

// indexOf - Find index of an element
console.log(arr.indexOf(30)); // Output: 2

// includes - Check if an element exists
console.log(arr.includes(40)); // Output: true

// find - Find the first element that satisfies a condition
let greaterThan25 = arr.find(num => num > 25);
console.log(greaterThan25); // Output: 30

// findIndex - Find the index of the first element that satisfies a condition
let index = arr.findIndex(num => num > 25);
console.log(index); // Output: 2