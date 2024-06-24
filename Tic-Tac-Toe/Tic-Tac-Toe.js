// This function creat my gameboard, my players and how cells in the board are pick.
function Gameboard(numOfGrid) {
    // this is my gameboard array.
    const board = []; 

    // This creat my board with specific grid.
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

    // This select the cell player chose. If player1 select a cell, the cell get a text content "X" player1.gift; if player2, the cell get a text content "O" player2.gift.
    const choosenCells = (playercell) => {
        let lengthOfColumns = 0; let getCell = 0;
        
        // console.log('getplayerss:',getPlayers)
        let getplayer1 = player1()
        let getplayer2 = player2();
        console.log(getPlayers)
        for(cells in board) {
            // console.log("continue if:", playercell)
            lengthOfColumns += board[cells].length; 
            getCell = lengthOfColumns; 
            if(playercell > lengthOfColumns) {
                continue;
            }
            else{
                if(playercell > 3) { console.log(">3",playercell)
                    lengthOfColumns -= [board[cells].length*(cells)]; 
                    getCell -= playercell;
                    if(getPlayers[0] === "player1") {
                        board[cells][lengthOfColumns-(getCell+1)].push(getplayer1.gift);
                        break;
                    }
                    else{
                        board[cells][lengthOfColumns-(getCell+1)].push(getplayer2.gift);
                        break;
                    }
                }
                else{
                    playercell -=  1; console.log("<3",playercell)
                    if(getPlayers[0] === "player1") {
                        board[cells][playercell].push(getplayer1.gift);
                        break;
                    }
                    else{
                        board[cells][playercell].push(getplayer2.gift);
                        break;
                    };
                };
            };
        };
            return board;
    };                 
    
    // This is my player1 function.
    const player1 = (name) => {
        let player = {
            name: name,
            gift: "X"
        }
        return player
    };

    // Player2 function.
    const player2 = (name) => {
        let player = {
            name: name,
            gift: "O"
        };
        return player
    };
     
    // This return avaliable function my Gameboard factory function.
    return { creatGridBoard, choosenCells, player1, player2, getPlayers }
};

// let board = Gameboard(4);
// console.log(board.creatGridBoard());
// console.log(board.getBoard(), board.getNumGrid());
// console.log(board.choosenCells(9));
// console.log(board.player2("Tolani")); 
// console.log(board.player1("Computer"))

// This function describe how computer will chose cell randomly, and how human play their game.
function PlayGame(numOfGrid) {
    let gridList = [];
    
    for(let i = 1; i < (numOfGrid*numOfGrid+1); i++) {
        gridList.push(i);   
    };

    // This is easy level game
    const getComputerEasyMove = () => {

        let randomCellsPicking = Math.floor(Math.random() * gridList.length);

            if(!gridList.includes(randomCellsPicking)) {
                let rightNumber = true
                while(rightNumber) {
                    randomCellsPicking = Math.floor(Math.random() * gridList.length);
                    console.log(`not in list`, randomCellsPicking)
                    if(gridList.includes(randomCellsPicking)) {
                        rightNumber = false
                    };
            };
        };
        
        console.log("randoncellpicking:",randomCellsPicking);
        return randomCellsPicking;
    };

    // This describe how computer picke its cell based on what cell human pick.
    const getComputerHardMove = (num, round, player1, player2) => {
        let player = Gameboard(numOfGrid);
        player1 = player.player1(player1);
        player2 = player.player2(player2);
        let randomCellsPicking = '';
        // let firstRound = 0;
        // console.log(firstRound)
        console.log(player1.name)
        let list = [4, 5, 6]
        if(player1.name === "Computer") {
            randomCellsPicking = list[Math.floor(Math.random() * list.length)];
            console.log(`player1`, randomCellsPicking)
            round +=1
        }
        else{
            if(num === 1) {
                let list = [(num + 1), (num + 3), (num + 4), (num + 5)]
                randomCellsPicking = list[Math.floor(math.random * list.length)]; console.log(`player2`, randomCellsPicking)
                round +=1
            }
            else{
                let list = [(num + 1), (num - 1), (num - 2), (num + 2), (num + 3),(num + 4)]
                if(gridList.includes(num + 1) || gridList.includes(num - 1) || gridList.includes(num + 2) || gridList.includes(num - 2)|| gridList.includes(num + 3) || gridList.includes(num + 4)) {
                    randomCellsPicking = list[Math.floor(Math.random() * list.length)];
                    console.log(`rand`, randomCellsPicking)
                }
                else {
                    randomCellsPicking = getComputerEasyMove();
                    round +=1
                    console.log(`easy`, randomCellsPicking)
                };  
            };
        };

        if(round === 1) {
            let list = [(num + 1), (num - 1), (num - 2), (num + 2)]
            if(gridList.includes(randomCellsPicking + 1) || gridList.includes(randomCellsPicking - 1) || gridList.includes(randomCellsPicking + 2) || gridList.includes(randomCellsPicking - 2) || gridList.includes(randomCellsPicking + 3) || gridList.includes(randomCellsPicking + 4) || gridList.includes(randomCellsPicking - 3) || gridList.includes(randomCellsPicking - 4))
            {
            randomCellsPicking = list[Math.floor(Math.random() * list.length)];
            console.log(`if round1,`, randomCellsPicking)
            }
            else {
                let list = [(num + 1), (num  - 1), (num + 3), (num - 3), (num + 2), (num - 2)];
                if(gridList.includes(num + 1) || gridList.includes(num - 1) || gridList.includes(num + 2) || gridList.includes(num - 2) || gridList.includes(num + 3) || gridList.includes(num - 3))
                {
                randomCellsPicking = list[Math.floor(Math.random() * list.length)]; console.log(`else if round`, randomCellsPicking)
                }
                else {
                    randomCellsPicking = getComputerEasyMove(); console.log(`final else`, randomCellsPicking)
                };
            };
        };  

        console.log(randomCellsPicking);
        return randomCellsPicking
    };

    // Remove any number the computer picked to avoid it picking the same cell and appending "O" || "X" in a cell.
    const removePickedCells = (num) => {
        // console.log(`num ${num}`)
        let indexNum = gridList.indexOf(num)
        return gridList.splice((indexNum), 1) 
    }

    // This get the cell human picked, but check if not in gridList to avoiding choosing a cell.
    const getHumanMove = (num) => {
        if(!gridList.includes(num)) {
            return false
        }
        else {
            return num
        };   
    };

    // This return all avaliable function in Playgame factory function.
    return { getHumanMove, removePickedCells, getComputerEasyMove, getComputerHardMove, gridList }
}

