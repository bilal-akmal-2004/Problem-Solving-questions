//finding the perfect squares between two variables
let a = 9;
let b = 24;

// make sure a <= b
let low = Math.min(a, b);
let high = Math.max(a, b);

// find the first and last possible square roots in range
let start = Math.ceil(Math.sqrt(low));
let end = Math.floor(Math.sqrt(high));

// count of perfect squares
let count = Math.max(0, end - start + 1);

console.log("Count:", count);
