const leapYears = function(year) {
   
        if (year % 100 === 0 && year % 400 !== 0 || year % 4 !== 0) {

            return false
        }
        
        else {
            if(year % 4 === 0 || year % 400 === 0) {
                return true
            } 
        }

};

console.log(leapYears(1900),1900%400)
console.log(leapYears(1997), 700%400)
// Do not edit below this line
module.exports = leapYears;
