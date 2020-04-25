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
  console.log("target:", e.target);
  var square = e.target;
  var row = square.parentElement;
  console.log("row", row);
  var column = [].slice.call(row.children).indexOf(square);
  console.log("col", column);
  boardState = putCoinOnBoard(column, Object.freeze(boardState));
}

function putCoinOnBoard(column, boardState) {
  // loop over the respective column bottom up
  var newBoardState = [...boardState];
  for (let i = rows.length - 1; i >= 0; i--) {
    if (newBoardState[i][column] === "") {
      newBoardState[i][column] = currentPlayer;
      currentPlayer = currentPlayer === "red" ? "blue" : "red";
      break;
    }
  }
  repaintBoard(Object.freeze(newBoardState));
  determineWinner(Object.freeze(newBoardState));
  return newBoardState;
}

function determineWinner(boardState) {
  var isWinner =
    checkDiagonals(Object.freeze(boardState)) ||
    checkHorizontals(Object.freeze(boardState)) ||
    checkVerticals(Object.freeze(boardState));
  if (isWinner) {
    var winner = currentPlayer === "red" ? "blue" : "red";
    alert(`${winner} won the game!`);
  }
}

function hasFourInLine(arr) {
  return (
    arr.join("_").includes("blue_blue_blue_blue") ||
    arr.join("_").includes("red_red_red_red")
  );
}

function checkDiagonals(boardState) {
  // la idea es iterar sobre i (pero i < columnas) y recorrer
  // en diagonal hacia la izquierda y hacia abajo hasta llegar
  // la mitad del tablero, luego hacer lo mismo pero con la
  // esquina inferior derecha
}

function checkHorizontals(boardState) {
  return boardState.find(hasFourInLine);
}

function checkVerticals(boardState) {
  var columns = [];
  for (let i = 0; i < boardState[0].length - 1; i++) {
    for (let j = 0; j < boardState.length; j++) {
      columns.push(boardState[j][i]);
    }
  }
  return hasFourInLine(columns);
}

function repaintBoard(boardState) {
  for (let i = 0; i < boardState.length; i++) {
    for (let j = 0; j < boardState[i].length; j++) {
      if (boardState[i][j] !== "" && squares[i][j].children.length === 0) {
        let coin = document.createElement("div");
        addClass(coin, "coin");
        addClass(coin, boardState[i][j]);
        coin.addEventListener("click", () => {});
        squares[i][j].appendChild(coin);
      }
    }
  }
}

function addClass(element, className) {
  if (!element.classList.contains(className)) {
    element.classList.add(className);
  }
}
