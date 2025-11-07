//Question: sos problem on hacker rank
//link: https://www.hackerrank.com/challenges/mars-exploration/problem?isFullScreen=true
let s = "SOSSOT";
let checker = "SOS";
let diff = 0;
for (let i = 0; i < s.length; i += 3) {
  for (let j = 0; j < 3; j++) {
    if (s[i + j] !== checker[j]) {
      diff++;
    }
  }
}
console.log(diff);
return diff;
