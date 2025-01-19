import { player, gameBoard } from "./battleship";
import { OliverGame } from "./OliverGame";
import "./index.css";

let gameInterface = (function () {
  function playerOneboard() {
    let boardContainer = document.querySelector("#board1");
    let board = document.createElement("div");
    board.className = "board";
    board.id = "myBoard";

    let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

    for (let i = 0; i < letters.length; i++) {
      let grid = document.createElement("button");
      grid.className = "grid";

      for (let j = 1; j < 11; j++) {
        let coordinate = document.createElement("button");
        coordinate.className = "coordinate";
        coordinate.textContent = `${letters[i] + j}`;
        grid.appendChild(coordinate);
      }
      board.appendChild(grid);
      boardContainer.appendChild(board);
    }
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
        coordinate.textContent = `${letters[i] + j}`;
        grid.appendChild(coordinate);
      }
      board.appendChild(grid);
      boardContainer.appendChild(board);
    }
    return boardContainer;
  }

  function shipsPlayer1() {
    let shipContainer = document.querySelector("#ships1");

    let carrier = document.createElement("p");
    carrier.className = "Carrier";
    carrier.textContent = "Carrirer: 5";

    let battleship = document.createElement("p");
    battleship.className = "Battleship";
    battleship.textContent = "Battleship: 4";

    let submarine = document.createElement("p");
    submarine.className = "Submarine";
    submarine.textContent = "Submarine: 3";

    let cruiser = document.createElement("p");
    cruiser.className = "Cruiser";
    cruiser.textContent = "Cruiser: 3";

    let destroyer = document.createElement("p");
    destroyer.className = "Destroyer";
    destroyer.textContent = "Destroyer: 2";

    return shipContainer.append(
      carrier,
      battleship,
      submarine,
      cruiser,
      destroyer,
    );
  }

  function shipsPlayer2() {
    let shipContainer = document.querySelector("#ships2");

    let carrier = document.createElement("p");
    carrier.className = "carrier";
    carrier.textContent = "carrirer: 5";

    let battleship = document.createElement("p");
    battleship.className = "battleship";
    battleship.textContent = "Battleship: 4";

    let submarine = document.createElement("p");
    submarine.className = "submarine";
    submarine.textContent = "Submarine: 3";

    let cruiser = document.createElement("p");
    cruiser.className = "cruiser";
    cruiser.textContent = "Cruiser: 3";

    let destroyer = document.createElement("p");
    destroyer.className = "destroyer";
    destroyer.textContent = "Destroyer: 2";

    return shipContainer.append(
      carrier,
      battleship,
      submarine,
      cruiser,
      destroyer,
    );
  }

  function showShip(board) {
    let board1 = document.querySelector("#myBoard");

    let children = board1.children;

    for (let child of children) {
      let elements = child.children;

      for (let elem of elements) {
        let coordinate = elem.textContent;

        let subArray = board.find(
          (subArray) => subArray.length === 2 && subArray[0] === coordinate,
        );

        if (subArray) {
          elem.style.backgroundColor = "#C84C05";
        }
      }
    }
  }

  return {
    playerOneboard,
    playerTwoboard,
    shipsPlayer1,
    shipsPlayer2,
    showShip,
  };
})();

let playGame = (function () {
  function playerOne(board) {
    return player(board).realPlayer(board);
  }

  function playerTwo(board) {
    return player(board).computerPlayer();
  }

  function hitShips(ships) {
    let ship = Object.keys(ships);
    for (let key of ship) {
      let shipKeys = document.querySelector(`.${key.toLowerCase()}`);

      shipKeys.innerHTML = "";
      shipKeys.textContent = `${key}: ${ships[key]}`;
    }
  }

  function hit_and_miss(board1, ships1, board2, ships2) {
    let checkBoard = null;
    let buttons = document.querySelectorAll(".ships");
    let winnerSpace = document.querySelector("#space");

    buttons.forEach((button) =>
      button.addEventListener("click", () => {
        let coordinate = button.textContent;
        checkBoard = gameBoard().receiveAttack(coordinate, board2, ships2);

        let index = board2.findIndex((subArray) => subArray[0] === coordinate);
        if (board2[index][1] === "Miss") button.style.backgroundColor = "green";
        else {
          hitShips(ships2);
          button.style.backgroundColor = "red";
        }

        let olive = null;
        if (checkBoard == false) {
          olive = OliverGame(board1, ships1, false);
          button.style.backgroundColor = "#FFE8B6";
          winnerSpace.textContent = "Oliver Ships' Sunk! You Win!";
        } else {
          olive = OliverGame(board1, ships1, true);
          if (olive === false) {
            button.style.backgroundColor = "#FFE8B6";
            winnerSpace.textContent = "Your Ships' Sunk! Oliver Wins!";
          }
        }

        return checkBoard;
      }),
    );
  }

  function newGame() {
    let start = document.querySelector("#start");
    start.addEventListener("click", () => {
      let playerBoard1 = document.querySelector("#board1");
      let playerBoard2 = document.querySelector("#board2");
      let playerShip1 = document.querySelector("#ships1");
      let playerShip2 = document.querySelector("#ships2");
      let winningSpace = document.querySelector("#space");

      playerBoard1.innerHTML = "";
      playerBoard2.innerHTML = "";
      playerShip1.innerHTML = "";
      playerShip2.innerHTML = "";
      winningSpace.innerHTML = "";

      gameInterface.playerOneboard();
      gameInterface.playerTwoboard();
      gameInterface.shipsPlayer1();
      gameInterface.shipsPlayer2();

      let board1 = gameBoard().board();
      let board2 = gameBoard().board();

      let myship1 = {
        Carrier: 5,
        Battleship: 4,
        Cruiser: 3,
        Submarine: 3,
        Destroyer: 2,
      };
      let myship2 = {
        Carrier: 5,
        Battleship: 4,
        Cruiser: 3,
        Submarine: 3,
        Destroyer: 2,
      };

      let player1 = playerOne(board2);
      let player2 = playerTwo(board1);
      gameInterface.showShip(player1.board);
      console.log("board", player1.board);
      hit_and_miss(player1.board, myship1, player2.board, myship2);
    });
  }

  return { newGame };
})();

playGame.newGame();
