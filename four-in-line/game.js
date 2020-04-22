var board = document.querySelector("#board");
var rows = document.querySelectorAll(".row");
var squares = [].slice.call(rows).map((row) => row.querySelectorAll(".square"));
var currentPlayer = "red";

var boardState = [
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
];

squares
  .flatMap((row) => [...row])
  .forEach((square) => {
    square.addEventListener("click", handleClickSquare);
  });

function handleClickSquare(e) {
  var square = e.target;
  var row = square.parentElement;
  var column = [].slice.call(row.children).indexOf(square);
  putCoinOnBoard(column, boardState);
}

function putCoinOnBoard(column, boardState) {
  // loop over the respective column bottom up
  var newBoardState = [...boardState];
  for (let i = rows.length - 1; i > 0; i--) {
    if (newBoardState[i][column] === "") {
      newBoardState[i][column] = currentPlayer;
      currentPlayer = currentPlayer === "red" ? "blue" : "red";
      break;
    }
  }
  repaintBoard(newBoardState);
  determineWinner(newBoardState);
}

function determineWinner(boardState) {
  var isWinner =
    checkHorizontals(boardState) ||
    checkVerticals(boardState) ||
    checkDiagonals(boardState);
  if (isWinner) {
    var winner = currentPlayer === "red" ? "blue" : "red";
    alert(`${winner} won the game!`);
  }
}

function checkDiagonals(boardState) {
  for (let i = 0; i < boardState[i].length; i++) {
    for (let j = 0; j < boardState[i][j].length; j++) {
      const element = boardState[i][j];
    }
  }
}

function checkHorizontals(boardState) {
  for (let i = 0; i < boardState[i].length; i++) {
    for (let j = 0; j < boardState[i][j].length; j++) {
      const element = boardState[i][j];
    }
  }
}

function checkVerticals(boardState) {
  for (let i = 0; i < boardState[i].length; i++) {
    for (let j = 0; j < boardState[i][j].length; j++) {
      const element = boardState[i][j];
    }
  }
}

function repaintBoard(boardState) {
  for (let i = 0; i < boardState[i]; i++) {
    for (let j = 0; j < boardState[j]; j++) {
      if (squares[i][j].children.length === 0) {
        let coin = document.createElement("div");
        coin = addClass(Object.freeze(coin), boardState[i][j]);
        squares[i][j].appendChild(coin);
      }
    }
  }
}

function addClass(element, className) {
  var newElement = { ...element };
  if (!newElement.classList.contains(className)) {
    newElement.classList.add(className);
  }
  return newElement;
}
