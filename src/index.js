/* eslint-disable no-param-reassign */
import './index.css';
import Player from './modules/classes/Player';
import { renderBoard, clearBoard } from './modules/renderDom';
import { placeShips, checkCollisions } from './modules/placeShips';
import computerMove from './modules/computerAi';
import gameOver from './modules/gameOver';

const playerBoard = document.getElementById('player-board');
const computerBoard = document.getElementById('computer-board');
const rotateButton = document.getElementById('rotate-button');

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
}

function checkIfGameOver(player) {
  if (player.gameBoard.allShipsSunk()) {
    gameOver();
  }
}

function computerTurn() {
  computerMove(humanPlayer);
  switchPlayer();
  updateGame(humanPlayer, playerBoard);
  checkIfGameOver(humanPlayer);
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
    checkIfGameOver(computerPlayer);
    setTimeout(computerTurn, 300);
  }
});

const playerShips = Object.entries(humanPlayer.ships);
let shipNumber = 0;

function getCurrentShip() {
  const currentShip = playerShips[shipNumber][1];
  return currentShip;
}

let currentDirection = 'Horizontal';

// This function needs to return corrent ship and direction
function getPlayerShipData(e) {
  const coords = Number(e.target.dataset.id);
  const currentShip = getCurrentShip();
  const direction = currentDirection;
  const collides = checkCollisions(coords, currentShip, humanPlayer, direction);
  return {
    coords,
    currentShip,
    direction,
    collides,
  };
}

// Displays current ship on playerBoard when hovering over it
playerBoard.addEventListener('mousemove', (e) => {
  const shipData = getPlayerShipData(e);
  humanPlayer.gameBoard.shipHover(
    shipData.coords,
    shipData.currentShip,
    shipData.direction,
    shipData.collides,
  );
  updateGame(humanPlayer, playerBoard);
});

// Places a ship on playerBoard when you click on a square
playerBoard.addEventListener('click', (e) => {
  const shipData = getPlayerShipData(e);
  if (!shipData.collides) {
    humanPlayer.gameBoard.placeShip(
      shipData.coords,
      shipData.currentShip,
      shipData.direction,
    );
    shipNumber += 1;
  }
  updateGame(humanPlayer, playerBoard);
});

rotateButton.addEventListener('click', () => {
  if (currentDirection === 'Horizontal') {
    currentDirection = 'Vertical';
  } else {
    currentDirection = 'Horizontal';
  }
});

startGame();
