let arr = [1, 2, 3, 4, 5];

// Sum all elements in the array
let sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15

// Find product of all elements
let product = arr.reduce((acc, num) => acc * num, 1);
console.log(product); // Output: 120
