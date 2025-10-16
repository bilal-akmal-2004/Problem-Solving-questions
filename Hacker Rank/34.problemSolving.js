//Happy Ladybugs is a board game having the following properties:The board is represented by a string, , of length . The  character of the string, , denotes the  cell of the board.If  is an underscore (i.e., _), it means the  cell of the board is empty.If  is an uppercase English alphabetic letter (ascii[A-Z]), it means the  cell contains a ladybug of color .String  will not contain any other characters.A ladybug is happy only when its left or right adjacent cell (i.e., ) is occupied by another ladybug having the same color.In a single move, you can move a ladybug from its current position to any empty cell.Given the values of  and  for  games of Happy Ladybugs, determine if it's possible to make all the ladybugs happy. For each game, return YES if all the ladybugs can be made happy through some number of moves. Otherwise, return NO.Example:You can move the rightmost  and  to make  and all the ladybugs are happy. Return YES.

let b = "RBY_YBR";
let wordObject = {};

for (let i = 0; i < b.length; i++) {
  if (wordObject[b[i]]) {
    wordObject[b[i]]++;
  } else {
    wordObject[b[i]] = 1;
  }
}
delete wordObject._;

console.log(wordObject);
for (let key in wordObject) {
  console.log(key, wordObject[key]);
  if (wordObject[key] >= 2) {
    console.log("HI");
  } else {
    return "NO";
  }
}
return "YES";
