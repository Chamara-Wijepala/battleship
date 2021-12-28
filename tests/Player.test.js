import Player from '../src/modules/Player';

const playerOne = new Player('One');

const shipMock = {
  length: 3,
  hits: [],

  hit(coords) {
    this.hits.push(coords);
    return this.hits;
  },
};

const mockGameBoard = {
  board: [{ hasShip: true, isHit: false }],

  receiveAttack(coords, ship) {
    this.board[coords].isHit = true;
    if (this.board[coords].hasShip === true) {
      return ship.hit(coords);
    }
  },
};

test('', () => {
  expect(playerOne.attack(0, mockGameBoard, shipMock)).toBe('attack');
});
