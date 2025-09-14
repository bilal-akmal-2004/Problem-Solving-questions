// Given two strings s and t, and an integer k.Check if you can convert s into t using exactly k operations, where each operation is either deleting the last character of s or appending a new character at the end.Return "Yes" if possible, otherwise "No".
let commonLength = 0;
let minLen = Math.min(s.length, t.length);
for (let i = 0; i < minLen; i++) {
  if (s[i] === t[i]) {
    commonLength++;
  } else {
    break;
  }
}

let deletions = s.length - commonLength;
let additions = t.length - commonLength;
let minSteps = deletions + additions;

console.log("commonLength:", commonLength);
console.log("minSteps:", minSteps);
if (k >= minSteps && (k - minSteps) % 2 === 0) {
  console.log("Yes");
  return "Yes";
} else if (k >= s.length + t.length) {
  console.log("Yes");
  return "Yes";
} else {
  console.log("No");
  return "No";
}