// This list get the current player playing to make it easy for appending either "O" || "X" in a cell.
const getPlayers = [];

// This function helps in checking if a row is complete with "X" || "O", and return true. It also help in switching turn between player1 and player2.
function GameController(numOfGrid, gameboard) {
    let playersMove = PlayGame(numOfGrid);

    // This check the rows in board.
    const checkingRows = (board) => {
        for(rows in board) {
            let getfistRowCell = board[0][rows][0]; 

            for(let i = 1; i < (board[rows].length); i++) {
                let getRows = board[i][rows][0]; 
                // console.log('getRows:',getRows)
                if(getfistRowCell === getRows && i != (board[0].length-1)) {
                    // console.log(`getfirstrowcell: ${getfistRowCell} = getrows: ${getRows} and i: ${i} != borad[0] lenght: ${board[rows].length-1}`)
                    continue;
                }
                
                // else if(getRows === undefined && rows === (board.length-1)) {
                //     console.log(`last Row empty `);
                //     break;
                // }
                else if(getfistRowCell != getRows) {
                    // getfistRowCell = board[rows][rows][rows]
                    // console.log(`continue to next rows`)
                    break
                }
                else {
                    if(getfistRowCell === getRows && i === (board[rows].length-1) && getRows !== undefined || getfistRowCell !== undefined){
                        // console.log(`all rows ${getRows} are the same`);
                        return true
                    };
                };
            };
        };
        // console.log(`I'm row`)
        return false
    };

    // This check the columns in board.
    const checkingColumns = (board) => {
        for(columns in board) {
            getColumn = board[columns];
            let getCells = getColumn[0][0];  
            
            for(i = 1; i < (getColumn.length); i++) {
                if(getCells === getColumn[i][0] && i != (getColumn.length-1)) {
                    // console.log(`getcells: ${getCells} = getcolum[i]: ${getColumn[i][0]} but i: ${i} != getcolumn lenght: ${getColumn.length-1}`)
                    continue
                }
                else if(getCells !== getColumn[i][0]) {
                    getCells = getColumn[i][0];
                    // console.log(`getcells: ${getCells} != getcolum[i]: ${getColumn[i][0]} and i: ${i} != getcolumn lenght: ${getColumn.length-1}`);
                    // console.log('continue to the next column')
                    break
                }
                else {
                    if(getCells === getColumn[i][0] && i === (getColumn.length-1) && getColumn !== undefined && getCells !== undefined){
                    // console.log("All columns cells are the same"); 
                    return true
                    };
                };
                   
            };
        };
        // console.log(`I'm column`)
        return false
    };

    // This check the diagonal in board.
    const checkingDiagonal = (board) => {
        if(board[0][0][0] === board[1][1][0] && board[1][1][0] === board[0][2][0] && board[1][1][0] !== undefined || 
        board[0][2][0] === board[1][1][0] && board[1][1][0] === board[2][0][0] && board[1][1][0] !== undefined) {
            return true
        }
        else{
            // console.log(`I'm diagonal`)
            return false
        }
    };

    // This check if there's no winner.
    const checkingDraw = (board) => {
        for(element in board) {
            for(i = 0; i < board[element].length; i++) {
                if(board[element][i][0] !== undefined && i !== (board[element].length)-1) {
                    // console.log("continue if:", board[element][i][0], 'belen:', board[element].length-1)
                    continue;
                }
                else if(board[element][i][0] === undefined) {
                    // console.log(`It's me`)
                    // console.log(`Draw function`)
                    return false;
                }
                else {
                    if(board[element][i][0] !== undefined && i === (board[element].length-1)) {
                        // console.log('continue to the next column')
                        break
                    }
                };
            };
        };
        return "Draw!"
    }

    // This look for which row || column || diagonal cells completed first. And it also check for draw.
    const winningSearch = (board) => {
        if(checkingColumns(board) === true || checkingRows(board) === true || checkingDiagonal(board) === true){
            return true
        }
        else {
            if(checkingDraw(board) === "Draw!") {
                return "Draw!"
            }
        };
    };

    // This return the board once it find the winning row || column || diagoanl. It also announce draw if there's no winner.
    const announcedWinner = (board) => {
        if(winningSearch(board) === true) {
            console.log('true')
            return true
        }
        else{
            if(winningSearch(board) === "Draw!") {
               return true
            }
            else {
                // console.log(board)
                console.log(`Hey it's me!!`);
                return false
            }
        };

    }

    // This function switch turn between player1 && player2.
    const switchTurn = (player1 = "Computer", player2 = "Computer", num, board) => {
        let getplayer1 = gameboard.player1(player1);
        let getPlayer2 = gameboard.player2(player2);
        console.log('MyfirstBoard',board);
        console.log(`player1: ${player1}, player2: ${player2}, num: ${num}`)
        
            let index = 0;
            getPlayers.push("player1")
            
            if(getplayer1.name !== "Computer") {
                let player1Move = playersMove.getHumanMove(num);
                
                if(player1Move === false) {
                    console.log("Cell not eligible");
                }
                else{
                    console.log(gameboard.choosenCells(player1Move));
                    playersMove.removePickedCells(player1Move); 
                    // console.log(`player1gridlist: ${playersMove.gridList}`);
                    index +=1;  
                    // console.log(board)
                };
            }
            else{
                let player1Move = playersMove.getComputerEasyMove()
                console.log(gameboard.choosenCells(player1Move)); 
                console.log('player2Move:',player1Move);
                
                playersMove.removePickedCells(player1Move); 
                // console.log(`player2gridlist: ${playersMove.gridList}`);
                index +=1; 
                // console.log(board)
            };

            let announcement = announcedWinner(board);
            
            if(announcement === true) {
                console.log(`my board`, board)
                return board
            };

            if(index === 1) {
                getPlayers.pop(); getPlayers.push("player2");
                
                if(getPlayer2.name !== "Computer") {
                    
                let player2Move = playersMove.getHumanMove(num);
                console.log(player2Move)
                    if(player2Move === false) {
                        console.log("Cell not eligible");
                    }
                    else{
                        console.log(gameboard.choosenCells(player2Move));
                        playersMove.removePickedCells(player2Move);
                        //  console.log(`player1gridlist: ${playersMove.gridList}`) 
                        index = 0; 
                        // console.log(board)
                    };
                }
                else{
                    let player2Move = playersMove.getComputerEasyMove();
                    console.log(gameboard.choosenCells(player2Move)); 
                    console.log("player2Move:", player2Move)
                    playersMove.removePickedCells(player2Move); 
                    // console.log(`player2gridlist: ${playersMove.gridList}`) 
                    index = 0; console.log(player2Move)
                    // console.log(board)
                };
                getPlayers.pop()
            };
            
            let announcement2 = announcedWinner(board);
            
            if(announcement2 === true) {
                console.log(`my board2`, board)
                return board
            };

          return board
    }

    // This return the function in my factory function.
    return { checkingRows, checkingColumns, checkingDiagonal, checkingDraw, switchTurn }
};

let mygameBoard = Gameboard(3);
let playgame = GameController(3, mygameBoard);
let board = [[["X"],["0"],["X"]],
            [["0"],[],["X"]],
            [["0"],["X"],["0"]]]

let mygame = PlayGame(2);
console.log(mygame.getComputerHardMove(3, 0, player1 = "Tolani", player2 = "Computer"));

// let board2 = mygameBoard.creatGridBoard(); console.log(board2)
// console.log(game.checkingRows(board))
// console.log(game.checkingColumns(board))
// console.log(game.checkingDiagonal(board))
// console.log(playgame.checkingDraw(board))
// let board2 = mygameBoard.creatGridBoard();
// console.log('Outerboard', board2)
// let switchTurn1 = playgame.switchTurn(player1 = "Tolani", player2 = "Computer", 4, board2)
// console.log('myfinal result',switchTurn1)
// let switchTurn2 = playgame.switchTurn(player1 = "Tolani", player2 = "Computer", 5, switchTurn1)
// console.log('my Second Final result:', switchTurn2)
// let switchTurn3 = playgame.switchTurn(layer1 = "Tolani", player2 = "Computer", 6, switchTurn2)