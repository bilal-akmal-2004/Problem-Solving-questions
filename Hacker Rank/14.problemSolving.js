//An English text needs to be encrypted using the following encryption scheme.First, the spaces are removed from the text. Let  be the length of this text.Then, characters are written into a grid, whose rows and columns have the following constraints:Example:After removing spaces, the string is  characters long.  is between  and , so it is written in the form of a grid with 7 rows and 8 columns.Ensure that If multiple grids satisfy the above conditions, choose the one with the minimum area, i.e.The encoded message is obtained by displaying the characters of each column, with a space between column texts. The encoded message for the grid above is:imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau Create a function to encode a message.

let s = "feed the dog";
s = s.replace(/\s+/g, "");
console.log(s);

let l = s.length;

//square root here
let sqrtL = Math.sqrt(l);
//rows and colums
let rows = Math.floor(sqrtL);
let cols = Math.ceil(sqrtL);
if (rows * cols < l) {
  rows += 1;
}
console.log(rows, cols);

let array = [];
let firstValue = 0;
let secondValue = cols;
for (let i = 0; i < rows; i++) {
  array.push(s.slice(firstValue, secondValue));
  firstValue = secondValue;
  secondValue += cols;
  if (secondValue > l) {
    secondValue = l;
  }
}
console.log("Array: ", array);

let resultString = [];
for (let i = 0; i < array[0].length; i++) {
  let verticalString = "";
  for (let k = 0; k < array.length; k++) {
    if (array[k][i]) {
      verticalString += array[k][i];
    }
  }
  resultString.push(verticalString);
}

console.log("resultString: ", resultString);

let result = resultString.join(" ");
console.log(result);
return result;
