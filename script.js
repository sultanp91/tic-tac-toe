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
    choice: "x",
    turn: true,
}

let playerTwo = {
    choice: "o",
    turn: false,
}

let gameController = {
    playRound: function () {

    }
}

gameBoardContainer.addEventListener("click", (e) => {
    
    let arrayIndex = e.target.id;

    if(boardArray[arrayIndex] !== "o" && boardArray[arrayIndex] !== "x"){
        if(playerOne.turn === true){
            boardArray[arrayIndex] = playerOne.choice;
            playerOne.turn = false;
            playerTwo.turn = true;
            newGameboard();
        } else if(playerTwo.turn === true){
            boardArray[arrayIndex] = playerTwo.choice;
            playerOne.turn = true;
            playerTwo.turn = false;
            newGameboard();
        }

    }

})