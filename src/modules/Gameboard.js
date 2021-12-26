export default class Gameboard {
  constructor() {
    this.board = [];
    if (this.board.length !== 100) {
      this.createGrid();
    }
  }

  createGrid() {
    for (let i = 0; i < 100; i += 1) {
      this.board.push({ hasShip: false, isHit: false });
    }
  }

  placeShip(coords, ship) {
    for (let i = 0; i < ship.length; i += 1) {
      this.board[coords[i]].hasShip = true;
    }
  }
}
