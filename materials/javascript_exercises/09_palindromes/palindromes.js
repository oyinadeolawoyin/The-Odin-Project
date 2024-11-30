const palindromes = function (word) {
  newList = [];
  word = removeNonAlphabetic(word.toLowerCase());
  console.log(word);
  for (i = 0; i < word.length; i++) {
    newList.push(word[word.length - (i + 1)]);
  }
  console.log(newList.join(""));
  if (word === newList.join("")) return true;
  else return false;
};

function removeNonAlphabetic(str) {
  // Regular expression to match non-alphabetic characters
  const regex = /[^A-Za-z0-9]/g;

  // Replace non-alphabetic characters with an empty string
  return str.replace(regex, "");
}

console.log(palindromes("works with unevenly spaced numbers in a string"));
// Do not edit below this line
module.exports = palindromes;
