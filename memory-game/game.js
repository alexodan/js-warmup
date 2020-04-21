var images = [
  { id: 1, src: "imgs/1.png" },
  { id: 1, src: "imgs/1.png" },
  { id: 2, src: "imgs/2.png" },
  { id: 2, src: "imgs/2.png" },
  { id: 3, src: "imgs/3.png" },
  { id: 3, src: "imgs/3.png" },
  { id: 4, src: "imgs/4.png" },
  { id: 4, src: "imgs/4.png" },
  { id: 5, src: "imgs/5.png" },
  { id: 5, src: "imgs/5.png" },
];

var winCards = [];
var selectedCards = [];
var boardDOM = document.querySelector(".board");
var cards = [...images].sort(() => 0.5 - Math.random());
cards.map((card) => boardDOM.appendChild(buildCard(card.id)));

function handleClickSquare(e) {
  var card = e.target;
  card.setAttribute("src", `imgs/${card.dataset.id}.png`);
  selectedCards = [...selectedCards, card];
  setTimeout(() => {
    if (selectedCards.length > 1) {
      if (selectedCards[0].dataset.id === selectedCards[1].dataset.id) {
        winCards.push(card.dataset.id);
        increaseScore();
      } else {
        selectedCards[0].setAttribute("src", `imgs/blank.png`);
        selectedCards[1].setAttribute("src", `imgs/blank.png`);
      }
      selectedCards = [];
    }
  }, 700);
}

function increaseScore() {
  var score = document.querySelector(".score");
  score.textContent = parseInt(score.textContent) + 10;
}

function buildCard(id) {
  var image = document.createElement("img");
  image.setAttribute("class", "image");
  image.setAttribute("src", "imgs/blank.png");
  image.setAttribute("data-id", id);
  image.addEventListener("click", handleClickSquare);
  return image;
}
