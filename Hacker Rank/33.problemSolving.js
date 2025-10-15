//Manasa is out on a hike with friends. She finds a trail of stones with numbers on them. She starts following the trail and notices that any two consecutive stones' numbers differ by one of two values. Legend has it that there is a treasure trove at the end of the trail. If Manasa can guess the value of the last stone, the treasure will be hers.Example:She finds  stones and their differences are  or . We know she starts with a  stone not included in her count. The permutations of differences for the two stones are  or . Looking at each scenario, stones might have  or  on them. The last stone might have any of , or  on its face.Compute all possible numbers that might occur on the last stone given a starting stone with a  on it, a number of additional stones found, and the possible differences between consecutive stones. Order the list ascending.

let n = 4; // number of stones (excluding the starting stone)
let a = 10; // first possible difference
let b = 100;
let res = [];
for (let k = 0; k < n; k++) {
  res.push((n - 1 - k) * a + k * b);
}

res = [...new Set(res)].sort((x, y) => x - y);

console.log(res);
return res;
