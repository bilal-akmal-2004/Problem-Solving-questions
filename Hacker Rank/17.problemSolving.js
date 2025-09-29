//Problem: Group Anagrams
//Write a function groupAnagrams(words) that takes an array of strings and groups the anagrams together.
//Two words are anagrams if they contain the same letters in the same frequency (e.g., "listen" and "silent").
//The function should return an array of groups (arrays), where each group contains words that are anagrams of each other.
//The order of groups doesn’t matter, and the order of words inside each group doesn’t matter.
//Example:
//groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
// Possible Output:
// [
//   ["eat", "tea", "ate"],
//   ["tan", "nat"],
//   ["bat"]
// ]

function groupAnagrams(arr) {
  let groups = {};
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i].split("").sort().join("");
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(key);
  }

  let result = Object.values(groups);
  console.log(result);
  console.log(groups);
}

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
