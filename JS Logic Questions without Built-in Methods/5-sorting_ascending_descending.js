// ASCENDING ORDER

function sortAscending(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j+1]
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// Test case
console.log(sortAscending([64, 34, 25, 12, 22, 11, 90])); // Output: [11, 12, 22, 25, 34, 64, 90]

// DESCENDING ORDER
function sortDescending(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        // Swap arr[j] and arr[j+1]
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// Test case
console.log(sortDescending([64, 34, 25, 12, 22, 11, 90])); // Output: [90, 64, 34, 25, 22, 12, 11]

let arr = [3, 5, 2, 8, 1];
console.log(sortAscending(arr)); // Output: [1, 2, 3, 5, 8]
console.log(sortDescending(arr)); // Output: [8, 5, 3, 2, 1]

// PRACTICE
console.log("Practice");

function ascend(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

function descend(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

let array = [3, 5, 2, 8, 1];
console.log(ascend(array));
console.log(descend(array));
