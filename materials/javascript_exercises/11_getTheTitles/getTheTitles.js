const getTheTitles = function(array) {
    listOfTitles = []
    array.forEach(element => {
        let getElement = element;
        for(keys in getElement){
            if (keys === "title") {
                listOfTitles.push(getElement[keys]);
            };
        };
    });
    return listOfTitles
};

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
console.log(getTheTitles(books))
// Do not edit below this line
module.exports = getTheTitles;
