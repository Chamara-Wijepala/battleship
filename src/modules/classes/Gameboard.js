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

  placeShip(coords, ship) {
    for (let i = 0; i < ship.length; i += 1) {
      this.board[coords + i].hasShip = true;
      this.board[coords + i].shipObject = ship;
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
    shipLocations.every((square) => square.isHit === true);
  }
}
