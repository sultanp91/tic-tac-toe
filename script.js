const gameBoardContainer = document.querySelector(".game-board-container");
const newGameButton = document.querySelector("#newgamebutton");
const player1button = document.querySelector("#player1button");
const player2button = document.querySelector("#player2button");
const player1display = document.querySelector("#player1display");
const player2display = document.querySelector("#player2display")
const p1input = document.querySelector("#player1input");
const p2input = document.querySelector("#player2input");


const gameBoard = {

    boardArray: ["", "", "", "", "", "", "", "", ""],

    newGameboard: function () {
        gameBoardContainer.textContent = "";
        for(let i = 0; i < 9; i++){
           let gridBox = document.createElement("div");
           gridBox.textContent = this.boardArray[i];
           gridBox.classList.add("grid-boxes");
           gridBox.setAttribute("id", i);
           gameBoardContainer.append(gridBox);
    
        }
    
    }

}

gameBoard.newGameboard();

let gameController = {

    gameOver: false,

    resetGame: function(){
        gameBoard.boardArray.splice(0, gameBoard.boardArray.length);
        for(let i = 0; i < 9; i++){
            gameBoard.boardArray.push("");
        }
        playerOne.turn = true;
        playerTwo.turn = false;
        gameBoard.newGameboard()
    }

}

let playerFactory = function (name, choice, turn){

    const gameWon = function () {
        gameController.gameOver = true;
        alert(`${this.name} has won`);
    };
   
    const checkWin = function () {
        let boardArray = gameBoard.boardArray;
        let playerChoice = this.choice;
        if(boardArray[0] === playerChoice && boardArray[1] === playerChoice && boardArray[2] === playerChoice){
            this.gameWon();
        } else if(boardArray[3] === playerChoice && boardArray[4] === playerChoice && boardArray[5] === playerChoice){
            this.gameWon();
        } else if(boardArray[6] === playerChoice && boardArray[7] === playerChoice && boardArray[8] === playerChoice){
            this.gameWon();
        } else if(boardArray[0] === playerChoice && boardArray[3] === playerChoice && boardArray[6] === playerChoice){
            this.gameWon();
        } else if(boardArray[3] === playerChoice && boardArray[4] === playerChoice && boardArray[5] === playerChoice){
            this.gameWon();
        } else if(boardArray[1] === playerChoice && boardArray[4] === playerChoice && boardArray[7] === playerChoice){
            this.gameWon();
        } else if(boardArray[2] === playerChoice && boardArray[5] === playerChoice && boardArray[8] === playerChoice){
            this.gameWon();
        } else if(boardArray[0] === playerChoice && boardArray[4] === playerChoice && boardArray[8] === playerChoice){
            this.gameWon();
        } else if(boardArray[2] === playerChoice && boardArray[4] === playerChoice && boardArray[6] === playerChoice){
            this.gameWon();
        }
    };

    return { name, choice, turn, gameWon, checkWin};

}

let playerOne = playerFactory("Player 1", "X", true);
let playerTwo = playerFactory("Player 2", "O", false)


gameBoardContainer.addEventListener("click", (e) => {
    let boardArray = gameBoard.boardArray;
    let arrayIndex = e.target.id;

    if(boardArray[arrayIndex] !== "O" && boardArray[arrayIndex] !== "X"){
        if(playerOne.turn === true && gameController.gameOver === false){
            boardArray[arrayIndex] = playerOne.choice;
            playerOne.turn = false;
            playerTwo.turn = true;
            gameBoard.newGameboard();
            playerOne.checkWin()
        } else if(playerTwo.turn === true && gameController.gameOver === false){
            boardArray[arrayIndex] = playerTwo.choice;
            playerOne.turn = true;
            playerTwo.turn = false;
            gameBoard.newGameboard();
            playerTwo.checkWin()
        }

    }

})

newGameButton.addEventListener("click", gameController.resetGame);

player1button.addEventListener("click", function(e){
    e.preventDefault();
    playerOne.name = p1input.value;
    player1display.textContent = `${playerOne.name}`;
    p1input.value = "";
})


player2button.addEventListener("click", function(e){
    e.preventDefault();
    playerTwo.name = p2input.value;
    player2display.textContent = `${playerTwo.name}`;
    p2input.value = "";
})

