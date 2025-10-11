//Lisa just got a new math workbook. A workbook contains exercise problems, grouped into chapters. Lisa believes a problem to be special if its index (within a chapter) is the same as the page number where it's located. The format of Lisa's book is as follows:There are  chapters in Lisa's workbook, numbered from  to .The  chapter has  problems, numbered from  to .Each page can hold up to  problems. Only a chapter's last page of exercises may contain fewer than  problems.Each new chapter starts on a new page, so a page will never contain problems from more than one chapter.The page number indexing starts at .Given the details for Lisa's workbook, can you count its number of special problems?ExampleLisa's workbook contains  problems for chapter , and  problems for chapter . Each page can hold  problems.The first page will hold  problems for chapter . Problem  is on page , so it is special. Page  contains only Chapter , Problem , so no special problem is on page . Chapter  problems start on page  and there are  problems. Since there is no problem  on page , there is no special problem on that page either. There is  special problem in her workbook.Note: See the diagram in the Explanation section for more details.

let n = 5; // number of chapters
let k = 3; // max problems per page
let arr = [4, 2, 6, 1, 10]; // problems in each chapter

let workBook = [];
let page = 1;

for (let i = 0; i < n; i++) {
  let problems = arr[i];
  let problemNum = 1;

  while (problems > 0) {
    let pageProblems = [];

    for (let j = 0; j < k && problemNum <= arr[i]; j++) {
      pageProblems.push(problemNum);
      problemNum++;
    }

    workBook.push(pageProblems);
    page++;
    problems -= k;
  }
}

console.log(workBook);

let result = 0;

for (let i = 0; i < workBook.length; i++) {
  for (let j = 0; j < workBook[i].length; j++) {
    let pageNumber = i + 1;
    if (pageNumber === workBook[i][j]) {
      result++;
    }
  }
}
console.log(result);
return result;
