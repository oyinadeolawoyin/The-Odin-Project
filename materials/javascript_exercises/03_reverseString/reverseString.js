const reverseString = function(word) {
    listOfLetters = []
   
    for (i = 1; i < (word.length+1); i++) {
        listOfLetters.push(word[word.length - i])
         
    }

    word = listOfLetters.join("")
    return(word)
};

// console.log(reverseString('Please, tell me how can i help you'))

// Do not edit below this line
module.exports = reverseString;
