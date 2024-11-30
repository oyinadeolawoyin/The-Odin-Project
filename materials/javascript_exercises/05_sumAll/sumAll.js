const sumAll = function (num1, num2) {
  typeofarg = typeof num1;
  typeofarg2 = typeof num2;
  if (typeofarg !== typeofarg2 || num1 < 0 || num2 < 0) {
    return "ERROR";
  }

  if (num1 < num2) {
    sumAllNumbers = num1;

    for (i = num1 + 1; i < num2 + 1; i++) {
      sumAllNumbers += i;
    }
  } else {
    sumAllNumbers = num2;
    for (i = num2 + 1; i < num1 + 1; i++) {
      sumAllNumbers += i;
    }
  }

  return sumAllNumbers;
};

console.log(sumAll([123, 2], 1));
// Do not edit below this line
module.exports = sumAll;
