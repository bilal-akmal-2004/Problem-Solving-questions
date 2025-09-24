//hi solving new problemosA modified Kaprekar number is a positive whole number with a special property. If you square it, then split the number into two integers and sum those integers, you have the same value you started with.Consider a positive whole number  with  digits. We square  to arrive at a number that is either  digits long or  digits long. Split the string representation of the square into two parts,  and . The right hand part,  must be  digits long. The left is the remaining substring. Convert those two substrings back to integers, add them and see if you get .

let result = [];

for (let i = p; i <= q; i++) {
  let squared = (i * i).toString();
  let d = i.toString().length;

  let right = squared.slice(-d);
  let left = squared.slice(0, squared.length - d) || "0";

  let sum = Number(left) + Number(right);

  if (sum === i) {
    result.push(i);
  }
}

if (result.length > 0) {
  console.log(result.join(" "));
  return result.join(" ");
} else {
  console.log("INVALID RANGE");
  return "INVALID RANGE";
}
