

import { player, gameBoard, ship } from "./battleship";
import { OliverGame } from "./OliverGame";

let gameInterface = (function() {
   
    function playerOneboard() {
        let boardContainer = document.querySelector("#board1");
        let board = document.createElement("div");
        board.className = "board";
    
        let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

        for (let i = 0; i < letters.length; i++) {
            let grid = document.createElement("button");
            grid.className = "grid";
    
            for (let j = 1; j < 11; j++) {
                let coordinate = document.createElement("button");
                    coordinate.className = "coordinate";
                    coordinate.textContent = `${letters[i]+j}`;
                    grid.appendChild(coordinate);
                        
            }
            board.appendChild(grid);
            boardContainer.appendChild(board);
        };
        return boardContainer;
    }

    function playerTwoboard() {
        let boardContainer = document.querySelector("#board2");
        let board = document.createElement("div");
        board.className = "board";
    
        let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

        for (let i = 0; i < letters.length; i++) {
            let grid = document.createElement("button");
            grid.className = "grid";
    
            for (let j = 1; j < 11; j++) {
                let coordinate = document.createElement("button");
                    coordinate.className = "ships";
                    coordinate.textContent = `${letters[i]+j}`;
                    grid.appendChild(coordinate);
                        
            }
            board.appendChild(grid);
            boardContainer.appendChild(board);
        };
        return boardContainer;
    }

    function shipsPlayer1() {
        let shipContainer = document.querySelector("#ships1");

        let carrier = document.createElement("div");
        carrier.className = "Carrier";
        carrier.className = "ship";
        carrier.textContent = "Carrirer: 5";

        let battleship = document.createElement("div");
        battleship.className = "Battleship";
        battleship.textContent = "Battleship: 4";

        let submarine = document.createElement("div");
        submarine.className = "Submarine";
        submarine.textContent = "Submarine: 3";

        let cruiser = document.createElement("div");
        cruiser.className = "Cruiser";
        cruiser.textContent = "Cruiser: 3";
        
        let destroyer = document.createElement("div");
        destroyer.className = "Destroyer";
        destroyer.textContent = "Destroyer: 2";

        return shipContainer.append(carrier, battleship, submarine, cruiser, destroyer);
    }


    function shipsPlayer2() {
        let shipContainer = document.querySelector("#ships2");

        let carrier = document.createElement("div");
        carrier.className = "Carrier";
        carrier.textContent = "Carrirer: 5";

        let battleship = document.createElement("div");
        battleship.className = "Battleship";
        battleship.textContent = "Battleship: 4";

        let submarine = document.createElement("div");
        submarine.className = "Submarine";
        submarine.textContent = "Submarine: 3";

        let cruiser = document.createElement("div");
        cruiser.className = "Cruiser";
        cruiser.textContent = "Cruiser: 3";
        
        let destroyer = document.createElement("div");
        destroyer.className = "Destroyer";
        // destroyer.className = "ship";
        destroyer.textContent = "Destroyer: 2";

        return shipContainer.append(carrier, battleship, submarine, cruiser, destroyer);
    }


    return { playerOneboard, playerTwoboard, shipsPlayer1, shipsPlayer2 };

})();
gameInterface.playerOneboard();
gameInterface.playerTwoboard();
gameInterface.shipsPlayer1();
gameInterface.shipsPlayer2();



let playGame = (function() {

    function playerOne(board) {
        return player(board).realPlayer(board);
    }

    function playerTwo(board) {
        return player(board).computerPlayer();
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
    

    function hit_and_miss(board1, ships1, board2, ships2) {
        let checkBoard = null;
        let buttons = document.querySelectorAll(".ships");
        let winnerSpace = document.querySelector("#space");

        buttons.forEach(button => button.addEventListener("click", ()=> {
          
            let coordinate = button.textContent;
            checkBoard = gameBoard().receiveAttack(coordinate, board2, ships2); 

            let index = board2.findIndex(subArray => subArray[0] === coordinate);
            if (board2[index][1] === "Miss") button.style.backgroundColor = "green";
            else {
                hitShips(ships2);
                button.style.backgroundColor = "red";
            };

            let olive = OliverGame(board1, ships1);
           
            if (olive === "It's sunk") {
                button.style.backgroundColor = "white";
                winnerSpace.textContent = "Your Ships Sunk! Oliver Wins!"
            }
           
            if (checkBoard == false) {
                button.style.backgroundColor = "white";
                winnerSpace.textContent = "Oliver Ships Sunk! You Win!"
            }else {
                return checkBoard;
            }    
        }));
    }

    return { playerOne, playerTwo, hit_and_miss };
})();


let board1 = gameBoard().board();
let board2 = gameBoard().board();

let myship1 = { Carrier: 5, Battleship: 4, Cruiser: 3, Submarine: 3, Destroyer: 2 };
let myship2 = { Carrier: 5, Battleship: 4, Cruiser: 3, Submarine: 3, Destroyer: 2 };

let player1 = playGame.playerOne(board2);
let player2 = playGame.playerTwo(board1);


console.log(playGame.hit_and_miss(player1.board, myship1, player2.board, myship2));