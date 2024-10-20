function factorial(n) {
  if (n === 0) {
    return 1;
  }
  let result = 1;

  for (i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(7));
