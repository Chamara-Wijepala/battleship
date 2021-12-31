import './index.css';
import Player from './modules/classes/Player';
import renderBoard from './modules/renderDom';

const humanPlayer = new Player('Human');
const computerPlayer = new Player('Computer');

const playerBoard = document.getElementById('player-board');
const computerBoard = document.getElementById('computer-board');

renderBoard(humanPlayer, playerBoard);
renderBoard(computerPlayer, computerBoard);
