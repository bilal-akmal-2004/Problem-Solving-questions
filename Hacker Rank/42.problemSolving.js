//Question:
// The given JavaScript code starts with an array of numbers and performs multiple nested loops to generate new arrays named outputOne, outputTwo, and outputThree.
// Explain what the purpose of each of these three arrays (outputOne, outputTwo, and outputThree) is.
// Describe what the final output (outputThree) represents after the entire code executes.
// Identify any redundant or inefficient parts of the code and explain how they could be simplified or optimized while keeping the same logical result.

// Answer:
let r = [1, 1, 2, 2, 4, 4, 5, 5, 5, 6, 6, 9, 9];

let outputOne = [];

for (let i = 0; i < r.length; i++) {
  for (let j = 0; j < r.length; j++) {
    if (r[i] + r[j] === 10) {
      outputOne.push([r[i], r[j]]);
    }
  }
}
console.log(outputOne);

let outputTwo = [];

for (let i = 1; i < outputOne.length; i++) {
  let current = outputOne[i];
  let duplicate = false;

  for (let j = 0; j < outputTwo.length; j++) {
    if (current.toString() === outputTwo[j].toString()) {
      duplicate = true;
      break;
    }
  }
  if (!duplicate) {
    outputTwo.push(current);
  }
}
console.log(outputTwo);
for (let i = 0; i < outputTwo.length; i++) {
  outputTwo[i].sort();
}
console.log(outputTwo);

let outputThree = [];

for (let i = 1; i < outputTwo.length; i++) {
  let current = outputTwo[i];
  let duplicate = false;

  for (let j = 0; j < outputThree.length; j++) {
    if (current.toString() === outputThree[j].toString()) {
      duplicate = true;
      break;
    }
  }
  if (!duplicate) {
    outputThree.push(current);
  }
}
console.log(outputThree);
