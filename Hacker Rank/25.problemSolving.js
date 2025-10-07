//Halloween Sale Problem
// You start with a budget and want to buy as many games as possible.
// The first game has an initial price `p`.
// Each next game costs `d` less, but the price never goes below `m`.
// You have `s` total budget. We need to find how many games you can buy.

let p = 20;
let d = 3;
let m = 6;
let s = 80;
let result = 0;

while (s >= p) {
  s -= p;
  result++;
  p = Math.max(p - d, m);
}

console.log(result);
