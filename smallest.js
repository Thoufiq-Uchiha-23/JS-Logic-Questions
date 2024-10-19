// // finding smallest using min function
const numbers = [10, 45, 78, 23, 89, 14, 56];

// // Find the smallest number using Math.min and spread operator
// const smallestNumber = Math.min(...numbers);

// console.log(smallestNumber); // Output: 10

// doing manually using for loop to find smallest
let smallestNumber = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < smallestNumber) {
    smallestNumber = numbers[i];
  }
}

console.log(smallestNumber); // Output : 10
