class Ship {
  constructor(length) {
    this.length = length;
  }
}

export default function createShip(length) {
  const ship = new Ship(length);
  return ship;
}
