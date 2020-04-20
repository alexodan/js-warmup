var winCards = [];
var selectedCards = [];

var images = [
	{ id: 1, src: 'imgs/1.png' },
	{ id: 1, src: 'imgs/1.png' },
	{ id: 2, src: 'imgs/2.png' },
	{ id: 2, src: 'imgs/2.png' },
	{ id: 3, src: 'imgs/3.png' },
	{ id: 3, src: 'imgs/3.png' },
	{ id: 4, src: 'imgs/4.png' },
	{ id: 4, src: 'imgs/4.png' },
	{ id: 5, src: 'imgs/5.png' },
	{ id: 5, src: 'imgs/5.png' }
];

var board = [ ...images ].sort(() => 0.5 - Math.random());
var boardSquares = board.map((square) => drawBoard(square.id));

function handleClickSquare(evt) {
	var card = evt.target;
	card.setAttribute('src', `imgs/${card.dataset.id}.png`);
	selectedCards.push(card);
	setTimeout(() => {
		if (selectedCards.length > 1) {
			if (selectedCards[0].dataset.id === selectedCards[1].dataset.id) {
				winCards.push(card.dataset.id);
				selectedCards = [];
				console.log('IF');
			} else {
				console.log('else');
				selectedCards[0].setAttribute('src', `imgs/blank.png`);
				selectedCards[1].setAttribute('src', `imgs/blank.png`);
				selectedCards = [];
			}
		}
	}, 700);
}

function drawBoard(id) {
	var image = document.createElement('img');
	image.setAttribute('class', 'image');
	image.setAttribute('src', 'imgs/blank.png');
	image.setAttribute('data-id', id);
	image.addEventListener('click', handleClickSquare);

	var boardDOM = document.querySelector('.board');
	boardDOM.appendChild(image);
	return image;
}
