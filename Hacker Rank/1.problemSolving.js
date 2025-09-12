// A child is playing a cloud hopping game. Clouds are arranged in a circle and can be either safe (0) or thunderheads (1). The child starts with 100 energy and jumps k steps at a time.Each jump costs 1 energy.Landing on a thunderhead costs an extra 2 energy.The game ends when the child returns to the starting cloud.
// Task:
// Given the jump size k and the cloud array c, determine the child’s final energy after completing the game.
// Example:
// Input:
// 8 2  
// 0 0 1 0 0 1 1 0
// Output: 92

ANS: 
let c = [1, 1, 1, 0, 1, 1, 0, 0, 0, 0];
let k = 3;
let e = 100;
let n = c.length;
let loopBreaker = 0;
for (let i = 0; i < n; i = (i + k) % n) {
  if (i === 0 && loopBreaker >= 1) break;
  loopBreaker++;
  console.log("i in loop", i);
  e = e - 1 - c[i] * 2;
  console.log("eneger in loop", e);
}
console.log("eneger", e);
