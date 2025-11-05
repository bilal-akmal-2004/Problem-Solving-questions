function isAlternating(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      return false; // two same letters in a row
    }
  }
  return true; // no repeats found
}
let uniqueChars = [...new Set(s)];
console.log(uniqueChars); // ["b", "e", "a", "f"]
let longest = 0;
for (let i = 0; i < uniqueChars.length; i++) {
  for (let j = i + 1; j < uniqueChars.length; j++) {
    // create a regex that keeps only these two letters
    let regex = new RegExp(`[^${uniqueChars[i]}${uniqueChars[j]}]`, "g");

    // remove all other letters
    let filtered = s.replace(regex, "");

    if (isAlternating(filtered)) {
      if (filtered.length >= longest) {
        longest = filtered.length;
      }
    }

    console.log(`Keeping ${uniqueChars[i]} & ${uniqueChars[j]} -> ${filtered}`);
  }
}
console.log(longest);
return longest;
