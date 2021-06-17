function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function sum(a, b, c) {
  return a + b + c;
}

function multiply(a, b) {
  return a * b;
}

function power(num) {
  return num ** num;
}

function factorial(num) {
  return num % 2 === 0;
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
