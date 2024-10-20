let arr = [1, 2, 3, 4, 5];

// slice: Copy a portion of the array.
// spread operator: Clone the entire array.

// Clone using slice
let clonedArr1 = arr.slice();
console.log(clonedArr1); // Output: [1, 2, 3, 4, 5]

// Clone using spread operator
let clonedArr2 = [...arr];
console.log(clonedArr2); // Output: [1, 2, 3, 4, 5]