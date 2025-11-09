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
// Time Complexity: O(n)
// Space Complexity: O(1)

// Explanation:
// 1. We define the target word "hackerrank" and initialize a counter to track our position in this word.
// 2. We iterate through each character in the input string `s`.
// 3. If the current character matches the character in `correctWord` at the current `count` index, we increment `count`.
// 4. If `count` reaches the length of `correctWord`, it means we have found all characters in order, so we return "YES".
// 5. If we finish iterating through `s` without finding all characters, we return "NO".
// Time Complexity is O(n) because we may need to check each character in the input string once.function hackerrankInString(s) {
// Space Complexity is O(1) since we are using a fixed amount of extra space regardless of input size.
// function hackerrankInString(s) {
//   let correctWord = "hackerrank";
//   let count = 0;

//   for (let j = 0; j < s.length; j++) {
//     if (s[j] === correctWord[count]) {
//       count++;
//     }
//     if (count === correctWord.length) {
//       return "YES";
//     }
//   }

//   return "NO";
// }
