let arr = [1, 2, 3, 4, 5];

// Push - Add to the end
arr.push(6); // arr = [1, 2, 3, 4, 5, 6]
console.log(arr)

// Pop - Remove from the end
arr.pop(); // arr = [1, 2, 3, 4, 5]
console.log(arr)

// Unshift - Add to the start
arr.unshift(0); // arr = [0, 1, 2, 3, 4, 5]
console.log(arr)

// Shift - Remove from the start
arr.shift(); // arr = [1, 2, 3, 4, 5]
console.log(arr)

// Splice - Add/Remove elements at a specific index
arr.splice(2, 1, 99); // arr = [1, 2, 99, 4, 5] (removed 3, added 99)
console.log(arr)