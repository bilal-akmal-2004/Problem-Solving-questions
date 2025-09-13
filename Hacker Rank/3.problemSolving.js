// Problem:
// Given an integer n, calculate and print n! (factorial of n).

// Ans:

let n = 44;
let result = 1;
for (let i = 1; i <= n; i++) {
  result *= i;
  console.log(i);
}
console.log(result);
return result;
