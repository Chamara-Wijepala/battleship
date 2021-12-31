import Gameboard from './Gameboard';

export default class Player {
  constructor(name) {
    this.name = name;
    this.gameBoard = new Gameboard();
  }

  attack(coords, gameBoard, ship) {
    gameBoard.receiveAttack(coords, ship);
  }
}
