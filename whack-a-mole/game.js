var timeLeft = document.getElementById("time-left");
var score = document.getElementById("score");

var squares = document.querySelector(".board").children;
var gameInterval = start();
var timeLeftInterval = setInterval(() => {
  var currentTime = parseInt(timeLeft.textContent);
  if (currentTime > 0) {
    timeLeft.textContent = parseInt(currentTime) - 1;
  } else {
    showGameOver();
    clearInterval(timeLeftInterval);
    clearInterval(gameInterval);
  }
}, 1000);

function start() {
  var gameInterval = setInterval(() => {
    var randomSquare = squares[Math.floor(Math.random() * squares.length)];
    var img = document.createElement("img");
    img.setAttribute("src", "gopher1.png");
    img.addEventListener("click", handleSquareClick);
    randomSquare.appendChild(img);
    setTimeout(() => {
      randomSquare.removeChild(img);
    }, 750);
  }, 800);
  return gameInterval;
}

function showGameOver() {
  alert(`Game Over! Your score is ${score.textContent}`);
}

function handleSquareClick(e) {
  score.textContent = parseInt(score.textContent) + 10;
  console.log("Clicked", e.target.id);
}
