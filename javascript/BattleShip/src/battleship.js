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
        // console.log("ind",index, 'bo:',board[index])
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
        // let set = new Set();

        let carrier = Math.floor(Math.random() * 20); console.log("cc:", carrier);
        ship().laidShip(carrier, "Carrier", board);
        ship().laidShip((carrier + 1), "Carrier", board);
        ship().laidShip((carrier + 2), "Carrier", board);
        ship().laidShip((carrier + 3), "Carrier", board);
        ship().laidShip((carrier + 4), "Carrier", board);


        let battleShip = Math.floor(Math.random() * (40 - 21 + 1)) + 21; console.log("batt:", battleShip);
        ship().laidShip(battleShip, "Battleship", board);
        ship().laidShip((battleShip + 1), "Battleship", board);
        ship().laidShip((battleShip + 2), "Battleship", board);
        ship().laidShip((battleShip + 3), "Battleship", board);

        let  submarine = Math.floor(Math.random() * (60 - 41 + 1)) + 41; console.log("subb:", submarine);
        ship().laidShip(submarine, "Submarine", board);
        ship().laidShip((submarine + 1), "Submarine", board);
        ship().laidShip((submarine + 2), "Submarine", board);

        let destroyer = Math.floor(Math.random() * (70 - 61 + 1)) + 61; console.log("destr:", destroyer);
        ship().laidShip(destroyer, "Destroyer", board);
        ship().laidShip(destroyer + 1, "Destroyer", board);

       
        let cruiser = Math.floor(Math.random() * (79 - 73 + 1)) + 73; console.log("ccrr:", cruiser);
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


// let myship = { Carrier: 5, Battleship: 4, Cruiser: 3, Submarine: 3, Destroyer: 2 };
let board1 = gameBoard().board();
let board2 = gameBoard().board();

console.log(player(board1).computerPlayer())
console.log((player(board2).realPlayer("Carrier", "A1")));
console.log((player(board2).realPlayer("Carrier", "A2")))

module.exports = { ship, gameBoard };