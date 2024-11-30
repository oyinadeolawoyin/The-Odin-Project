const findTheOldest = function (array) {
  let getDate = array.map((keys) => {
    if ("yearOfDeath" in keys)
      return [keys.name, keys.yearOfDeath - keys.yearOfBirth];
    else return [keys.name, 2024 - keys.yearOfBirth];
  });

  let biggerNum = 0;
  let getName = "";
  for (i = 0; i < getDate.length; i++) {
    let smallerNum = getDate[i][1];
    if (smallerNum > biggerNum) {
      biggerNum = smallerNum;
      getName = getDate[i][0];
    }
  }
  return getName;
};

// const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1942,
//       yearOfDeath: 1970,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ]

console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
