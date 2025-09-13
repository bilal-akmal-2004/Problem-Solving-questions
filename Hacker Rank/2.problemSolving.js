let digits = n.toString().split("").map(Number);
console.log(digits); // [1, 2, 3, 4, 5]
let result = 0;
for (let i = 0; i < digits.length; i++) {
  if (n % digits[i] === 0) {
    result++;
  }
}
console.log(result);
return result;
