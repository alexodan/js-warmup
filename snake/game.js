// 1 - make the board
const squares = 20; // 20 x 20
var board = document.querySelector('.board');

for (let i = 0; i < squares; i++) {
  for (let j = 0; j < squares; j++) {
    let square = document.createElement('div');
    square.classList.add('square');
    board.appendChild(square);
  }
}

// 2 - make the food appear
var index = Math.floor(Math.random() * board.children.length);
// var foodPosition = convertToCoordinates2D(index);
var food = board.children[index];
food.classList.add('food');

// 3 - make the snake appear
var directions = [ 'left', 'right', 'up', 'down' ];
var snakeDirection = 'right';
var snakePosition = [ [ 4, 4 ], [ 4, 5 ], [ 4, 6 ] ];
drawSnakeInBoard(board, snakePosition);

// 4 - make the snake move
// "pop" the tail and add a node to the "head" depending the "direction"

// 5 - logic when the snake eat the food
// check the dom elements of head and food to be equal

// ---------------------------------

function drawSnakeInBoard(board, coordinates) {
  const arrIndecies = coordinates.map(([ x, y ]) => convert2dTo1d(x, y, squares));
  arrIndecies.forEach((idx) => board.children[idx].classList.toggle('snake'));
}

function convert2dTo1d(x, y, length) {
  // TODO: fix logic
  return Number(`${x}.${y}`) * length;
}
