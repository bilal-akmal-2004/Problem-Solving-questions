//A driver is driving on the freeway. The check engine light of his vehicle is on, and the driver wants to get service immediately. Luckily, a service lane runs parallel to the highway. It varies in width along its length.Paradise HighwayYou will be given an array of widths at points along the road (indices), then a list of the indices of entry and exit points. Considering each entry and exit point pair, calculate the maximum size vehicle that can travel that segment of the service lane safely.

let width = [2, 3, 1, 2, 3, 2, 3, 3];

let cases = [
  [0, 3],
  [4, 6],
  [6, 7],
  [3, 5],
  [0, 7],
];

let result = [];

for (let i = 0; i < cases.length; i++) {
  let start = cases[i][0];
  let end = cases[i][1];

  let lanes = width.slice(start, end + 1);

  result.push(Math.min(...lanes));
}
console.log(result);
return result;
