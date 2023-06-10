const validator = require("validator");

let a = validator.isEmail('test@test.com');
let b = validator.isEmail('abcDE123');

console.log(a);
console.log(b);
