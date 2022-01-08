import './index.css';
import Player from './modules/classes/Player';
import { renderBoard, clearBoard } from './modules/renderDom';
import { placeShips } from './modules/placeShips';
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

// Place computer ships randomly
const computerShips = Object.entries(computerPlayer.ships);
computerShips.forEach((ship) => {
  placeShips(computerPlayer, ship[1]);
});

// Place player ships randomly
const playerShips = Object.entries(humanPlayer.ships);
playerShips.forEach((ship) => {
  placeShips(humanPlayer, ship[1]);
});

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
  }
}

function computerTurn() {
  computerMove(humanPlayer);
  switchPlayer();
  updateGame(humanPlayer, playerBoard);
}

// Run receiveAttack on clicked square if currentPlayer is humanPlayer,
// then switch player and call computerTurn()
computerBoard.addEventListener('click', (e) => {
  const coords = e.target.dataset.id;
  if (currentPlayer === humanPlayer && computerPlayer.gameBoard.board[coords].isHit === false) {
    const ship = computerPlayer.gameBoard.board[coords].shipObject;
    computerPlayer.gameBoard.receiveAttack(coords, ship);
    switchPlayer();
    updateGame(computerPlayer, computerBoard);
    setTimeout(computerTurn, 300);
  }
});

startGame();
