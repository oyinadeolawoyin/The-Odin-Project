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
        let getplayer1 = player1()
        let getplayer2 = player2();
      
        for(cells in board) {
            lengthOfColumns += board[cells].length; 
            getCell = lengthOfColumns; 
            
            if(playercell > lengthOfColumns) {
                continue;
            }
            else{
                if(playercell > 3) {
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
                    playercell -=  1;

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


// This function describe how computer will chose cell randomly, and how human play their game.
function PlayGame(numOfGrid) {
    let gridList = [];
    
    for(let i = 1; i < (numOfGrid*numOfGrid+1); i++) {
        gridList.push(i);   
    };

    // This function pick cells in board randomly according to the number of the cells
    const getComputerMove = () => {
        let randomCellsPicking = gridList[Math.floor(Math.random() * gridList.length)];
        return randomCellsPicking;
    };

    // Remove any number the computer picked to avoid it picking the same cell and appending "O" || "X" in a cell.
    const removePickedCells = (num) => {
        let indexNum = gridList.indexOf(parseInt(num));
        return gridList.splice((indexNum), 1) 
    }

    // This get the cell human picked, but check if not in gridList to avoiding choosing a cell.
    const getHumanMove = (num) => {
        if(!gridList.includes(num)) {
            console.log(num)
            return false
        }
        else{
            console.log(num)
            return num
        }              
    };

    // This return all avaliable function in Playgame factory function.
    return { getHumanMove, removePickedCells, getComputerMove,  gridList }
}

// This list get the current player playing to make it easy for appending either "O" || "X" in a cell.
const getPlayers = []; const getComputerMove = [];

// This function helps in checking if a row is complete with "X" || "O", and return true. 
// It also help in switching turn between player1 and player2.
function GameController(gameboard, playersMove) {
    // This check the rows in board.
    const checkingRows = (board) => {
        console.log("How are you doing?")
        for(rows in board) {
            let getfistRowCell = board[0][rows][0]; 

            for(let i = 1; i < (board[rows].length); i++) {
                let getRows = board[i][rows][0]; 
            
                if(getfistRowCell === getRows && i != (board[0].length-1)) {
                    continue;
                }
                else if(getfistRowCell != getRows) {
                    break
                }
                else {
                    if(getfistRowCell === getRows && i === (board[rows].length-1) && getRows !== undefined || getfistRowCell !== undefined){
                        return true
                    };
                };
            };
        };
        return false
    };

    // This check the columns in board.
    const checkingColumns = (board) => {
        console.log("hello")
        for(columns in board) {
            getColumn = board[columns];
            let getCells = getColumn[0][0];  
            
            for(i = 1; i < (getColumn.length); i++) {
                if(getCells === getColumn[i][0] && i != (getColumn.length-1)) {
                    continue
                }
                else if(getCells !== getColumn[i][0]) {
                    getCells = getColumn[i][0];
                    break
                }
                else {
                    if(getCells === getColumn[i][0] && i === (getColumn.length-1) && getColumn !== undefined && getCells !== undefined){
                    return true
                    };
                };      
            };
        };
        return false
    };

    // This check the diagonal in board.
    const checkingDiagonal = (board) => {
        console.log("hi")
        let cell = board[0][0][0]; console.log(cell)
        if(cell !== undefined && cell === board[1][1][0] && board[1][1][0] === board[2][2][0] ||
        board[0][2][0] !== undefined && board[0][2][0] === board[1][1][0] && board[1][1][0] === board[2][0][0]) {
            return true
        }
        else{
            return false
        }
    };

    // This check if there's no winner.
    const checkingDraw = (board) => {
        console.log("I'm here")
        for(element in board) {
            for(i = 0; i < board[element].length; i++) {
                if(board[element][i][0] !== undefined && i !== (board[element].length)-1) {
                    continue;
                }
                else if(board[element][i][0] === undefined) {
                    return false;
                }
                else {
                    if(board[element][i][0] !== undefined && i === (board[element].length-1)) {
                        break
                    }
                };
            };
        };
        return "Draw!"
    }

    // This search for which row || column || diagonal cells completed first. And it also check for draw.
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
            return true
        }
        else{
            if(winningSearch(board) === "Draw!") {
               return "Draw!"
            }
            else {
                return false
            }
        };

    }

    // This function switch turn between player1 && player2.
    const switchTurn = (player1 = "Computer", player2 = "Computer", num, board) => {
        console.log(`player1: ${player1}, player2: ${player2}, num: ${num}, board: ${board}`)
        
        // let gameboard = Gameboard(numOfGrid)
        console.log(board)
        let getplayer1 = gameboard.player1(player1); 
        let getPlayer2 = gameboard.player2(player2);
        let index = 0;
        getPlayers.push("player1")
            
        if(getplayer1.name !== "Computer") {
            let player1Move = playersMove.getHumanMove(num);
                
            if(player1Move === false) {
                alert("Cell not eligible");
            }
            else{
                console.log(gameboard.choosenCells(player1Move));
                playersMove.removePickedCells(player1Move); 
                index +=1;  
            };
            }
            else{
                let player1Move = playersMove.getComputerMove();console.log("computerMove:", player1Move)
                console.log(gameboard.choosenCells(player1Move)); 
                playersMove.removePickedCells(player1Move);
                index +=1;  getComputerMove.push(player1Move);
            };
            
            let announcement = announcedWinner(board);
            
            if(announcement === true) {
                console.log(getPlayers)
                console.log(announcement, "Player 1 Win!")
                return true
            }
            else{
                if(announcement === "Draw!") {
                    console.log(announcement)
                    return "Draw!"
                }
            };

            if(index === 1) {
                getPlayers.pop(); getPlayers.push("player2");
                
                if(getPlayer2.name !== "Computer") {
                    
                let player2Move = playersMove.getHumanMove(num);
              
                    if(player2Move === false) {
                        alert("Cell not eligible");
                        index +=1
                    }
                    else{
                        console.log(gameboard.choosenCells(player2Move));
                        playersMove.removePickedCells(player2Move);
                        index = 0; 
                    };
                }
                else{
                    let player2Move = playersMove.getComputerMove(); console.log("computerMove:", player2Move);
                    console.log(gameboard.choosenCells(player2Move)); 
                    playersMove.removePickedCells(player2Move); 
                    index = 0; getComputerMove.push(player2Move);
                };

                getPlayers.pop()
            };
            
            let announcement2 = announcedWinner(board);
            
            if(announcement2 === true) {
                console.log(getPlayers)
                console.log(announcement, "Player 2 Win!")
                return true
            }
            else{
                if(announcement === "Draw!") {
                    console.log(announcement)
                    return "Draw!"
                }
            };

          return board
    };

    // This return the function in my factory function.
    return { checkingRows, checkingColumns, checkingDiagonal, checkingDraw, switchTurn }
};

let game = Gameboard(3);
let myboard = game.creatGridBoard()
let playGame = PlayGame(3)
// let play = GameController(game, playGame);
// let switchTurn = play.switchTurn("Computer", "oyin", 9, myboard)

const GameInteraction = ( function() {
    let grid = [];

    const displayQuestions = (doc, selector1, selector2) => {
        doc.addEventListener("DOMContentLoaded", () => {
            const closeFormButton = doc.querySelector(selector1);
            const questionsForm = doc.querySelector(selector2);

            closeFormButton.addEventListener("click", () =>{
                questionsForm.style.display = "none";  

            })
        })
    }

    const creatThreeGridBoard = (doc, selector1, selector2) => {
        let boardGrid = doc.querySelector(selector1);
        let divBoard = doc.querySelector(selector2)
        
        boardGrid.addEventListener("click", () => {
            divBoard.innerHTML = "";
            for(i = 1; i < (3 * 3)+1 ; i++) {
                buttons =  doc.createElement("button"); 
                buttonsPara = doc.createElement("p")
                buttons.classList.add("number"+i, "num");
                buttons.textContent = i;
                divBoard.appendChild(buttons)
            }
            grid.push(3); 
            return divBoard
        });

    };

    const creatFourGridBoard = (doc, selector1, selector2) => {
        let boardGrid = doc.querySelector(selector1);
        let divBoard = doc.querySelector(selector2)
        
        boardGrid.addEventListener("click", () => {
            divBoard.innerHTML = "";
            for(i = 1; i < (4 * 4)+1 ; i++) {
                buttons =  doc.createElement("button"); 
                buttonsPara = doc.createElement("p")
                buttons.classList.add("number"+i, "num");
                buttons.textContent = i;
                divBoard.appendChild(buttons)
            }
            grid.push(4)
            return divBoard
        });

    };
    
    let playerList = []; 
    
    const player1 = (doc, selector1, selector2) => {
        let player1 = doc.querySelector(selector1);
        
        player1.addEventListener("click", () => { 
            playerList.push('player1:', doc.querySelector(selector2).value)
            return playerList
        });  
    }

    const player2 = (doc, selector1, selector2) => {
        let player2 = doc.querySelector(selector1);
        
        player2.addEventListener("click", () => { 
            playerList.push('player2:', doc.querySelector(selector2).value)
            return playerList
        });  
    }

    const playOrQuitButtons = (doc, selector1, selector2) => {
        let playPara = doc.createElement("p")
        let playButton = doc.createElement("button");
        playButton.classList.add("playButton");
        playButton.textContent = "Play!";
        playPara.appendChild(playButton)

        let quitPara = doc.createElement("p")
        let quitButton = doc.createElement("button");
        quitButton.classList.add("quitButton");
        quitButton.textContent = "Quit.";
        quitPara.appendChild(quitButton)

        let divBoard = doc.querySelector(selector1);
        divBoard.innerHTML = ""
        divBoard.appendChild(playPara);
        divBoard.appendChild(quitPara);

        let play = doc.querySelector(".playButton")
        let quit = doc.querySelector(".quitButton");

        play.addEventListener("click", () => {
            const questionsForm = doc.querySelector(selector2); 
            questionsForm.style.display = "block";
        });

        quit.addEventListener("click", () => {
            divBoard.appendChild(doc.createTextNode("THANKS FOR PLAYING!"))
        })
    }

    const mainGamePlay = (doc, selector1, selector2, selector3, selector4) => {
       
        let index = 0;
        let boardList = []; 
        let startGame = doc.querySelector(selector1);
        
        startGame.addEventListener("click", () => {
            let buttons = doc.querySelectorAll(selector2);
            let gameBoard = Gameboard(grid[0]);
            let board = gameBoard.creatGridBoard(); 
            let playersMove = PlayGame(grid[0]);

            buttons.forEach(element => {
               
                element.addEventListener("click", () => {

                   
                    let elementTextNum = element.textContent; console.log('elementText:', elementTextNum);
                    let Move = GameController(gameBoard, playersMove);
            
                    if(playerList[0] === "player1:") {
                        if(index === 0) {
                            element.innerHTML = "";
                            element.textContent = "X";
                            element.style.color = "Green";

                            let game = Move.switchTurn( playerList[1], "Computer", parseInt(elementTextNum), board);
                           
                            if(game === true) {
                                let message = doc.querySelector(selector3)
                                
                                message.appendChild(doc.createTextNode("You Win!"))
                                playOrQuitButtons(doc, selector3, selector4)
                                playerList.splice(0); boardList.pop(); index = 0; grid.pop();  
                            }
                            else if(game === "Draw!") {
                                let message = doc.querySelector(selector3)
                                
                                message.appendChild(doc.createTextNode("Draw!"))
                                playOrQuitButtons(doc, selector3, selector4)
                                playerList.splice(0); boardList.pop(); index = 0; grid.pop(); 
                            }
                            else{
                                let computerMoves = doc.querySelector(`.number${getComputerMove[0]}`);
                                computerMoves.innerHTML = "";
                                computerMoves.textContent = "O";
                                computerMoves.style.color = "red"; 
                                index+=1; boardList.push(game); getComputerMove.pop();
                                console.log('g:',boardList)
                            };
                        }
                        else{
                            element.innerHTML = "";
                            element.textContent = "X";
                            element.style.color = "green";

                            let game = Move.switchTurn( playerList[1], "Computer", parseInt(elementTextNum), boardList[0]);

                            if(game === true) {
                                let message = doc.querySelector(selector3)
                                
                                message.appendChild(doc.createTextNode("You Win!"))
                                playOrQuitButtons(doc, selector3, selector4)
                                playerList.splice(0); boardList.pop(); index = 0; grid.pop(); 
                            }
                            else if(game === "Draw!") {
                                let message = doc.querySelector(selector3)
                                
                                message.appendChild(doc.createTextNode("Draw!"))
                                playOrQuitButtons(doc, selector3, selector4)
                                playerList.splice(0); boardList.pop(); index = 0; grid.pop(); 
                            }
                            else{
                                let computerMoves = doc.querySelector(`.number${getComputerMove[0]}`);
                                computerMoves.innerHTML = "";
                                computerMoves.textContent = "O";
                                computerMoves.style.color = "red"; 
                                getComputerMove.pop(); boardList.pop(); boardList.push(game); 
                                console.log('g:',boardList)
                            };
                        }
                    }
                    else {
                        if(index === 0) {
                            element.innerHTML = "";
                            element.textContent = "0";
                            element.style.color = "red";

                            let game = Move.switchTurn( "Computer", playerList[1], parseInt(elementTextNum), board);
                            
                            if(game === true) {
                                let message = doc.querySelector(selector3)
                                
                                message.appendChild(doc.createTextNode("You Win!"))
                                playOrQuitButtons(doc, selector3, selector4)
                                playerList.splice(0); boardList.pop(); index = 0; grid.pop(); 
                            }
                            else if(game === "Draw!") {
                                let message = doc.querySelector(selector3)
                                
                                message.appendChild(doc.createTextNode("Draw!"))
                                playOrQuitButtons(doc, selector3, selector4)
                                playerList.splice(0); boardList.pop(); index = 0; grid.pop(); 
                            }
                            else{
                                let computerMoves = doc.querySelector(`.number${getComputerMove[0]}`);
                                computerMoves.innerHTML = "";
                                computerMoves.textContent = "X";
                                computerMoves.style.color = "Green"; 
                                index+=1; boardList.push(game); getComputerMove.pop();
                                console.log('g:',boardList)
                            };
                        }
                        else{
                            element.innerHTML = "";
                            element.textContent = "0";
                            element.style.color = "red";

                            let game = Move.switchTurn( "Computer", playerList[1], parseInt(elementTextNum), boardList[0]);
                           
                            if(game === true) {
                                let message = doc.querySelector(selector3)
                                console.log('message:',message)
                                message.appendChild(doc.createTextNode("You Win!"))
                                playOrQuitButtons(doc, selector3, selector4)
                                playerList.splice(0); boardList.pop(); index = 0; grid.pop();  
                            }
                            else if(game === "Draw!") {
                                let message = doc.querySelector(selector3)
                                
                                message.appendChild(doc.createTextNode("Draw!"))
                                playOrQuitButtons(doc, selector3, selector4)
                                playerList.splice(0); boardList.pop(); index = 0; grid.pop(); 
                            }
                            else{
                                let computerMoves = doc.querySelector(`.number${getComputerMove[0]}`);
                                computerMoves.innerHTML = "";
                                computerMoves.textContent = "X";
                                computerMoves.style.color = "Green"; 
                                getComputerMove.pop(); boardList.pop(); boardList.push(game); 
                                console.log('g:',boardList)
                            };
                        }
                    };

                });
            }); 
        }); 
    };

   return {  displayQuestions, creatThreeGridBoard, creatFourGridBoard, player1, player2, mainGamePlay }

}) ();

GameInteraction.displayQuestions(document, "#start", "#questions");
GameInteraction.creatThreeGridBoard(document, "#grid3", "#DivBoard");
GameInteraction.creatFourGridBoard(document, "#grid4", "#DivBoard")
GameInteraction.player1(document, "#player1", ".playerName");
GameInteraction.player2(document, "#player2", ".playerName")
GameInteraction.mainGamePlay(document, "#start", ".num", "#DivBoard", "#questions");