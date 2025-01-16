function ship(ship) {

    function hit(guess) {
        let keys = Object.keys(ship);
        
        for (let key of keys) {
            if (key === guess) {
                ship[key] -=1;
                return { ship: ship, status: true };
            }    
        }
    }

    function isSunk() {
        let values = Object.values(ship);
        return values.every(num => num === 0);
    }

    function laidShip(index, shipName, board) {
        // console.log(index, board[index])
        board[index].push(shipName);
        return board;
    }

    return { hit, isSunk, laidShip }
}

function gameBoard() {

    function board() {
        let board = [];
        let letters = [
                        "A", "B", "C", "D", "E", 
                        "F","G", "H", "I", "J"
                    ];
                    
                    for (let i = 0; i < letters.length; i++) {
                        for (let j = 1; j < 11; j++) {
                            board.push([`${letters[i]+j}`]);
                        }
                    }
        
        return board;
    }

    function computerBoard(board) {
        console.log("bbb:", board);
        let carrier = Math.floor(Math.random() * 29); console.log("cc:", carrier);
        ship().laidShip(carrier, "Carrier", board);
        ship().laidShip((carrier + 1), "Carrier", board);
        ship().laidShip((carrier + 2), "Carrier", board);
        ship().laidShip((carrier + 3), "Carrier", board);
        ship().laidShip((carrier + 4), "Carrier", board);

        let battleShip = Math.floor(Math.random() * (89 - 80 + 1)) + 80;
        ship().laidShip(battleShip, "Battleship", board);
        ship().laidShip((battleShip + 1), "Battleship", board);
        ship().laidShip((battleShip + 2), "Battleship", board);
        ship().laidShip((battleShip + 3), "Battleship", board);

        let submarine = Math.floor(Math.random() * (59 - 30 + 1)) + 30;
        ship().laidShip(submarine, "Submarine", board);
        ship().laidShip((submarine + 10), "Submarine", board);
        ship().laidShip((submarine + 20), "Submarine", board);

        let cruiser = Math.floor(Math.random() * (79 - 60 + 1)) + 60;
        ship().laidShip(cruiser, "Cruiser", board);
        ship().laidShip((cruiser + 10), "Cruiser", board);
        ship().laidShip((cruiser + 20), "Cruiser", board);

        let destroyer = Math.floor(Math.random() * (99 - 90 + 1)) + 90;
        ship().laidShip(destroyer, "Destroyer", board);
        ship().laidShip((destroyer + 1), "Destroyer", board);

        return board;
    }

    function opponentBoard(board, coordinate, shipName) {
        let index = board.findIndex(subArray => subArray[0] === coordinate);
        ship().laidShip(index, shipName, board);
        return board;
    }

    function receiveAttack(coordinate, board, ships) {
        if (ship(ships).isSunk()) return "It's sunk";

        let index = board.findIndex(subArray => subArray[0] === coordinate);
        
        if (board[index].length === 2) {
            let guess = ship(ships).hit(board[index][1]);
            if (guess.status === true) {
                let index = board.findIndex(subArray => subArray[0] === coordinate);
                board[index].pop();
                board[index].push("Hit");
            }
        }
         else {
            let index = board.findIndex(subArray => subArray[0] === coordinate);
            board[index].push("Miss")
        }

        return board;
    }

    return { board, computerBoard, opponentBoard, receiveAttack }
}

function player(board, shipName, coordinate, name = "Evelyn") {
    function computerPlayer() {
        return {
            name: "Oliver",
            board: gameBoard().computerBoard(board)  // Make sure computerBoard is defined
        }
        
    }

    function realPlayer() {
        return {
            name: name,
            board: gameBoard().opponentBoard(board, coordinate, shipName)  // Corrected spelling
        }
        
    }

    return { computerPlayer, realPlayer };
}


// let myship = { Carrier: 5, Battleship: 4, Cruiser: 3, Submarine: 3, Destroyer: 2 };
// console.log(JSON.stringify(gameBoard().board()));
let board1 = gameBoard().board();
// console.log(gameBoard().computerBoard(board1));
let board2 = gameBoard().board();
// console.log(gameBoard().opponetBoard(board2, "B2", "Battleship"));
// console.log(gameBoard().opponetBoard(board2, "B3", "Battleship"));
// console.log(gameBoard().opponetBoard(board2, "B4", "Battleship"));
// console.log(gameBoard().opponetBoard(board2, "B5", "Battleship"));
// console.log(gameBoard().opponetBoard(board2, "I9", "Destroyer"));
// console.log(gameBoard().opponetBoard(board2, "J9", "Destroyer"));
// console.log(gameBoard().receiveAttack("A1", board2, myship));
// console.log(JSON.stringify(player(board2, "Tolani").computerPlayer))

console.log(player(board1, "Tolani", "Carrier").computerPlayer())
console.log((player(board2,"Carrier", "A1").realPlayer()))
// console.log(JSON.stringify(player(board1, "Tolani", "Carrier", "A2").realPlayer()))
// console.log(JSON.stringify(player(board1, "Tolani", "Carrier", "A4").realPlayer()))
// console.log(JSON.stringify(player(board1, "Tolani", "Carrier", "A5").realPlayer()))
module.exports = { ship, gameBoard };