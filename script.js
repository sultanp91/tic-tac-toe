const gameBoardContainer = document.querySelector(".game-board-container");

let boardArray = ["", "", "", "", "", "", "", "", ""]

let newGameboard = function () {
    gameBoardContainer.textContent = "";
    for(let i = 0; i < 9; i++){
       let gridBox = document.createElement("div");
       gridBox.textContent = boardArray[i];
       gridBox.classList.add("grid-boxes");
       gridBox.setAttribute("id", i);
       gameBoardContainer.append(gridBox);

    }

}



newGameboard();

let playerFactory = function (name, choice, turn){

    const gameWon = function () {
        gameController.gameOver = true;
        alert(`${this.name} has won`);
    };
   
    const checkWin = function () {

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

let gameController = {

    gameOver: false,

    resetGame: function(){
        boardArray.splice(0, boardArray.length);
        for(let i = 0; i < 9; i++){
            boardArray.push("");
        }
        playerOne.turn = true;
        playerTwo.turn = false;
        newGameboard()
    }

}

gameBoardContainer.addEventListener("click", (e) => {
    
    let arrayIndex = e.target.id;

    if(boardArray[arrayIndex] !== "O" && boardArray[arrayIndex] !== "X"){
        if(playerOne.turn === true && gameController.gameOver === false){
            boardArray[arrayIndex] = playerOne.choice;
            playerOne.turn = false;
            playerTwo.turn = true;
            newGameboard();
            playerOne.checkWin()
        } else if(playerTwo.turn === true && gameController.gameOver === false){
            boardArray[arrayIndex] = playerTwo.choice;
            playerOne.turn = true;
            playerTwo.turn = false;
            newGameboard();
            playerTwo.checkWin()
        }

    }

})

