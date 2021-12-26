class Ship {
  constructor(length) {
    this.length = length;
    this.hits = [];
  }

  hit(coords) {
    if (!Number.isInteger(coords)) {
      return;
    }
    this.hits.push(coords);
  }

  isSunk() {
    return this.hits.length === this.length;
  }
}

export default Ship;
