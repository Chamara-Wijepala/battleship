import './index.css';
import Player from './modules/classes/Player';
import {
  renderBoard,
  clearBoard,
} from './modules/renderDom';
import computerMove from './modules/computerAi';
import gameOver from './modules/gameOver';

const playerBoard = document.getElementById('player-board');
const computerBoard = document.getElementById('computer-board');

const humanPlayer = new Player('Human');
const computerPlayer = new Player('Computer');

function startGame() {
  renderBoard(humanPlayer, playerBoard);
  renderBoard(computerPlayer, computerBoard);
}

let currentPlayer = humanPlayer;

function switchPlayer() {
  if (currentPlayer === humanPlayer) {
    currentPlayer = computerPlayer;
  } else {
    currentPlayer = humanPlayer;
  }
}

function updateGame(player, board) {
  clearBoard(board);
  renderBoard(player, board);
  if (player.gameBoard.allShipsSunk()) {
    gameOver();
  } else {
    switchPlayer();
  }
}

// Run receiveAttack on clicked square if currentPlayer is humanPlayer
computerBoard.addEventListener('click', (e) => {
  if (currentPlayer === humanPlayer) {
    const coords = e.target.dataset.id;
    const ship = computerPlayer.gameBoard.board[coords].shipObject;
    computerPlayer.gameBoard.receiveAttack(coords, ship);
    updateGame(computerPlayer, computerBoard);
  }
});

computerPlayer.gameBoard.placeShip(0, computerPlayer.ships.carrier);
humanPlayer.gameBoard.placeShip(0, humanPlayer.ships.carrier);

startGame();
