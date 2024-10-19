// const numbers = [10, 45, 56, 34, 23, 60, 91]

// // using Math.max() method to find the maximum/highest/largest no of an array
// const largestNumber = Math.max(...numbers)

// console.log(largestNumber)
// // Output: 91

// Largest without using Math.max()
const numbers = [10, 45, 78, 23, 89, 14, 56];

let largestNumber = numbers[0];

// Looping through array to find largest number
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
        largestNumber = numbers[i];
    }
}

console.log(largestNumber); // Output: 89

let largest = numbers[0]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i]
    }
    
}

console.log(largest)

