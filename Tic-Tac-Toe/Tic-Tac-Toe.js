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
            
            if(playercell === "X" || playercell === "O") {
                break;
            }
            else if(playercell > lengthOfColumns) {
                continue;
            }
            else{
                if(playercell > 3) {
                    lengthOfColumns -= [board[cells].length*(cells)]; 
                    getCell -= playercell;
                    
                    if(getPlayers[getPlayers.length-1] === "player1") {
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

                    if(getPlayers[getPlayers.length-1] === "player1") {
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
        return gridList.splice((indexNum), 1);
    }

    // This get the cell human picked, but check if not in gridList to avoiding choosing a cell.
    const getHumanMove = (num) => {
            return num
                    
    };

    // This return all avaliable function in Playgame factory function.
    return { getHumanMove, removePickedCells, getComputerMove,  gridList }
}

// This list get the current player playing to make it easy for appending either "O" || "X" in a cell.
const getPlayers = []; const getComputerMove = [];

// This function helps in checking if a row is complete with "X" || "O", and return true. 
// It also help in switching turn between player1 and player2.
function GameController() {

    // This check the rows in board.
    const checkingRows = (board) => {
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

    // This check the left side diagonal in board.
    const checkingLeftDiagonal = (board) => {
        let cell1 = board[0][0][0]; 

        for(i = 1; i < board.length; i++) {
            let cell2 = board[i][i][0];

            if(cell1 !== undefined && cell1 === cell2 && i !== (board.length-1)) {
                cell1 = cell2;
                continue
            }
            else if(cell1 !== undefined && cell1 === cell2 && i === (board.length-1)) {
                return true;
            }
            else{
                return false
            };
        };
    };

     // This check the right side diagonal in board.
    const checkingRightDiagonal = (board) => {
        let cell1 = board[0][board.length - 1][0]; 
        let boardLenght = (board.length-1);

        for(i = 1; i < board.length; i++) {
            let cell2 = board[i][boardLenght-i][0]; 

            if(cell1 !== undefined && cell1 === cell2 && i !== (board.length-1)) {
                cell1 = cell2;
                continue
            }
            else if(cell1 !== undefined && cell1 === cell2 && i === (board.length-1)) {
                return true;
            }
            else{
                return false
            };
        };
    }

    // This check if there's no winner.
    const checkingDraw = (board) => {
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
        if( checkingColumns(board) === true || checkingRows(board) === true || 
            checkingLeftDiagonal(board) === true || checkingRightDiagonal(board) === true ) {
            return true
        }
        else {
            if(checkingDraw(board) === "Draw!") {
                return "Draw!"
            }
            else{
                return false
            }
        };
    };
               
    // This return the winningSearch function that holds all the functions in my factory function.
    return { winningSearch }
};

// This function describe how turn switch from player one to player2.
const SwitchTurn = (gameboard, playersMove, player1, player2) => {
    let getplayer1 = gameboard.player1(player1); 
    let getPlayer2 = gameboard.player2(player2);
    let board = gameboard.creatGridBoard();

    let boardCheck = GameController();

    const player1Turn = (num) => {
        getPlayers.push("player1");

        if(getplayer1.name !== "Computer") {
            let player1Move = playersMove.getHumanMove(num);
                gameboard.choosenCells(player1Move);
                playersMove.removePickedCells(player1Move);    
        }
        else{
            
            let player1Move = playersMove.getComputerMove();
            gameboard.choosenCells(player1Move); 
            playersMove.removePickedCells(player1Move);
            getComputerMove.push(player1Move);
        };

        let winAnnouncement = boardCheck.winningSearch(board);

        if(winAnnouncement === true) {
            return true
        }
        else{
            if(winAnnouncement === "Draw!") {
                return ("Draw!")
            }
            else{
                return board
            };
        };  
    };

    const player2Turn = (num) => {
        getPlayers.pop(); getPlayers.push("player2");

        if(getPlayer2.name !== "Computer") {
            let player1Move = playersMove.getHumanMove(num);
                gameboard.choosenCells(player1Move);
                playersMove.removePickedCells(player1Move);    
        }
        else{
            let player1Move = playersMove.getComputerMove();
            gameboard.choosenCells(player1Move); 
            playersMove.removePickedCells(player1Move);
            getComputerMove.push(player1Move);
        };

        getPlayers.pop();

        let winAnnouncement = boardCheck.winningSearch(board);

        if(winAnnouncement === true) {
            return (true)
        }
        else{
            if(winAnnouncement === "Draw!") {
                return ("Draw!")
            }
            else{
                return board
            };
        }; 

    };

    // This return the player1Turn and Player2Turn functions.
    return { player1Turn, player2Turn }
};

// This function made up the interaction of the DOM with the users.
const GameInteraction = ( function() {
    let grid = [];

    // This function describe how the questions form pop up and close in the page.
    const gridDiv = (doc, selector1, selector2, selector3) => {
        doc.addEventListener("DOMContentLoaded", () => {
            const divGrid = doc.querySelector(selector1)
            const closeFormButton = doc.querySelector(selector2);

            const afterRound = doc.querySelector(selector3);
            afterRound.style.display = "none";

            closeFormButton.addEventListener("click", () =>{
                divGrid.style.display = "none";  
            });
        });
    };

    // This function describe how the questions form pop up and close in the page.
    const displayQuestions = (doc, selector1, selector2, selector3) => {
        doc.addEventListener("DOMContentLoaded", () => {

            const openFormButton = doc.querySelector(selector3)
            const closeFormButton = doc.querySelector(selector1);
            const questionsForm = doc.querySelector(selector2);

            questionsForm.style.display = "none";

            openFormButton.addEventListener("click", () => {
                questionsForm.style.display = "flex";
            });

            closeFormButton.addEventListener("click", () =>{
                questionsForm.style.display = "none";  

            });
        });
    };

    // This function create the three * three grid board.
    const creatThreeGridBoard = (doc, selector1, selector2) => {
        let boardGrid = doc.querySelector(selector1);
        let divBoard = doc.querySelector(selector2);
    
        boardGrid.addEventListener("click", () => {
            divBoard.innerHTML = "";

            let threeGridDiv = doc.createElement("div");
            threeGridDiv.classList.add("three");

            for(i = 1; i < (3 * 3)+1 ; i++) {
                buttons =  doc.createElement("button"); 
                buttonsPara = doc.createElement("p")
                buttons.classList.add("number"+i, "num");
                buttons.textContent = i;
                threeGridDiv.appendChild(buttons);
                
                divBoard.appendChild(threeGridDiv);
            }

            grid.pop();
            grid.push(3);
            return divBoard
        });

    };

    // This function create the four * four grid board.
    const creatFourGridBoard = (doc, selector1, selector2) => {
        let boardGrid = doc.querySelector(selector1);
        let divBoard = doc.querySelector(selector2);
    
        boardGrid.addEventListener("click", () => {
            divBoard.innerHTML = "";

            let fourGridDiv = doc.createElement("div");
            fourGridDiv.classList.add("four");

            for(i = 1; i < (4 * 4)+1 ; i++) {
                buttons =  doc.createElement("button"); 
                buttonsPara = doc.createElement("p")
                buttons.classList.add("number"+i, "num");
                buttons.textContent = i;
                fourGridDiv.appendChild(buttons);
                
                divBoard.appendChild(fourGridDiv);
            }

            grid.pop();
            grid.push(4);
            return divBoard
        });

    };
    
    // This list append either player1 or player2 once player click one of the player1 or player2 functions belows.
    let playerList = []; 
    
    // This is player1 function for player1's button  addEventListener.
    const player1 = (doc, selector1, selector2) => {
        let player1 = doc.querySelector(selector1);
        
        player1.addEventListener("click", () => { 
            if(playerList.length !== 0) {
                playerList.pop();
            }
            else{
                playerList.push('player1:', doc.querySelector(selector2).value)
                return playerList
            };
        });  
    }

      // This is player2 function for player2's button  addEventListener.
    const player2 = (doc, selector1, selector2) => {
        let player2 = doc.querySelector(selector1);
        
        player2.addEventListener("click", () => { 
            if(playerList.length !== 0) {
                playerList.pop();
            }
            else{
                playerList.push('player2:', doc.querySelector(selector2).value);
                return playerList
            };
        });  
    }

    // This function tell if the player want to continue playing game or want to quit after one round.
    const playOrQuitButtons = (doc, selector1, selector2, selector3) => {
            let playPara = doc.createElement("p");
            let playButton = doc.createElement("button");
            playButton.classList.add("playButton");
            playButton.textContent = "Play!";
            playPara.appendChild(playButton)

            let quitPara = doc.createElement("p")
            let quitButton = doc.createElement("button");
            quitButton.classList.add("quitButton");
            quitButton.textContent = "Quit.";
            quitPara.appendChild(quitButton)

            let afterRound = doc.querySelector(selector1);
            afterRound.appendChild(playPara);
            afterRound.appendChild(quitPara);

            let play = doc.querySelector(".playButton")
            let quit = doc.querySelector(".quitButton");


            play.addEventListener("click", () => {
                const divGrid = doc.querySelector(selector2); 
                divGrid.style.display = "flex";

                const closeDiv = doc.querySelector(selector3);
                closeDiv.innerHTML = "";
                closeDiv.style.display = "none";
            });

            const textPara = doc.createElement("p");
            textPara.classList.add("text");

            quit.addEventListener("click", () => {
                textPara.innerHTML = "";
                const text = doc.createTextNode("THANKS FOR PLAYING!");
                textPara.appendChild(text);
                afterRound.appendChild(textPara)
            });
    }

    // This function describe how the players play the game by switching turn.
    const playGame = (doc, selector1, selector2, selector3, selector4) => {
        let index = 0;  checkingElement = 0;
        let startGame = doc.querySelector(selector1);

        startGame.addEventListener("click", () => {
            let buttons = doc.querySelectorAll(selector2);
            let gameBoard = Gameboard(grid[0]);
            let playersMove = PlayGame(grid[0]);

            buttons.forEach(element => {

                if(playerList[0] === "player1:") {
                    let switchTurn = SwitchTurn(gameBoard, playersMove, playerList[1], "Computer");
                    
                    element.addEventListener("click", () => {
                        let elementTextNum = element.textContent;                                

                        if(index === 0) {
                            if(elementTextNum === "O" || elementTextNum === "X") {
                                alert("You can only choose a cell once!");
                            }
                            else{
                                game = switchTurn.player1Turn(elementTextNum);
                                    
                                element.innerHTML = "";
                                element.textContent = "X";
                                element.style.color = "green";
                                checkingElement +=1;
                            };
                        
                            if(checkingElement === 1) {
                                game = switchTurn.player2Turn(elementTextNum);
                                
                                let computerMoves = doc.querySelector(`.number${getComputerMove[0]}`);
                                computerMoves.innerHTML = "";
                                computerMoves.textContent = "O";
                                computerMoves.style.color = "red";

                                 index+=1; getComputerMove.pop(); checkingElement = 0;
                            }
                            else{
                                alert("Pick another cell!")
                            };  
                        }
                        else{
                            if(elementTextNum === "O" || elementTextNum === "X") {
                                alert("You can only choose a cell once!")
                            }
                            else{
                                game = switchTurn.player1Turn(elementTextNum);
                                checkingElement +=1;

                                element.innerHTML = "";
                                element.textContent = "X";
                                element.style.color = "green";
                            };

                            if(game === true) {
                                let message = doc.querySelector(selector3)
                                message.appendChild(doc.createTextNode(`${playerList[1]} Wins!`));
                                message.style.display = "flex";

                                playerList.splice(0); index = 0; grid.pop(); checkingElement = 0;
                                getComputerMove.pop(); getPlayers.splice(0);

                                return  playOrQuitButtons(doc, selector3, selector4, selector3);
                               
                            }
                            else{
                                if(game === "Draw!") {            
                                    let message = doc.querySelector(selector3)
                                    message.appendChild(doc.createTextNode("Draw!"));
                                    message.style.display = "flex";

                                    playerList.splice(0); index = 0; grid.pop(); 
                                    getComputerMove.pop(); getPlayers.splice(0); checkingElement = 0;

                                    return  playOrQuitButtons(doc, selector3, selector4, selector3);
                                };
                            } ;
                            
                            if(checkingElement === 1){
                                game = switchTurn.player2Turn(elementTextNum);

                                let computerMoves = doc.querySelector(`.number${getComputerMove[0]}`);
                                computerMoves.innerHTML = "";
                                computerMoves.textContent = "O";
                                computerMoves.style.color = "red"; 

                                getComputerMove.pop(); checkingElement = 0;
                            } 
                            else{
                                alert("Pick another cell!")
                            };  
                            
                            if(game === true) {
                                let message = doc.querySelector(selector3)
                                message.appendChild(doc.createTextNode("Player2 Wins!"));
                                message.style.display = "flex";

                                playerList.splice(0); index = 0; grid.pop();
                                getComputerMove.pop(); getPlayers.splice(0); checkingElement = 0;

                                return playOrQuitButtons(doc, selector3, selector4, selector3);
                            }
                            else { 
                                if (game === "Draw!") {
                                let message = doc.querySelector(selector3)
                                message.appendChild(doc.createTextNode("Draw!"));
                                message.style.display = "flex";

                                playerList.splice(0); index = 0; grid.pop(); 
                                getComputerMove.pop(); getPlayers.splice(0); checkingElement = 0;

                                return playOrQuitButtons(doc, selector3, selector4, selector3);
                                };
                            };        
                        };
                    });
                }
                else{
                    let switchTurn = SwitchTurn(gameBoard, playersMove, playerList[1], playerList[1]);
                    let game = "";
    
                    element.addEventListener("click", () => {
                        checkingElement+=1; 
    
                        let elementTextNum = element.textContent; 
    
                        if(index === 0) {
                            if(checkingElement === 1) {
                                if(elementTextNum === "O" || elementTextNum === "X") {
                                    alert("You can only choose a cell once!")
                                    checkingElement = 0;
                                }
                                else{
                                    game = switchTurn.player1Turn(elementTextNum);
                                    
                                    element.innerHTML = "";
                                    element.textContent = "X";
                                    element.style.color = "green";
                                };   
                            }
                            else{
                                if(checkingElement === 2) {
                                    if(elementTextNum === "O" || elementTextNum === "X") {
                                        alert("You can only choose a cell once!")
                                        checkingElement = 1;
                                    }
                                    else{
                                        game = switchTurn.player2Turn(elementTextNum);
                                        
                                        element.innerHTML = "";
                                        element.textContent = "O";
                                        element.style.color = "red";
        
                                        index+=1; checkingElement = 0;
                                    };    
                                };
                            }; 
                        }
                        else{
                            if(checkingElement === 1) {
                                if(elementTextNum === "O" || elementTextNum === "X") {
                                    alert("You can only choose a cell once!")
                                    checkingElement = 0;
                                }
                                else{
                                    game = switchTurn.player1Turn(elementTextNum);

                                    element.innerHTML = "";
                                    element.textContent = "X";
                                    element.style.color = "green";  
                                };
    
                                if(game === true) {

                                    let message = doc.querySelector(selector3)
                                    message.appendChild(doc.createTextNode(`player1 Wins!`));
                                    message.style.display = "flex";

                                    playerList.splice(0); index = 0; grid.pop(); getPlayers.splice(0);
                                    getComputerMove.pop(); checkingElement = 0;
        
                                    return playOrQuitButtons(doc, selector3, selector4, selector3);
                                    }
                                    else{
                                        if(game === "Draw!") {
                                            let message = doc.querySelector(selector3)
                                            message.appendChild(doc.createTextNode("Draw!"));
                                            message.style.display = "flex";
                                            
                                            playerList.splice(0); index = 0; grid.pop(); getPlayers.splice(0);
                                            getComputerMove.pop(); checkingElement = 0;
        
                                            return playOrQuitButtons(doc, selector3, selector4, selector3)
                                        };
                                    } ;
                                }
                                else{
                                    if(checkingElement === 2) {
                                        if(elementTextNum === "O" || elementTextNum === "X") {
                                            alert("You can only choose a cell once!")
                                            checkingElement = 1;
                                        }
                                        else{
                                            game = switchTurn.player2Turn(elementTextNum);

                                            element.innerHTML = "";
                                            element.textContent = "O";
                                            element.style.color = "red";

                                            checkingElement = 0;
                                        };      
    
                                    if(game === true) {
                                        let message = doc.querySelector(selector3);
                                        message.appendChild(doc.createTextNode(`${playerList[1]} Wins!`));
                                        message.style.display = "flex";

                                        playerList.splice(0); index = 0; grid.pop(); getPlayers.splice(0);
                                        getComputerMove.pop(); checkingElement = 0;
        
                                        return playOrQuitButtons(doc, selector3, selector4, selector3);
                                    }
                                    else{
                                        if(game === "Draw!") {
                                            let message = doc.querySelector(selector3)
                                            message.appendChild(doc.createTextNode("Draw!"));
                                            message.style.display = "flex";
                                            
                                            playerList.splice(0); index = 0; grid.pop(); checkingElement = 0;
                                            getComputerMove.pop(); getPlayers.splice(0);
        
                                            return playOrQuitButtons(doc, selector3, selector4, selector3)
                                        };
                                    };
    
                                };
                            };
                        };
                    });       
                };               
            });
        });
    };

   return {  displayQuestions, creatThreeGridBoard, creatFourGridBoard, player1, player2, playGame, gridDiv }

}) ();

GameInteraction.gridDiv(document, ".grid", "#grid3", "#Afterround");
GameInteraction.gridDiv(document, ".grid", "#grid4", "#Afterround");

GameInteraction.creatThreeGridBoard(document, "#grid3", "#DivBoard");
GameInteraction.creatFourGridBoard(document, "#grid4", "#DivBoard");

GameInteraction.displayQuestions(document, "#start", "#questions", "#grid3");
GameInteraction.displayQuestions(document, "#start", "#questions", "#grid4");

GameInteraction.player1(document, "#player1", ".playerName");
GameInteraction.player2(document, "#player2", ".playerName");
GameInteraction.playGame(document, "#start", ".num", "#Afterround", ".grid");