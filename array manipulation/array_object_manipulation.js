let users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

// Filter users older than 30
let olderThan30 = users.filter(user => user.age > 30);
console.log(olderThan30); // Output: [{ name: 'Charlie', age: 35 }]