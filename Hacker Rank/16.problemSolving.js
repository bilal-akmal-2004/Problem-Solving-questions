// let arr = ["21", "34", "43"];
// let target = 24;
// let threshold = 4;
// this abover question answer is 21, solve with your magical coding skils

let arr = ["21", "34", "43"];
let target = 24;
let threshold = 4;

arr = arr.map(Number);

for (let i = 0; i < arr.length; i++) {
  let diff = Math.abs(arr[i] - target);
  if (diff <= threshold) {
    console.log(arr[i]);
  }
}
