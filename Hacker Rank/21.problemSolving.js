//Problem: Longest Word in a Sentence
//Write a function that takes a string (a sentence) and returns the longest word in that string.If two words are the same length, return the first one.Ignore punctuation (.,!?).
// Example:
//Input:
//let sentence = "The quick brown fox jumped over the lazy dog!";
//Output:
//"jumped"
//Explanation:
//Words are ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]
//The longest is "jumped" with 6 letters.
let sentence = "The quick brown fox jumped over the lazy dog!";

sentence = sentence.split(" ");

let largest = 0;
let theWord = "";
for (let word of sentence) {
  console.log(word);
  if (word.length >= largest) {
    largest = word.length;
    theWord = word;
  }
}
console.log(theWord);
