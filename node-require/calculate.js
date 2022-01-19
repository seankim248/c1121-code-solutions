const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

console.log(process.argv[1]);

var num1 = parseInt(process.argv[2]);
var num2 = parseInt(process.argv[4]);
var operator = process.argv[3];

if (operator === 'plus') {
  console.log(add(num1, num2));
}

if (operator === 'minus') {
  console.log(subtract(num1, num2));
}

if (operator === 'times') {
  console.log(multiply(num1, num2));
}

if (operator === 'over') {
  console.log(divide(num1, num2));
}
