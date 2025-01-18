import { gameBoard } from "./battleship";

function validMoves(board) {
    while (true) {
        let guess = Math.floor(Math.random() * 99);
        console.log("gggg", board[guess][1], "=", "Miss or Hit");
        if (board[guess][1] == "Hit" || board[guess][1] == "Miss") {
            console.log("hollll");
        continue;
             
        } else {   
            return guess;
        }      
    }
}

function hitShips(ships) {
    let ship = Object.keys(ships);
    for (let key of ship) {
        console.log("kkk", key);
        
        // Get all elements with the class name matching the current key
        let shipKeys = document.getElementsByClassName(`${key}`);
        console.log("ship:", shipKeys);
        
        // Iterate over the HTMLCollection
        for (let shipKey of shipKeys) {
            shipKey.innerHTML = ""; 
            shipKey.textContent = `${key}: ${ships[key]}`;
        }
    } 
}

let guessCount = 1;
let guess = 0;

function OliverGame(board, ships) {
    let coordinate = null;
    let checkBoard = null;

    if (board[guess][1] === "Hit") {
        guess +=guessCount;
        if (board[guess + guessCount][1] === "Hit" || board[guess + guessCount][1] === "Miss") {
            guess = validMoves(board);
        }
        coordinate = board[guess][0];
    
        checkBoard = gameBoard().receiveAttack(coordinate, board, ships);
    } else {
       
        guess = validMoves(board); 
        
        coordinate = board[guess][0];
        
    
        checkBoard = gameBoard().receiveAttack(coordinate, board, ships);
    }

    

    let buttons = document.querySelectorAll(".coordinate");
    buttons.forEach(button => {
        if (button.textContent === coordinate) {
            if (board[guess][1] === "Miss") button.style.backgroundColor = "green";
            else {
                // hitShips(ships);
                button.style.backgroundColor = "red";
            }
        }
    });
    
    return checkBoard;
}

export { OliverGame };