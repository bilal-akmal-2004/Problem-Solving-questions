let a = 9;
let b = 24;
let largest;
let shortest;

if (a > b) {
  largest = a;
} else {
  largest = b;
}

if (a < b) {
  shortest = a;
} else {
  shortest = b;
}

let difference = Math.abs(a - b);

console.log("Largest number is:", largest);

console.log("Shortest number is:", shortest);

console.log("Difference is:", difference);

let squares = [];

for (let i = 0; i < largest; i++) {
  if (i * i <= largest) {
    squares.push(i * i);
  } else {
    break;
  }
}

console.log("Squares: ", squares);

let count = 0;

for (let i = shortest; i <= largest; i++) {
  for (let j = 0; j < squares.length; j++) {
    if (i === squares[j]) {
      count++;
    }
  }
}
console.log("Count:", count);
return count;
