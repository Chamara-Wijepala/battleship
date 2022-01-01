import Gameboard from './Gameboard';
import Ship from './Ship';

export default class Player {
  constructor(name) {
    this.name = name;
    this.gameBoard = new Gameboard();
    this.ships = {
      carrier: new Ship(5),
      battleship: new Ship(4),
      cruiser: new Ship(3),
      submarine: new Ship(3),
      destroyer: new Ship(2),
    };
  }
}
