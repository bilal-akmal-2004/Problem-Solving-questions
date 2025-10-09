//Little Bobby loves chocolate. He frequently goes to his favorite  store, Penny Auntie, to buy them. They are having a promotion at Penny Auntie. If Bobby saves enough wrappers, he can turn them in for a free chocolate.Example He has  to spend, bars cost , and he can turn in  wrappers to receive another bar. Initially, he buys  bars and has  wrappers after eating them. He turns in  of them, leaving him with , for  more bars. After eating those two, he has  wrappers, turns in  leaving him with  wrapper and his new bar. Once he eats that one, he has  wrappers and turns them in for another bar. After eating that one, he only has  wrapper, and his feast ends. Overall, he has eaten  bars.

let n = 7; // total money Bobby has
let c = 3; // cost of one chocolate
let m = 2; // warpper for free chocolate

let bars = Math.floor(n / c);
console.log(bars);
let wrappers = bars;
console.log(wrappers);

while (wrappers >= m) {
  wrappers -= m;

  console.log("in loop wrapperL ", wrappers);
  bars++;
  wrappers++;
}
console.log(bars);
return bars;
