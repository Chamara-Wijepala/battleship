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
}
