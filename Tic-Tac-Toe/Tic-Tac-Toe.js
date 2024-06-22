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
        
        // console.log('getplayerss:',getPlayers)
        let getplayer1 = player1()
        let getplayer2 = player2();
        console.log(getPlayers)
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
    
    const player1 = (name) => {
        let player = {
            name: name,
            gift: "X"
        }
        return player
    };

    const player2 = (name) => {
        let player = {
            name: name,
            gift: "O"
        };
        return player
    };
        
    return { getNumGrid, creatGridBoard, getBoard, choosenCells, player1, player2, getPlayers }
};

// let board = Gameboard(4);
// console.log(board.creatGridBoard());
// console.log(board.getBoard(), board.getNumGrid());
// console.log(board.choosenCells(9));
// console.log(board.player2("Tolani")); 
// console.log(board.player1("Computer"))


function PlayGame(numOfGrid) {
    let gridList = [];
    
    for(let i = 1; i < (numOfGrid*numOfGrid+1); i++) {
        gridList.push(i);   
    };

    const getComputerEasyMove = () => {

        let randomCellsPicking = Math.floor(Math.random() * gridList.length);

        if(randomCellsPicking === 0) {
            console.log(randomCellsPicking)
            checkZero = true;
            while(checkZero) {
                randomCellsPicking = Math.floor(Math.random() * gridList.length); 
                if(randomCellsPicking !== 0) {
                    console.log("!=0:", randomCellsPicking)
                    checkZero = false
                }
            }
        }
        
        else{
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
        };
        
        console.log("randoncellpicking:",randomCellsPicking);
        return randomCellsPicking;
    };

    const removePickedCells = (num) => {
        // console.log(`num ${num}`)
        let indexNum = gridList.indexOf(num)
        return gridList.splice((indexNum), 1) 
    }

    const getHumanMove = (num) => {
        if(!gridList.includes(num)) {
            return false
        }
        else {
            return num
        };   
    };

    return { getHumanMove, removePickedCells, getComputerEasyMove, gridList }
}

const getPlayers = [];

function GameController(numOfGrid) {
    let board = Gameboard(numOfGrid);
    let playersMove = PlayGame(numOfGrid);
    let creatBoard = board.creatGridBoard(numOfGrid)
    // board.player1(); board.player2()

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
            console.log(`board:`, board)
            getColumn = board[columns];
            console.log('getcolumnnn',getColumn)
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

    const checkingDraw = (board) => {
        let item ; 
        for(element in board) {
            console.log('e:', element, "boardlen:", board.length-1)
            for(i = 0; i < board[element].length; i++) {
                if(item !== board[element][i][0] && i !== (board[element].length)-1) {
                    console.log("continue if:", board[element][i][0], 'belen:', board[element].length-1)
                    continue;
                }
                else if(item === board[element][i][0]) {
                    return false;
                }
                else {
                    if(item !== board[element][i][0] && i === (board[element].length-1)) {
                        console.log('continue to the next column')
                        break
                    }
                };
            };
        };
        return "Draw!"
    }

    const winningSearch = (board) => {
        if(checkingColumns(board) === true || checkingRows(board) === true || checkingDiagonal(board) === true){
            return true
        }
        else {
            if(checkingDraw(board) === "Draw!") {
                return "Draw!"
            }
        };
    }

    const switchTurn = (name, num) => {
        let checkingFullStop = true;
        let getplayer1 = board.player1("Computer");
        let getPlayer2 = board.player2(name);

        while (checkingFullStop) {
            let index = 0;
            getPlayers.push("player1")
            
            if(getplayer1.name !== "Computer") {
                let player1Move = playersMove.getHumanMove(num);
                
                if(player1Move === false) {
                    console.log("Cell not eligible");
                }
                else{
                    console.log(board.choosenCells(player1Move));
                    playersMove.removePickedCells(player1Move); console.log(`player1gridlist: ${playersMove.gridList}`) 
                    index +=1; 
                };
            }
            else{
                let player2Move = playersMove.getComputerEasyMove()
                console.log(board.choosenCells(player2Move)); console.log('player2Move:',player2Move);
                playersMove.removePickedCells(player2Move); console.log(`player2gridlist: ${playersMove.gridList}`);
                index +=1; 
            }
            
            if(index === 1) {
                getPlayers.pop(); getPlayers.push("player2");
                
                if(getPlayer2.name !== "Computer") {
                    
                let player2Move = playersMove.getHumanMove(num);
                console.log(player2Move)
                    if(player2Move === false) {
                        console.log("Cell not eligible");
                    }
                    else{
                        console.log(board.choosenCells(player2Move));
                        playersMove.removePickedCells(player2Move); console.log(`player1gridlist: ${playersMove.gridList}`) 
                        index = 0; 
                    };
                }
                else{
                    let player2Move = playersMove.getComputerEasyMove();
                    console.log(board.choosenCells(player2Move)); console.log("computerMove:", player2Move)
                    playersMove.removePickedCells(player2Move); console.log(`player2gridlist: ${playersMove.gridList}`) 
                    index = 0; console.log(player2Move)
                };
                getPlayers.pop()
            };
           console.log('creatboard',creatBoard)
            
           if(winningSearch(creatBoard) === true) {
                console.log('true')
                checkingFullStop = false
            }
            else{
                if(winningSearch(creatBoard) === "Draw!") {
                    checkingFullStop = false
                }
            }
            
            return "finish!" 
        }
    }

    return { checkingRows, checkingColumns, checkingDiagonal, checkingDraw, switchTurn }
};

let playgame = GameController(3);
let board = [[["X"],["0"],["X"]],
            [["0"],[],["X"]],
            [["0"],["X"],["0"]]]
// console.log(game.checkingRows(board))
// console.log(game.checkingColumns(board))
// console.log(game.checkingDiagonal(board))
// console.log(playgame.checkingDraw(board))


console.log(playgame.switchTurn("Tolani", 5))