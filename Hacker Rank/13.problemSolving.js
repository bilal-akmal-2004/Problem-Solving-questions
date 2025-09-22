//David has several containers, each with a number of balls in it. He has just enough containers to sort each type of ball he has into its own container. David wants to sort the balls using his sort method. David wants to perform some number of swap operations such that: Each container contains only balls of the same type. No two balls of the same type are located in different containers. Example David has containers and different types of balls, both of which are numbered from to . The distribution of ball types per container are shown in the following diagram.

let container = [
  [1, 1, 1, 1],
  [0, 2, 1, 1],
];
let containerTotal = [];
for (let i = 0; i < container.length; i++) {
  let cTotal = 0;
  for (let k = 0; k < container[i].length; k++) {
    cTotal += container[i][k];
  }
  containerTotal.push(cTotal);
}
console.log("Container Totals:", containerTotal);

let typeTotal = [];
for (let k = 0; k < container[0].length; k++) {
  let tTotal = 0;
  for (let i = 0; i < container.length; i++) {
    tTotal += container[i][k];
  }
  typeTotal.push(tTotal);
}
console.log("Type Totals:", typeTotal);

containerTotal.sort((a, b) => a - b);
typeTotal.sort((a, b) => a - b);

let result =
  JSON.stringify(containerTotal) === JSON.stringify(typeTotal)
    ? "Possible"
    : "Impossible";

console.log("Result:", result);
return result;
