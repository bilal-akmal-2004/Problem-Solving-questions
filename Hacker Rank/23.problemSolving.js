//Problem: Beautiful Triplets
//Given a sorted list of integers arr and a number d, find how many triplets (a, b, c) exist such that:
//b - a = d
//c - b = d
//In other words, count all groups of three numbers that form an arithmetic sequence with a common difference of d.
//Example:
//arr = [1, 2, 4, 5, 7, 8, 10]
//d = 3
//Beautiful triplets → (1, 4, 7), (2, 5, 8), (4, 7, 10)
//Output: 3
let arr = [1, 2, 4, 5, 7, 8, 10];
let d = 3;
let result = 0;
for (let i = 0; i < arr.length; i++) {
  let exist = arr[i] + d;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === exist) {
      let existTwo = exist + d;
      for (let k = 0; k < arr.length; k++) {
        if (arr[k] === existTwo) {
          result++;
        }
      }
    }
  }
}
console.log(result);
return result;
