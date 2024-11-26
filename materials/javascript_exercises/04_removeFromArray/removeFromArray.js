const removeFromArray = function(array) {
    for(i = 1; i < (arguments.length); i++) {
        argumentElement = arguments[i]
        for (j = 0; j < (array.length); j++) {
            if (array[j] === argumentElement) {
               
                array.splice(j, 1)
                j--
            }
        }
    }
    
    return array  
}



list = [1, 2, 2, 3, 4, 5, 6, 7, 8]
console.log(removeFromArray(list, 2, 3, 4, 5, 6, 7))


// Do not edit below this line
module.exports = removeFromArray;
