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
}

export default function createShip(length) {
  const ship = new Ship(length);
  return ship;
}
