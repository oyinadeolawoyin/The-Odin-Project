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
        let carrier = Math.floor(Math.random() * 20);
        ship().laidShip(carrier, "Carrier", board);
        ship().laidShip((carrier + 1), "Carrier", board);
        ship().laidShip((carrier + 2), "Carrier", board);
        ship().laidShip((carrier + 3), "Carrier", board);
        ship().laidShip((carrier + 4), "Carrier", board);


        let battleShip = Math.floor(Math.random() * (40 - 21 + 1)) + 21;
        ship().laidShip(battleShip, "Battleship", board);
        ship().laidShip((battleShip + 1), "Battleship", board);
        ship().laidShip((battleShip + 2), "Battleship", board);
        ship().laidShip((battleShip + 3), "Battleship", board);

        let  submarine = Math.floor(Math.random() * (60 - 41 + 1)) + 41;
        ship().laidShip(submarine, "Submarine", board);
        ship().laidShip((submarine + 1), "Submarine", board);
        ship().laidShip((submarine + 2), "Submarine", board);

        let destroyer = Math.floor(Math.random() * (70 - 61 + 1)) + 61;
        ship().laidShip(destroyer, "Destroyer", board);
        ship().laidShip(destroyer + 1, "Destroyer", board);

       
        let cruiser = Math.floor(Math.random() * (79 - 73 + 1)) + 73;
        ship().laidShip(cruiser, "Cruiser", board);
        ship().laidShip((cruiser + 10), "Cruiser", board);
        ship().laidShip((cruiser + 20), "Cruiser", board);

        return board;
    }

    function opponentBoard(board, coordinate, shipName) {
        let index = board.findIndex(subArray => subArray[0] === coordinate);
        ship().laidShip(index, shipName, board);
        return board;
    }

    function validMoves(coordinate) {
        let set = new Set();
        if (set.has(coordinate)) return false;
        else {
            return set.add(coordinate);
        }
    }

    function receiveAttack(coordinate, board, ships) {
        if (ship(ships).isSunk()) return "It's sunk";

        let index = board.findIndex(subArray => subArray[0] === coordinate);
        
        if (board[index].length === 2) {
            let guess = ship(ships).hit(board[index][1]); console.log("gue:", guess);

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

    return { board, computerBoard, opponentBoard, receiveAttack, validMoves }
}

function player(board) {
    function computerPlayer() {
        return {
            name: "Oliver",
            board: gameBoard().computerBoard(board)
        }
        
    }

    function realPlayer(shipName, coordinate, name = "Evelyn") {
        return {
            name: name,
            board: gameBoard().opponentBoard(board, coordinate, shipName)
        }
        
    }

    return { computerPlayer, realPlayer };
}


let myship1 = { Carrier: 5, Battleship: 4, Cruiser: 3, Submarine: 3, Destroyer: 2 };
let myship2 = { Carrier: 5, Battleship: 4, Cruiser: 3, Submarine: 3, Destroyer: 2 };
let board1 = gameBoard().board();
let board2 = gameBoard().board();

let first = player(board1).computerPlayer()
let second = player(board2).realPlayer("Carrier", "A1");
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
// console.log(first);
// console.log(second);

gameBoard().receiveAttack("A2", first.board, myship1);
gameBoard().receiveAttack("A1", second.board, myship2);
gameBoard().receiveAttack("A2", second.board, myship2);
gameBoard().receiveAttack("A3", second.board, myship2);
gameBoard().receiveAttack("A4", second.board, myship2);
gameBoard().receiveAttack("A5", second.board, myship2);
gameBoard().receiveAttack("B7", second.board, myship2);
gameBoard().receiveAttack("B8", second.board, myship2);
gameBoard().receiveAttack("B9", second.board, myship2);
gameBoard().receiveAttack("E1", second.board, myship2);
gameBoard().receiveAttack("F1", second.board, myship2);
gameBoard().receiveAttack("G1", second.board, myship2);
gameBoard().receiveAttack("E9", second.board, myship2);
gameBoard().receiveAttack("F9", second.board, myship2);
gameBoard().receiveAttack("J4", second.board, myship2);
gameBoard().receiveAttack("J5", second.board, myship2);
gameBoard().receiveAttack("J6", second.board, myship2);
gameBoard().receiveAttack("C1", second.board, myship2);
gameBoard().receiveAttack("B10", second.board, myship2);
gameBoard().receiveAttack("C6", second.board, myship2);
gameBoard().receiveAttack("G7", second.board, myship2);
gameBoard().receiveAttack("J1", second.board, myship2);
gameBoard().receiveAttack("J9", second.board, myship2);
gameBoard().receiveAttack("J7", second.board, myship2);
console.log(gameBoard().receiveAttack("B1", second.board, myship2));

console.log(myship2, second);

module.exports = { ship, gameBoard, player };