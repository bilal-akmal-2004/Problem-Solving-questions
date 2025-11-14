// Problem: Even or Odd
// Write a JavaScript program that checks if a number is even or odd.
// Example:
// Input: 4 → Output: Even
// Input: 7 → Output: Odd
// Hint: Use the modulus operator (%) to check the remainder when dividing by 2.
// Solution:

let a = 10;

if (a % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

//  complexity: O(1)

//Example 3: Check if someone is old enough
let age = 16;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
