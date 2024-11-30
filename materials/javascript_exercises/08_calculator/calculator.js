const add = function (num) {
  return arguments[0] + arguments[1];
};

const subtract = function (num) {
  return arguments[0] - arguments[1];
};

const sum = function (num) {
  return num.reduce((total, currentItem) => {
    return total + currentItem;
  });
};

const multiply = function (num) {
  return num.reduce((total, currentItem) => {
    return total * currentItem;
  });
};

const power = function (num) {
  return arguments[0] ** arguments[1];
};

const factorial = function (num) {
  let numfactoria = 1;
  for (i = 1; i < num + 1; i++) {
    numfactoria *= i;
  }
  return numfactoria;
};

console.log(factorial(2));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
