/* eslint-disable no-param-reassign */
export default class Gameboard {
  constructor() {
    this.board = [];
    if (this.board.length !== 100) {
      this.createBoard();
    }
  }

  createBoard() {
    for (let i = 0; i < 100; i += 1) {
      this.board.push({ hasShip: false, isHit: false });
    }
  }

  placeShip(coords, ship, direction) {
    ship.start = coords;
    ship.direction = direction;
    for (let i = 0; i < ship.length; i += 1) {
      if (direction === 'Horizontal') {
        this.board[coords + i].hasShip = true;
        this.board[coords + i].shipObject = ship;
      } else {
        this.board[coords + i * 10].hasShip = true;
        this.board[coords + i * 10].shipObject = ship;
      }
    }
  }

  removeShip(coords, ship, direction) {
    for (let i = 0; i < ship.length; i += 1) {
      if (direction === 'Horizontal') {
        this.board[coords + i].hasShip = false;
        this.board[coords + i].shipObject = undefined;
      } else {
        this.board[coords + i * 10].hasShip = true;
        this.board[coords + i * 10].shipObject = undefined;
      }
    }
  }

  receiveAttack(coords, ship) {
    this.board[coords].isHit = true;
    if (this.board[coords].hasShip === true) {
      ship.hit(coords);
    }
  }

  allShipsSunk() {
    const shipLocations = this.board.filter((square) => square.hasShip === true);
    return shipLocations.every((square) => square.isHit === true);
  }
}
