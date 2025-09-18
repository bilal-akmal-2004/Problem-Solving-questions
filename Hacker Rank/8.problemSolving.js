// There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.
// Example:The substring we consider is , the first  characters of the infinite string. There are  occurrences of a in the substring.
let s = "aba";
let n = 10;

let aInS = 0;
let len = s.length;
for (let i = 0; i < len; i++) {
  if (s[i] === "a") {
    aInS++;
  }
}
let fullRepeats = Math.floor(n / len);
let remainder = n % len;
let aInRemainder = 0;
for (let i = 0; i < remainder; i++) {
  if (s[i] === "a") {
    aInRemainder++;
  }
}
let result = aInS * fullRepeats + aInRemainder;
console.log(result);
