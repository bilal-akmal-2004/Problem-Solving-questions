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
