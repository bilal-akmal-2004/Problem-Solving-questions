//Question Link: https://www.hackerrank.com/challenges/caesar-cipher-1/problem?isFullScreen=true
let s = "159357lcfd";
let k = 87;

let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let capitalLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let result = "";

for (let i = 0; i < s.length; i++) {
  for (let j = 0; j < letters.length; j++) {
    if (s[i] === letters[j]) {
      if (j + k >= 26) {
        let rightIndex = (j + k) % 26;
        result += letters[rightIndex];
      } else {
        result += letters[j + k];
      }
    }
  }
  for (let j = 0; j < capitalLetters.length; j++) {
    if (s[i] === capitalLetters[j]) {
      if (j + k >= 26) {
        let rightIndex = (j + k) % 26;
        result += capitalLetters[rightIndex];
      } else {
        result += capitalLetters[j + k];
      }
    }
  }
  if (/[^a-zA-Z0-9]/.test(s[i])) {
    result += s[i];
  }
  if (/[0-9]/.test(s[i])) {
    result += s[i];
  }
}
console.log(result);
return result;
