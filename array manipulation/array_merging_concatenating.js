let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Using concat
let merged = arr1.concat(arr2);
console.log(merged); // Output: [1, 2, 3, 4, 5, 6]

// Using spread operator
let mergedWithSpread = [...arr1, ...arr2];
console.log(mergedWithSpread); // Output: [1, 2, 3, 4, 5, 6]