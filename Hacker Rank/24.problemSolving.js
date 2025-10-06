//The distance between two array values is the number of indices between them. Given , find the minimum distance between any pair of equal elements in the array. If no such value exists, return .Example:There are two matching pairs of values:  and . The indices of the 's are  and , so their distance is . The indices of the 's are  and , so their distance is . The minimum distance is .Function Description:Complete the minimumDistances function in the editor below.minimumDistances has the following parameter(s):int a[n]: an array of integers
let arr = [7, 1, 3, 4, 1, 7];
let result = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      result.push(j - i);
    }
  }
}
if (result.length === 0) return -1;

console.log(Math.min(...result));
return Math.min(...result);
