//HI hehe
// Problem: “Secret Sequence Decoder”
// Question:
// Write a JavaScript function called decodeSequence that takes an array of numbers and returns another function.
// The returned function should take a single number as input and output a new array where each element of the original array is multiplied by the input number, but only if the element is greater than the average of the original array.
// If no element is greater than the average, return "No values above average".
// Example:
// const data = [3, 8, 2, 10, 5];
// const decoder = decodeSequence(data);
// console.log(decoder(2));
// // Expected output: [16, 20]  → (only 8 and 10 are above average 5.6)

function decodeSequence(arr) {
  const avg = arr.reduce((sum, val) => sum + val, 0) / arr.length;

  return function (multiplier) {
    const filtered = arr.filter((num) => num > avg);
    if (filtered.length === 0) return "No values above average";
    return filtered.map((num) => num * multiplier);
  };
}

// Example test
const data = [3, 8, 2, 10, 5];
const decoder = decodeSequence(data);

console.log(decoder(2)); // [16, 20]
console.log(decoder(3)); // [24, 30]
