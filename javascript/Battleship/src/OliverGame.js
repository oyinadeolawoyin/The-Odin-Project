import { gameBoard } from "./battleship";

let guessCount = 1;
let guess = 0;

function OliverGame(board, ships) {
    let coordinate = null;

    if (guessCount == 10 && board[guess][1] === "Hit") {
        guess+=10; guessCount +=10;
        coordinate = board[guess][0];
        console.log("gue", guess, board[guess]);
        
        gameBoard().receiveAttack(coordinate, board, ships);
    }

    else if (board[guess][1] === "Hit") {
        guess+=guessCount;
        // guessCount +=1;
        coordinate = board[guess][0];
        console.log("gue", guess, board[guess]);
    
        gameBoard().receiveAttack(coordinate, board, ships);
    } else {
        guess = Math.floor(Math.random() * 99);
        
        coordinate = board[guess][0];
        console.log("gue", guess, board[guess]);
    
        gameBoard().receiveAttack(coordinate, board, ships);
    }

    

    let buttons = document.querySelectorAll(".ships");
    // let coordinateText = buttons.textContent;
    buttons.forEach(button => {
        if (button.textContent === coordinate) {
            if (board[guess][1] === "Miss") button.style.backgroundColor = "green";
            else button.style.backgroundColor = "red";
        }
    });
    
    return board;
}

export { OliverGame };