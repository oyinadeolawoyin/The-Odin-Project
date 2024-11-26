const convertToCelsius = function(degree) {
   
  const toCelsius = (5/9 * (degree - 32))
  return Math.round(toCelsius * 10) / 10
};

const convertToFahrenheit = function(degree) {

  const toFahrenheit = (((9/5) * degree) + 32)
  return Math.round(toFahrenheit * 10) / 10
};

console.log(convertToCelsius(100))
console.log(convertToFahrenheit(0))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
