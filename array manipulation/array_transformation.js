let arr = [9, 10, 1, 2, 3, 4];

// map - Multiply each element by 3
let multiplied = arr.map((num) => num * 3);
console.log(multiplied); // Output: [3, 6, 9, 12]

// sort - Sort the array (with correct number sorting)
arr.sort((a, b) => a - b);
console.log(arr); // Output: [1, 2, 3, 4] (already sorted in this case)

// reverse - Reverse the array
arr.reverse();
console.log(arr); // Output: [4, 3, 2, 1]