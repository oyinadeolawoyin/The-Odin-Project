function Calculator() {
    this.add = function() {
        return arguments[0] + arguments[1]
    };
    this.subract = function() {
        return arguments[0] - arguments[1]
    };
    this.muitply = function() {
        return arguments[0] * arguments[1]
    };
    this.divide = function() {
        let num = (arguments[0]/arguments[1])
        return num.toFixed(2)
    };
};

function operators(array) {
    let cal = new Calculator();
    if (array.operators === "+") {
        return cal.add(parseInt(array.firstNumber), parseInt(array.secondNumber));
    }
    else if(array.operators === "-") {
        return cal.subract(parseInt(array.firstNumber), parseInt(array.secondNumber));
    }
    else if(array.operators === "*") {
        return cal.muitply(parseInt(array.firstNumber), parseInt(array.secondNumber));
    }
    else if(array.operators === "/") {
        
        return cal.divide(parseInt(array.firstNumber), parseInt(array.secondNumber));
    }
    else{
        if(array.secondNumber === 0) return ("Math Error.");
        return ("Enter valid operators");
    };
};

let myArray = {}; let calculate = ""; let total = [];

function calculateArray(array) {
    for (i = 0; i < array.length; i++){
        if(array.length > 3){
            myArray["firstNumber"] = array[0];
            myArray["secondNumber"] = array[2];
            myArray["operators"] = array[1];
            calculate = operators(myArray);
            array.splice(0,3);
            array.unshift(calculate);
            total.push(calculate);
            continue
        }
        else if(array.length % 3 === 0 && array.length === 3){
            myArray["firstNumber"] = array[0];
            myArray["secondNumber"] = array[2];
            myArray["operators"] = array[1];
            calculate = operators(myArray);
            total.push(calculate)
        }; 
    };
    return total[total.length-1]
};

let display = document.querySelector("#display");
let buttons = document.querySelectorAll(".buttons");
let numberArray =  []; let listOfOperators = ["+", "-", "*", "/"]; let count = 0;

buttons.forEach(button=>{
    button.addEventListener("click", ()=>{
        if(checkNextWord[0] === calculate && listOfOperators.includes(button.textContent) && count === 1){
            numberArray.push(checkNextWord[0]);
            checkNextWord.pop(); 
            let textNode = document.createTextNode(checkNextWord[0]);
            display.appendChild(textNode);
        };
        count = 0; checkNextWord.splice(0);
        numberArray.push(button.textContent);
        display.innerHTML = ""
        let textContainer = document.createElement("p");
        let textNode = document.createTextNode(numberArray.join(" "))
        textContainer.appendChild(textNode)
        display.appendChild(textContainer);  
       console.log(numberArray);
    });
});
 
document.addEventListener("keydown", (event)=>{
    key = event.key;
    if (!isNaN(key) || listOfOperators.includes(key)) {
        if(checkNextWord[0] === calculate && listOfOperators.includes(key) && count === 1){
            numberArray.push(checkNextWord[0]);
            checkNextWord.pop(); 
            let textNode = document.createTextNode(checkNextWord[0]);
            display.appendChild(textNode);
        };
        count = 0; checkNextWord.splice(0);
        numberArray.push(key);
        display.innerHTML = ""
        let textContainer = document.createElement("p");
        let textNode = document.createTextNode(numberArray.join(" "))
        textContainer.appendChild(textNode)
        display.appendChild(textContainer);  
       console.log(numberArray);
    } 
    else if(key === "Enter"){
            totalAnswer(); 
    }
    else{
        if(key === "Backspace"){
            allowBackspace();
        };
    };
});

let equal = document.querySelector(".equal");
let backSpace = document.querySelector(".backspace")
let numberJoin = ""; let numberArray2 = []; let checkNextWord = [];
let bigDisplay = document.querySelector("#big-display")

function totalAnswer() {
    for(let num of numberArray){
        if(!listOfOperators.includes(num)){
            numberJoin += num;
        }
        else{
            numberArray2.push(numberJoin, num);
            numberJoin = "";
        };  
    };
    if(bigDisplay.children.length > 3){
        bigDisplay.innerHTML = "";
    };
    
    numberArray2.push(numberJoin);
    calculate = calculateArray(numberArray2);
    let textNode = document.createTextNode(calculate);
    let paraText = document.createElement("p");
    let paraDisplay = document.createElement("p")
    let bigDisplayText = document.createTextNode(`${numberArray2.join(" ")} = ${calculate}`); 
    paraDisplay.appendChild(bigDisplayText);
    bigDisplay.appendChild(paraDisplay); 
    paraText.appendChild(textNode);
    display.appendChild(paraText);
    checkNextWord.push(calculate);
    numberArray.splice(0); numberArray2.splice(0);
    numberJoin = ""; count += 1;
};

let backspace = document.querySelector("#backspace");
function allowBackspace(){
    numberArray.pop();
    display.innerHTML = "";
    let displayText = document.createTextNode(numberArray.join(" "));
    display.appendChild(displayText);
};

equal.addEventListener("click", totalAnswer);
backspace.addEventListener("click", allowBackspace);

clear.addEventListener("click", ()=>{
    numberArray.splice(0);
    numberArray2.splice(0);
    display.innerHTML = "";
    count = 0;
});