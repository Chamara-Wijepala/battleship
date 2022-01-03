import './index.css';
import Player from './modules/classes/Player';
import {
  renderBoard,
  clearBoard,
} from './modules/renderDom';

const playerBoard = document.getElementById('player-board');
const computerBoard = document.getElementById('computer-board');
const overlay = document.getElementById('overlay');
const overlayButton = document.getElementById('overlay-button');

const humanPlayer = new Player('Human');
const computerPlayer = new Player('Computer');

function startGame() {
  renderBoard(humanPlayer, playerBoard);
  renderBoard(computerPlayer, computerBoard);
}

function gameOver() {
  overlay.style.display = 'block';
}

function updateGame(player, board) {
  clearBoard(board);
  renderBoard(player, board);
  if (player.gameBoard.allShipsSunk()) {
    gameOver();
  }
}

// Run receiveAttack on clicked square
computerBoard.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'div') {
    const coords = e.target.dataset.id;
    const ship = computerPlayer.gameBoard.board[coords].shipObject;
    computerPlayer.gameBoard.receiveAttack(coords, ship);
    updateGame(computerPlayer, computerBoard);
  }
});

overlayButton.addEventListener('click', () => {
  window.location.reload();
});

computerPlayer.gameBoard.placeShip(0, computerPlayer.ships.carrier);

startGame();
