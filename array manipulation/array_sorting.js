let arr = [30, 10, 50, 40, 20];

// Sort in ascending order
arr.sort((a, b) => a - b);
console.log(arr); // Output: [10, 20, 30, 40, 50]

// Sort in descending order
arr.sort((a, b) => b - a);
console.log(arr); // Output: [50, 40, 30, 20, 10]

// Reverse the array
arr.reverse();
console.log(arr); // Output: [10, 20, 30, 40, 50] (reversed order)
