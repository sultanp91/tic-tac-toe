const gameBoardContainer = document.querySelector(".game-board-container");

let boardArray = ["x", "o", "x", "o", "x", "o", "x", "o", "x"]

let newGameboard = function () {
    for(let i = 0; i < 9; i++){
       let gridBox = document.createElement("div");
       gridBox.textContent = boardArray[i];
       gridBox.classList.add("grid-boxes");
       gridBox.setAttribute("id", i);
       gameBoardContainer.append(gridBox);

    }

}

newGameboard();