//We define a magic square to be an  matrix of distinct positive integers from  to  where the sum of any row, column, or diagonal of length  is always equal to the same number: the magic constant.You will be given a  matrix  of integers in the inclusive range . We can convert any digit  to any other digit  in the range  at cost of . Given , convert it into a magic square at minimal cost. Print this cost on a new line.Note: The resulting magic square must contain distinct integers in the inclusive range .
const s = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 5],
];
const magicSquares = [
  [
    [8, 1, 6],
    [3, 5, 7],
    [4, 9, 2],
  ],
  [
    [6, 1, 8],
    [7, 5, 3],
    [2, 9, 4],
  ],
  [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6],
  ],
  [
    [2, 9, 4],
    [7, 5, 3],
    [6, 1, 8],
  ],
  [
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2],
  ],
  [
    [4, 3, 8],
    [9, 5, 1],
    [2, 7, 6],
  ],
  [
    [6, 7, 2],
    [1, 5, 9],
    [8, 3, 4],
  ],
  [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8],
  ],
];
let result = [];
for (let i = 0; i < magicSquares.length; i++) {
  let cost = 0;
  for (let k = 0; k < magicSquares[i].length; k++) {
    for (let z = 0; z < magicSquares[i][k].length; z++) {
      cost += Math.abs(magicSquares[i][k][z] - s[k][z]);
    }
  }
  result.push(cost);
  console.log(cost);
}
console.log(result);
let largest = 0;
for (let i = 0; i < result.length; i++) {
  if (result[i] >= largest) {
    largest = result[i];
  }
}
console.log(largest);
let smallest = largest;
for (let i = 0; i < result.length; i++) {
  if (result[i] <= smallest) {
    smallest = result[i];
  }
}

console.log(smallest);
return smallest;
