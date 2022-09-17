/* The calc object contains functions for the 4 basic calculator operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation. */

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const divide = (a, b) => {
  return a / b;
};

const multiply = (a, b) => {
  return a * b;
};

module.exports = { add, subtract, divide, multiply };
