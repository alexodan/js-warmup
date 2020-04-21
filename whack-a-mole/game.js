var timeLeft = document.getElementById("time-left");
var score = document.getElementById("score");

var intervalId = setInterval(() => {
  var currentTime = parseInt(timeLeft.textContent);
  if (currentTime > 0) {
    timeLeft.textContent = parseInt(currentTime) - 1;
  } else {
    showGameOver();
    clearInterval(intervalId);
  }
}, 1000);

var squares = document.querySelector(".board").children;
[].slice
  .call(squares)
  .forEach((square) => square.addEventListener("click", handleSquareClick));

var img = document.createElement("img");
img.setAttribute("src", "gopher1.png");
// start();

function start() {
  setInterval(() => {
    var randomSquare = [].slice.call(squares)[
      Math.floor(Math.random() * squares.length)
    ];
    randomSquare.appendChild(img);
    setTimeout(() => {
      randomSquare.removeChild(img);
    }, 750);
  }, 800);
}

function showGameOver() {
  alert(`Game Over! Your score is ${score.textContent}`);
}

function handleSquareClick(e) {
  console.log("Clicked", e.target.id);
}
