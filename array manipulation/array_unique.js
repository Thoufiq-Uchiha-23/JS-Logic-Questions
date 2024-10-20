let arr = [1, 2, 2, 3, 4, 4, 5];

// Create a set to remove duplicates
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]