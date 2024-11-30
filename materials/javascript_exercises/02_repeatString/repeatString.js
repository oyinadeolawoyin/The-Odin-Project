const repeatString = function (stringWord, numbers) {
  let timesToShowString = numbers;

  if (numbers < 0) {
    return "ERROR";
  }

  let addWord = "";
  while (timesToShowString - 1 >= 0) {
    addWord += stringWord;
    timesToShowString--;
  }
  return addWord;
};

console.log(repeatString("hey", 5));
// Do not edit below this line
module.exports = repeatString;
