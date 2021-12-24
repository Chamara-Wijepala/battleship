class Ship {
  constructor(length) {
    this.length = length;
    this.hits = [];
  }

  hit(number) {
    if (!Number.isInteger(number)) {
      return;
    }
    this.hits.push(number);
  }

  isSunk() {
    return this.hits.length === this.length;
  }
}

export default Ship;
