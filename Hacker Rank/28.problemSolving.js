//Count Vowels
//Task:
//Return the number of vowels (a, e, i, o, u) in a given string.
//Example:
//countVowels("JavaScript"); // 3

let vowels = ["a", "e", "i", "o", "u"];
let word = "hello";
let result = 0;
for (let i = 0; i < word.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (word[i] === vowels[j]) {
      result++;
    }
  }
}
console.log(result);
