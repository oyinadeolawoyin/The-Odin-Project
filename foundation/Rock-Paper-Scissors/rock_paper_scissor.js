function getComputerCoice() {

    let wordOfChoice = []
    wordOfChoice[0] = "Rock"
    wordOfChoice[1] = "Paper"
    wordOfChoice[2] ="Scissor"
    
    //This'll Generate a random number between 0 and the words array lenght
    let randomPick = Math.floor(Math.random()*wordOfChoice.length)
    return wordOfChoice[randomPick]
}


function playRound(playerSelection, computerSelection) {

    if (computerSelection === "rock" && playerSelection === "scissor"){
        return('You Lose! Rock smash Scissor')
    } 
    
    else if (computerSelection ==="scissor" && playerSelection === "rock") {
        return('You win! Rock smash scissor')
    }
     
    else if (computerSelection === "paper" && playerSelection === "rock") {
        return('You Lose! Paper cover Rock')
    } 
    
    else if (computerSelection === "rock" && playerSelection === "paper") {
        return('You win! Paper cover Rock')
    } 
    
    else if (computerSelection === "scissor" && playerSelection === "paper") {
        return('You Lose! Scissor cut Paper')
    } 

    else if(computerSelection === playerSelection){
        return(`Draw! You both have the same value! ${computerSelection}.`)
    }
    
    else {
        return("You win! Scissor cut Paper")
    }
} 


function playerSelection(callback) {
    let playerWord = document.querySelector("#selection");
    let computerWord = getComputerCoice().toLowerCase(); 
    
    playerWord.addEventListener("click", (event) => {
        let target = event.target;
        let selectedValue = "";
      
        switch(target.id) {
            case "rock":
                alert(playRound("rock", computerWord));
                selectedValue = "rock";
                break;
            case "paper":
                alert(playRound("paper", computerWord));
                selectedValue = "paper";
                break;
            case "scissor":
                alert(playRound("scissor", computerWord));
                selectedValue = "scissor";
                break;
        }
        
        // Call the callback function with the result of playRound
        callback(playRound(selectedValue, computerWord));
    });
}


function playGame() {
        let playerScoreCount = 0;
        let computerScoreCount = 0;
        let winningScore = 5
        // Call playerSelection with a callback function
        playerSelection((GameRound) => {

            if(playerScoreCount === winningScore || computerScoreCount === winningScore) {
                return
            }

            let checkPlayerWord = 'win!';
            let checkPlayerWord2 = 'Lose!';
            
            let GameRoundSubString =  GameRound.substring(4,8)
            let GameRoundSubString2 =  GameRound.substring(4,9)

            if(checkPlayerWord !== GameRoundSubString && (checkPlayerWord2 !== GameRoundSubString2)) {
                    alert("Continue")
                } 
            else if (checkPlayerWord === GameRoundSubString) {
                    playerScoreCount++
                    alert(`You got ${playerScoreCount} points!`);
                } 
            else {
                    if (checkPlayerWord2 === GameRoundSubString2) { 
                        computerScoreCount++
                        alert(`${computerScoreCount} points for computer!`);
                    }
                }
            
            
            if (playerScoreCount === 5) {
                alert (`You win this round! You have ${playerScoreCount}, and
                        Computer has ${computerScoreCount}. Congrat!!`);
            }  
            
            else {
                if(computerScoreCount == 5) {
                    alert (`Computer win this round! You have ${playerScoreCount}, and
                        Computer has ${computerScoreCount}.`)
                }
            }
        
        });
    }


playGame();