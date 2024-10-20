let arr = [1, 2, 3, 4, 5];

// for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// forEach - Iterates over the array
arr.forEach(function (num) {
  console.log(num);
});

// map - Create a new array by multiplying each element by 2
let doubled = arr.map(function (num) {
  return num * 3;
});
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// filter - Create a new array with elements greater than 3
let greaterThanThree = arr.filter((num) => num < 5);
console.log(greaterThanThree); // Output: [4, 5]
