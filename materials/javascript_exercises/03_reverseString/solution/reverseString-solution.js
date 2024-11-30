const reverseString = function (string) {
  get = string.split("");
  console.log(get);
  get2 = get.reverse();
  console.log(get2);
  return get2.join("");
};

reverseString("Tolani");
module.exports = reverseString;
