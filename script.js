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

let playerOne = {
    choice: "X",
    turn: true,
    checkWin: function () {
        let playerChoice = this.choice;
        if(boardArray[0] === playerChoice && boardArray[1] === playerChoice && boardArray[2] === playerChoice){
            alert("working")
        } else if(boardArray[3] === playerChoice && boardArray[4] === playerChoice && boardArray[5] === playerChoice){
            alert("working")
        } else if(boardArray[6] === playerChoice && boardArray[7] === playerChoice && boardArray[8] === playerChoice){
            alert("working")
        } else if(boardArray[0] === playerChoice && boardArray[3] === playerChoice && boardArray[6] === playerChoice){
            alert("working")
        } else if(boardArray[3] === playerChoice && boardArray[4] === playerChoice && boardArray[5] === playerChoice){
            alert("working")
        } else if(boardArray[1] === playerChoice && boardArray[4] === playerChoice && boardArray[7] === playerChoice){
            alert("working")
        } else if(boardArray[2] === playerChoice && boardArray[5] === playerChoice && boardArray[8] === playerChoice){
            alert("working")
        } else if(boardArray[0] === playerChoice && boardArray[4] === playerChoice && boardArray[8] === playerChoice){
            alert("working")
        } else if(boardArray[2] === playerChoice && boardArray[4] === playerChoice && boardArray[6] === playerChoice){
            alert("working")
        }
    }
}

let playerTwo = {
    choice: "O",
    turn: false,
    checkWin: function () {
        let playerChoice = this.choice;
        if(boardArray[0] === playerChoice && boardArray[1] === playerChoice && boardArray[2] === playerChoice){
            alert("working")
        } else if(boardArray[3] === playerChoice && boardArray[4] === playerChoice && boardArray[5] === playerChoice){
            alert("working")
        } else if(boardArray[6] === playerChoice && boardArray[7] === playerChoice && boardArray[8] === playerChoice){
            alert("working")
        } else if(boardArray[0] === playerChoice && boardArray[3] === playerChoice && boardArray[6] === playerChoice){
            alert("working")
        } else if(boardArray[3] === playerChoice && boardArray[4] === playerChoice && boardArray[5] === playerChoice){
            alert("working")
        } else if(boardArray[1] === playerChoice && boardArray[4] === playerChoice && boardArray[7] === playerChoice){
            alert("working")
        } else if(boardArray[2] === playerChoice && boardArray[5] === playerChoice && boardArray[8] === playerChoice){
            alert("working")
        } else if(boardArray[0] === playerChoice && boardArray[4] === playerChoice && boardArray[8] === playerChoice){
            alert("working")
        } else if(boardArray[2] === playerChoice && boardArray[4] === playerChoice && boardArray[6] === playerChoice){
            alert("working")
        }
    }
}

let gameController = {
    playRound: function () {

    }
}

gameBoardContainer.addEventListener("click", (e) => {
    
    let arrayIndex = e.target.id;

    if(boardArray[arrayIndex] !== "O" && boardArray[arrayIndex] !== "X"){
        if(playerOne.turn === true){
            boardArray[arrayIndex] = playerOne.choice;
            playerOne.turn = false;
            playerTwo.turn = true;
            newGameboard();
            playerOne.checkWin()
        } else if(playerTwo.turn === true){
            boardArray[arrayIndex] = playerTwo.choice;
            playerOne.turn = true;
            playerTwo.turn = false;
            newGameboard();
            playerTwo.checkWin()
        }

    }

})

