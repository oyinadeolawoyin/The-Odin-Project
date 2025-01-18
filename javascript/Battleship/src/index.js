

import { player, gameBoard, ship } from "./battleship";

let gameInterface = (function() {
   
    function board() {
        let boardContainer = document.querySelector("#boardContainer");
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

    function ships() {
        let shipContainer = document.querySelector("#shipContainer");

        let carrier = document.createElement("div");
        carrier.className = "carrier";
        carrier.textContent = "Carrirer";
        for (let i = 0; i < 5; i++) {
            let carrierShip = document.createElement("button");
            carrier.appendChild(carrierShip);
        }

        let battleship = document.createElement("div");
        battleship.className = "battleship";
        battleship.textContent = "Battleship";
        for (let i = 0; i < 4; i++) {
            let battleShip = document.createElement("button");
            battleship.appendChild(battleShip);
        }

        let submarine = document.createElement("div");
        submarine.className = "submarine";
        submarine.textContent = "Submarine";
        for (let i = 0; i < 3; i++) {
            let submarineShip = document.createElement("button");
            submarine.appendChild(submarineShip);
        }

        let cruiser = document.createElement("div");
        cruiser.className = "cruiser";
        cruiser.textContent = "Cruiser";
        for (let i = 0; i < 3; i++) {
            let cruiserShip = document.createElement("button");
            cruiser.appendChild(cruiserShip);
        }
        
        let destroyer = document.createElement("div");
        destroyer.className = "destroyer";
        destroyer.textContent = "Destroyer";
        for (let i = 0; i < 2; i++) {
            let destroyerShip = document.createElement("button");
            destroyer.appendChild(destroyerShip);
        }

        return shipContainer.append(carrier, battleship, submarine, cruiser, destroyer);
    }
    return { board, ships };

})();

let boardPlayer1 = gameInterface.board();
let boardPlayer2 = gameInterface.board();
let shippPlayer1 = gameInterface.ships();
let shipPlayer2 = gameInterface.ships();



let playGame = (function() {

    function playerOne(board) {
        return player(board).computerPlayer();
    }

    function playerTwo(board, shipName, coordinate, name) {
        return player(board).realPlayer(shipName, coordinate, name);
    }

    function hit_and_miss(board, ships) {
        
        let buttons = document.querySelectorAll(".coordinate");

        buttons.forEach(button => button.addEventListener("click", ()=> {
          
            let coordinate = button.textContent;
            gameBoard().receiveAttack(coordinate, board, ships); 


            console.log("b", board); console.log("s:",ships)
            return board;
        }));
    }

    function OliverGame(board, ships) {
        let guess = Math.floor(Math.random() * 99);
        console.log("gue", guess, board[guess]);
        let coordinate = board[guess][0];
        gameBoard().receiveAttack(coordinate, board, ships);
        return board;
    }

    return { playerOne, playerTwo, hit_and_miss, OliverGame };
})();


let board1 = gameBoard().board();
let board2 = gameBoard().board();

let myship1 = { Carrier: 5, Battleship: 4, Cruiser: 3, Submarine: 3, Destroyer: 2 };
let myship2 = { Carrier: 5, Battleship: 4, Cruiser: 3, Submarine: 3, Destroyer: 2 };

console.log(playGame.playerOne(board1));
playGame.playerTwo(board2, "Carrier", "A1");
playGame.playerTwo(board2, "Carrier", "A2");
playGame.playerTwo(board2, "Carrier", "A3");
playGame.playerTwo(board2, "Carrier", "A4");
console.log("p1", playGame.playerTwo(board2, "Carrier", "A5"));

console.log(playGame.hit_and_miss(board2, myship2));
console.log(playGame.OliverGame(board1, myship1));

// player(board2).realPlayer("Submarine", "E1");
// player(board2).realPlayer("Submarine", "F1");
// player(board2).realPlayer("Submarine", "G1");

// player(board2).realPlayer("Cruiser", "B7");
// player(board2).realPlayer("Cruiser", "B8");
// player(board2).realPlayer("Cruiser", "B9");

// player(board2).realPlayer("Battleship", "J4");
// player(board2).realPlayer("Battleship", "J5");
// player(board2).realPlayer("Battleship", "J6");
// player(board2).realPlayer("Battleship", "J7");

// player(board2).realPlayer("Destroyer", "E9");
// player(board2).realPlayer("Destroyer", "F9");

// console.log("hello!"); console.log("jelllllllo");


// console.log(board);
// boardContainer.appendChild(board);

// return boardContainer;


// console.log("looooo");
// let myship1 = { Carrier: 5, Battleship: 4, Cruiser: 3, Submarine: 3, Destroyer: 2 };
// let myship2 = { Carrier: 5, Battleship: 4, Cruiser: 3, Submarine: 3, Destroyer: 2 };
// let board1 = gameBoard().board();
// let board2 = gameBoard().board();

// let firstPlayer = player(board1).computerPlayer()
// let secondsecond = player(board2).realPlayer("Carrier", "A1");


// console.log("Hi, Omotolani!!!!!!!")
// gameBoard().receiveAttack("A2", first.board, myship1);
// gameBoard().receiveAttack("A1", second.board, myship2);

// let turn = [];
// function turns(coordinate, name) {
//     if (gameBoard().receiveAttack(coordinate, firstPlayer.board, myship1) == "it's sunk") {
//             return "you win!";
//     } else {
//         gameBoard().receiveAttack(coordinate, firstPlayer.board, myship1)
//         turn.pop();
//         turn.push(name);
//     }
// }