// Question: https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem
let correctWord = "hackerrank";
let count = 0;

for (let j = 0; j < s.length; j++) {
  if (s[j] === correctWord[count]) {
    count++;
  }
  if (count === correctWord.length) {
    return "YES";
  }
}

return "NO";
