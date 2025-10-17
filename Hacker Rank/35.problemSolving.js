//Question:
//Create a JavaScript function called compressString(str) that takes a single string as input and returns a compressed version of that string. The compression should work by replacing sequences of the same character that occur consecutively with the character followed by the number of times it appears in a row. For example, if the input string is "aabcccccaaa", the function should return "a2b1c5a3".
//However, if the resulting compressed string is not shorter than the original string, the function should simply return the original string without any modifications. This ensures that the function only returns a compressed string when it actually provides a shorter representation.
//For instance:
//Input: "aabcccccaaa" → Output: "a2b1c5a3"
//Input: "abc" → Output: "abc"
//Input: "aaAAaa" → Output: "a2A2a2"
//Try to implement the function efficiently by using loops and string concatenation.

let word = "aabcccccaaa";
let result = "";
let count = 1;

for (let i = 0; i < word.length; i++) {
  if (word[i] === word[i + 1]) {
    count++;
  } else {
    result += `${word[i]}${count}`;
    count = 1;
  }
}
console.log(result);

//Question:
//Write a JavaScript function called firstUniqueChar(str) that takes a string as input and returns the first character in that string which does not repeat anywhere else. The goal is to identify the first unique character based on its order of appearance. If every character in the string occurs more than once, the function should return null.
//To solve this, you can loop through the string and count how many times each character appears. Once you have that information, you can loop through the string again to find and return the first character that has a count of exactly one.
//For example:
//Input: "leetcode" → Output: "l"
//Input: "aabbcc" → Output: null
//Input: "aabbcdd" → Output: "c"
//Make sure your function correctly handles edge cases, such as an empty string or strings with all repeated characters. You may assume the input string only contains lowercase English letters, but you can also extend your solution to handle mixed case if you want an extra challenge.

let word = "heloooo";
let obj = {};
for (let i = 0; i < word.length; i++) {
  if (obj[word[i]]) {
    obj[word[i]] += 1;
  } else {
    obj[word[i]] = 1;
  }
}
console.log(obj);

for (let key in obj) {
  if (obj[key] === 1) {
    console.log("Yes");
    return "yes";
  }
}
return null;
