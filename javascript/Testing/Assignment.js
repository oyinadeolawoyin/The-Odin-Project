//Assignment one: Capitalize
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

//Assignment two: reverse
function reverse(string) {
  let reverseString = "";

  for (let char = 1; char < string.length + 1; char++) {
    reverseString += string[string.length - char];
  }
  return reverseString;
}

//Assignment three: Calculator
function calculator() {
  function sum(x, y) {
    return x + y;
  }

  function sub(x, y) {
    return x - y;
  }

  function multiply(x, y) {
    return x * y;
  }

  function divide(x, y) {
    if (x === 0 && y === 0) return 0;
    return x === 0 ? undefined : x / y;
  }

  return { sum, sub, multiply, divide };
}

//Assignment one: CaesarCipher
function isNotAlphabet(char) {
  return /[^a-zA-Z]/.test(char);
}

function caesarCipher(string, shiftKey) {
  let letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let cipher = "";

  for (let char of string) {
    if (isNotAlphabet(char)) cipher += char;
    else if (char === char.toUpperCase()) {
      let index = letters.indexOf(char.toLowerCase());
      let key = index + 1 + shiftKey;

      if (key > 26) {
        key = key - letters.length;
        key = letters[key - 1].toUpperCase();
        cipher += key;
      } else {
        key = letters[key - 1];
        cipher += key.toUpperCase();
      }
    } else {
      let index = letters.indexOf(char);
      let key = index + 1 + shiftKey;

      if (key > 26) {
        key = key - letters.length;
        cipher += letters[key - 1];
      } else {
        cipher += letters[key - 1];
      }
    }
  }

  return cipher;
}

//Assignment five: AnanlyzeArray
function analyzeArray(arr) {
  let average = arr.reduce((pre, curr) => {
    return pre + curr;
  });

  return {
    average: average / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}

module.exports = {
  capitalize,
  reverse,
  calculator,
  caesarCipher,
  analyzeArray,
};
