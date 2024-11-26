const fibonacci = function(nthOfSeries) {
        if(nthOfSeries < 0) return "OOPS"
        if(nthOfSeries == 0) return 0
        
        num = 0; num2 = 1
        let newList = []
        newList.push(1)
        
        while((nthOfSeries-1) > 0) {
            sumOfNums = num + num2;
            newList.push(sumOfNums);
            num = num2;
            num2 = sumOfNums;
        nthOfSeries--
        }
        // console.log(newList)
        return newList[(newList.length-1)]
};

console.log(fibonacci("0"))
// Do not edit below this line
module.exports = fibonacci;
