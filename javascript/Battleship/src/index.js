console.log("hello, Omotolani!");

import { player, gameBoard, ship } from "./battleship";


// const interface = (function() {

//     function board(doc, selector) {
//         console.log("doc", selector);
//         let boardContainer = doc.querySelector(selector);
//         let board = doc.createElement("div");
//         board.className = "board";
//         let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

//         for (let i = 0; i < letters.length; i++) {
//             let grid = doc.createElement("div");
//             grid.className = "grid";
//             for (let j = 1; j < 11; i++) {
//                 let coordinate = doc.createElement("button");
//                 coordinate.className = "coordinate";
//                 coordinate.textContent = `${letters[i]+j}`;
//                 grid.appendChild(coordinate);
//                 board.appendChild(grid);
//             };
//         };
//         boardContainer.appendChild(board);
//         return boardContainer;
//     }


//     return { board };
// }) ();

// console.log("hello!"); console.log("jelllllllo");
// let boardContainer = document.querySelector("#boardContainer");
// let board = document.createElement("div");
// board.className = "board";

// let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

// for (let i = 0; i < letters.length; i++) {
//     let grid = document.createElement("div");
//     grid.className = "grid";

//     for (let j = 1; j < 11; i++) {
//         let coordinate = document.createElement("button");
//         coordinate.className = "coordinate";
//         coordinate.textContent = `${letters[i]+j}`;
//         grid.appendChild(coordinate);
//         board.appendChild(grid);
//     };
// };
// boardContainer.appendChild(board);

// return boardContainer;

// interface.board(document, "#boardContainer")

console.log("looooo");
let myship1 = { Carrier: 5, Battleship: 4, Cruiser: 3, Submarine: 3, Destroyer: 2 };
let myship2 = { Carrier: 5, Battleship: 4, Cruiser: 3, Submarine: 3, Destroyer: 2 };
let board1 = gameBoard().board();
let board2 = gameBoard().board();

let firstPlayer = player(board1).computerPlayer()
let secondsecond = player(board2).realPlayer("Carrier", "A1");
player(board2).realPlayer("Carrier", "A2");
player(board2).realPlayer("Carrier", "A3");
player(board2).realPlayer("Carrier", "A4");
player(board2).realPlayer("Carrier", "A5");

player(board2).realPlayer("Submarine", "E1");
player(board2).realPlayer("Submarine", "F1");
player(board2).realPlayer("Submarine", "G1");

player(board2).realPlayer("Cruiser", "B7");
player(board2).realPlayer("Cruiser", "B8");
player(board2).realPlayer("Cruiser", "B9");

player(board2).realPlayer("Battleship", "J4");
player(board2).realPlayer("Battleship", "J5");
player(board2).realPlayer("Battleship", "J6");
player(board2).realPlayer("Battleship", "J7");

player(board2).realPlayer("Destroyer", "E9");
player(board2).realPlayer("Destroyer", "F9");

console.log("Hi, Omotolani!!!!!!!")
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