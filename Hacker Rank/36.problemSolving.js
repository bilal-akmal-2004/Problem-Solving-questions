//Question:
// A password is considered strong if it satisfies the following criteria:
// It has at least 6 characters.
// It contains at least one digit.
// It contains at least one lowercase English character.
// It contains at least one uppercase English character.
// It contains at least one special character. The special characters are: !@#$%^&*()-+
// Given a string representing the password, find the minimum number of characters to add to make the password strong.

//Solution:

let password = "Hello123@";
let count = 0;
if (!/[A-Z]/.test(password)) {
  count++;
}
if (!/[a-z]/.test(password)) {
  count++;
}
if (!/[0-9]/.test(password)) {
  count++;
}
if (!/[^A-Za-z0-9]/.test(password)) {
  count++;
}
if (password.length < 6) {
  let valuesToAdd = 6 - (password.length + count);
  count += valuesToAdd;
}
console.log(count);
return count;
// Output: 0
// Explanation: The password "Hello123@" already meets all the criteria for a strong password.
// Output: 0
// Explanation: The password "Hello123@" already meets all the criteria for a strong password.
