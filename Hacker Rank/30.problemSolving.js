//Problem: Workbook Pagination
// A workbook contains multiple chapters.
// Each chapter has a certain number of problems, numbered from 1 up to the total number of problems in that chapter.
// Each page of the workbook can contain at most k problems.
// The problems must be placed in order — you cannot mix chapters or skip problem numbers.
// You need to create a data structure (workBook) that represents how the workbook pages are organized.
// Each page should be an array (or list) of problem numbers.
// Pages should be filled sequentially according to the chapter problem counts.
// Input:
// An integer n — the number of chapters in the workbook.
// An integer k — the maximum number of problems per page.
// An array arr — where arr[i] is the number of problems in chapter i + 1.
// Output:
// A 2D array (list of lists) where each inner array represents a page containing the problem numbers printed on that page.
// Example
// Input:
// n = 5
// k = 3
// arr = [4, 2, 6, 1, 10]
// Expected Output:
// [
//   [1, 2, 3],
//   [4],
//   [1, 2],
//   [1, 2, 3],
//   [4, 5, 6],
//   [1],
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [10]
// ]

let n = 5; // number of chapters in the workbook
let k = 3; // maximum number of problems per page
let arr = [4, 2, 6, 1, 10]; // number of problems in each chapter
let workBook = [];
for (let i = 0; i < arr.length; i++) {
  let pushingArray = [];
  for (let j = 0; j < arr[i]; j++) {
    pushingArray.push(j + 1);
    if (pushingArray.length >= k) {
      workBook.push(pushingArray);
      pushingArray = [];
    }

    if (arr[i] - 1 === j) {
      if (pushingArray.length !== 0) {
        workBook.push(pushingArray);
        pushingArray = [];
      }
    }
  }
}
console.log(workBook);
