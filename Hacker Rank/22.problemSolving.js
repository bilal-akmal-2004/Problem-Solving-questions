//Given a set of distinct integers, print the size of a maximal subset of  where the sum of any  numbers in  is not evenly divisible by .
//Example:
//One of the arrays that can be created is . Another is . After testing all permutations, the maximum length solution array has  elements.
//Function Description
//Complete the nonDivisibleSubset function in the editor below.
//nonDivisibleSubset has the following parameter(s):
//int S[n]: an array of integers
//int k: the divisor
//Returns: int: the length of the longest subset of  meeting the criteria

let k = 3;
let S = [1, 7, 2, 4];
let r = {};

for (let number of S) {
  let remainder = number % k;
  if (r[remainder]) {
    r[remainder] += 1;
  } else {
    r[remainder] = 1;
  }
}
console.log("Remainder counts:", r);

let count = 0;
if (r[0]) count += 1;
for (let i = 1; i <= Math.floor(k / 2); i++) {
  if (i !== k - i) {
    let rem1 = r[i] || 0;
    let rem2 = r[k - i] || 0;
    count += Math.max(rem1, rem2);
  }
}

if (k % 2 === 0 && r[k / 2]) count += 1;

console.log("Largest subset size (not divisible by k):", count);

return count;
