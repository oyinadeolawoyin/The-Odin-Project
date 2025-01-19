function ship(ship) {
  function hit(guess) {
    let keys = Object.keys(ship);

    for (let key of keys) {
      if (key === guess) {
        ship[key] -= 1;
        return { ship: ship, status: true };
      }
    }
  }

  function isSunk() {
    let values = Object.values(ship);
    return values.every((num) => num === 0);
  }

  function laidShip(index, shipName, board) {
    board[index].push(shipName);
    return board;
  }

  return { hit, isSunk, laidShip };
}

function gameBoard() {
  function board() {
    let board = [];
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

    for (let i = 0; i < letters.length; i++) {
      for (let j = 1; j < 11; j++) {
        board.push([`${letters[i] + j}`]);
      }
    }

    return board;
  }

  function shipsOnBoard(board) {
    let carrier = Math.floor(Math.random() * 19);
    ship().laidShip(carrier, "Carrier", board);
    ship().laidShip(carrier + 1, "Carrier", board);
    ship().laidShip(carrier + 2, "Carrier", board);
    ship().laidShip(carrier + 3, "Carrier", board);
    ship().laidShip(carrier + 4, "Carrier", board);

    let battleShip = Math.floor(Math.random() * (40 - 21 + 1)) + 21;
    ship().laidShip(battleShip, "Battleship", board);
    ship().laidShip(battleShip + 1, "Battleship", board);
    ship().laidShip(battleShip + 2, "Battleship", board);
    ship().laidShip(battleShip + 3, "Battleship", board);

    let submarine = Math.floor(Math.random() * (60 - 41 + 1)) + 41;
    ship().laidShip(submarine, "Submarine", board);
    ship().laidShip(submarine + 1, "Submarine", board);
    ship().laidShip(submarine + 2, "Submarine", board);

    let destroyer = Math.floor(Math.random() * (70 - 61 + 1)) + 61;
    ship().laidShip(destroyer, "Destroyer", board);
    ship().laidShip(destroyer + 1, "Destroyer", board);

    let cruiser = Math.floor(Math.random() * (79 - 73 + 1)) + 73;
    ship().laidShip(cruiser, "Cruiser", board);
    ship().laidShip(cruiser + 10, "Cruiser", board);
    ship().laidShip(cruiser + 20, "Cruiser", board);

    return board;
  }

  function receiveAttack(coordinate, board, ships) {
    if (ship(ships).isSunk()) return false;

    let index = board.findIndex((subArray) => subArray[0] === coordinate);

    if (board[index].length === 2) {
      console.log("bor", board[index]);
      let guess = ship(ships).hit(board[index][1]);

      if (guess.status === true) {
        let index = board.findIndex((subArray) => subArray[0] === coordinate);
        board[index].pop();
        board[index].push("Hit");
        console.log("hitboard", board[index]);
      }
    } else {
      let index = board.findIndex((subArray) => subArray[0] === coordinate);
      board[index].push("Miss");
      console.log("missboard", board[index]);
    }

    return board;
  }

  return { board, shipsOnBoard, receiveAttack };
}

function player(board) {
  function computerPlayer() {
    return {
      name: "Oliver",
      board: gameBoard().shipsOnBoard(board),
    };
  }

  function realPlayer() {
    return {
      name: "You",
      board: gameBoard().shipsOnBoard(board),
    };
  }

  return { computerPlayer, realPlayer };
}

module.exports = { ship, gameBoard, player };
