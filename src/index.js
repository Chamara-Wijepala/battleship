import './index.css';
import Player from './modules/classes/Player';
import {
  renderBoard,
  clearBoard,
} from './modules/renderDom';

const playerBoard = document.getElementById('player-board');
const computerBoard = document.getElementById('computer-board');

const humanPlayer = new Player('Human');
const computerPlayer = new Player('Computer');

function startGame() {
  renderBoard(humanPlayer, playerBoard);
  renderBoard(computerPlayer, computerBoard);
}

function updateGame(player, board) {
  clearBoard(board);
  renderBoard(player, board);
}

computerPlayer.gameBoard.placeShip(0, computerPlayer.ships.carrier);

startGame();
updateGame(humanPlayer, playerBoard);
