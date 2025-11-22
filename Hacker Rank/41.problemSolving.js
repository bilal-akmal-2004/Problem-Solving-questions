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

// Count Vowels
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.
// Example input:
// "javascript"

let string = "javascript";
let vowels = ["a", "e", "i", "o", "u"];
let count = 0;
for (let i = 0; i < string.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (string[i] === vowels[j]) {
      count++;
      break;
    }
  }
}
console.log(count);

//Convert Celsius to Fahrenheit

//Formula:
//°F = (°C × 9/5) + 32
//Write a program to convert a Celsius temperature to Fahrenheit.

let c = prompt("Enter the c: ");

let f = c * (9 / 5) + 32;
console.log(f);
return f;

// Problem: Find the Most Frequent Character in a String
// Write a function mostFrequentChar(str) that returns the character that appears the most times.
// If two characters have the same highest frequency, return the first one in the string.
// ✔️ Example Input
// mostFrequentChar("banana");
// ✔️ Expected Output
// "a"
// Explanation:
// b → 1
// a → 3
// n → 2
// → "a" appears most.

let stringosh = "banana";
let obj = {};
for (let i = 0; i < stringosh.length; i++) {
  if (obj[stringosh[i]]) {
    obj[stringosh[i]]++;
  } else {
    obj[stringosh[i]] = 1;
  }
}
console.log(obj);
let largest = 0;
let result = "";
for (let key in obj) {
  if (largest <= obj[key]) {
    largest = obj[key];
    result = key;
  }
  console.log(obj[key]);
}

console.log(result, largest);
