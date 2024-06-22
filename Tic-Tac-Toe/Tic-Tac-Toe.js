function Gameboard(numOfGrid) {

    const board = [];

    const creatGridBoard = () => {
    const rows = numOfGrid;
    const columns = numOfGrid;
    
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push([]);
        };
    };
        return board
    };
    
    const getBoard = () => board;
    const getNumGrid = () => numOfGrid;

    const choosenCells = (playercell) => {
        let lengthOfColumns = 0; let getCell = 0;

        for(cells in board) {console.log("continue if:", playercell)
            lengthOfColumns += board[cells].length; 
            getCell = lengthOfColumns; 
            if(playercell > lengthOfColumns) {
                continue;
            }
            else{
                if(playercell > 3) { console.log(">3",playercell)
                    lengthOfColumns -= [board[cells].length*(cells)]; 
                    getCell -= playercell;
                    board[cells][lengthOfColumns-(getCell+1)].push("X");
                        break;
                    // if(!player1) {
                    //     board[cells][lengthOfColumns-(getCell+1)].push(players.player2Gift);
                    //     break;
                    // }
                    // else{
                    //     board[cells][lengthOfColumns-(getCell+1)].push(players.player1Gift);
                    //     break;
                    // }
                }
                else{
                    playercell -=  1; console.log("<3",playercell)
                    board[cells][playercell].push("X");
                    break;
                    // if(!player1) {
                    //     board[cells][playercell].push(players.player2Gift);
                    //     break;
                    // }
                    // else{
                    //     board[cells][playercell].push(players.player1Gift);
                    //     break;
                    // }
                    // board[cells][playercell].push("X");
                    // break
                };
            };
        };
            return board;
    };    

    let players = [{player1: "", player1Gift: "X"},
                     {player2: "", player2Gift: "O"}];
    
    const player1 = (name) => {
        players[0].player1 = name;
        let getPlayer1 = players[0];
        return getPlayer1
    };

    const player2 = (name) => {
        players[1].player2 = name;
        let getPlayer2 = players[1];
        return getPlayer2
    };

    const activePlayer = (name) => {
        return player1(name)
    };
        
    return { getNumGrid, creatGridBoard, getBoard, choosenCells, activePlayer, player2 }
};

// let board = Gameboard(4);
// console.log(board.creatGridBoard());
// console.log(board.getBoard(), board.getNumGrid());
// console.log(board.choosenCells(9));
// console.log(board.player2("Tolani")); 
// console.log(board.player1("Computer"))


function GamePlay(numOfGrid) {
    let board = Gameboard(numOfGrid);
    // board.creatGridBoard();
    // numOfGrid = board.getNumGrid();
    let gridList = [];

    

    const ComputerGame = () => {
        for(let i = 1; i < (numOfGrid*numOfGrid+1); i++) {
            gridList.push(i);   
        };

        let randomCellsPicking = Math.floor(Math.random() * gridList.length);

        if(randomCellsPicking === 0) {
            console.log(randomCellsPicking)
            checkZero = true;
            while(checkZero) {
                randomCellsPicking = Math.floor(Math.random() * gridList.length); 
                if(randomCellsPicking !== 0) {
                    console.log("!=0:", randomCellsPicking)
                    checkZero = false
            };
            // for(i = 0; i < gridList.length; i++) {
            //     console.log("in for:", randomCellsPicking)
                
                    
            //         // gridList.splice(randomCellsPicking-1, 1)
            //         break
            //     };
            };   
        }
        // else {
        //     gridList.splice((randomCellsPicking-1), 1);   
        // }
        return randomCellsPicking;
    };

    const checkingRows = (board) => {
        for(rows in board) {
            console.log(rows)
            let getfistRowCell = board[0][rows][0]; 

            for(let i = 1; i < (board[rows].length); i++) {
                let getRows = board[i][rows][0]; 
                // console.log('getRows:',getRows)
                if(getfistRowCell === getRows && i != (board[0].length-1)) {
                    // console.log(`getfirstrowcell: ${getfistRowCell} = getrows: ${getRows} and i: ${i} != borad[0] lenght: ${board[rows].length-1}`)
                    continue;
                }
                else if(getfistRowCell != getRows) {
                    // getfistRowCell = board[rows][rows][rows]
                    console.log(`continue to next rows`)
                    break
                }
                else {
                    if(getfistRowCell === getRows && i === (board[rows].length-1)){
                        console.log("all rows are the same");
                        return true
                    }
                };
            };
        };

        return false
        
    };

    const checkingColumns = (board) => {
        for(columns in board) {
            getColumn = board[columns]
            let getCells = getColumn[0][0]; console.log('getcells:',getCells)
            
            for(i = 1; i < (getColumn.length); i++) {
                if(getCells === getColumn[i][0] && i != (getColumn.length-1)) {
                    // console.log(`getcells: ${getCells} = getcolum[i]: ${getColumn[i][0]} but i: ${i} != getcolumn lenght: ${getColumn.length-1}`)
                    continue
                }
                else if(getCells !== getColumn[i][0]) {
                    getCells = getColumn[i][0];
                    // console.log(`getcells: ${getCells} != getcolum[i]: ${getColumn[i][0]} and i: ${i} != getcolumn lenght: ${getColumn.length-1}`);
                    console.log('continue to the next column')
                    break
                }
                else {
                    if(getCells === getColumn[i][0] && i === (getColumn.length-1)){
                    console.log("Rows cells are the same"); 
                    return true
                    };
                };
                   
            };
        };
        return false
    };

    const checkingDiagonal = (board) => {
        if(board[0][0][0] === board[1][1][0] && board[1][1][0] === board[0][2][0] || 
            board[0][2][0] === board[1][1][0] && board[1][1][0] === board[2][0][0]) {
            return true
        }
        else{
            return false
        }
    };

    const switchTurn = (name) => {
          let gamePlayer = board.activePlayer(name);

    }

    return { ComputerGame, checkingColumns, checkingRows, checkingDiagonal }
}

let game = GamePlay(3);

// console.log(GamePlay());
// console.log(game.ComputerGame());
let board = [[["X"],["X"],["X"]],[["X"],[""],["X"]],[["X"],["X"],["X"]]]
console.log(game.checkingRows(board))
console.log(game.checkingColumns(board))
console.log(game.checkingDiagonal(board))
console.log(game.checkingDiagonal(board))


function GameController() {

};