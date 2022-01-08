import Gameboard from '../src/modules/classes/Gameboard';

const newBoard = new Gameboard();
const shipMock = {
  length: 3,
};

describe('Test Gameboard.placeShip', () => {
  beforeEach(() => {
    newBoard.placeShip(0, shipMock, 'Horizontal');
  });

  afterEach(() => {
    newBoard.removeShip(0, shipMock, 'Horizontal');
  });

  test('Expect hasShip on ship location to be true', () => {
    expect(newBoard.board[0]).toMatchObject({ hasShip: true });
    expect(newBoard.board[1]).toMatchObject({ hasShip: true });
    expect(newBoard.board[2]).toMatchObject({ hasShip: true });
    expect(newBoard.board[3]).toMatchObject({ hasShip: false });
  });
});

describe('Test Gameboard.removeShip', () => {
  beforeEach(() => {
    newBoard.removeShip(0, shipMock, 'Horizontal');
  });

  afterEach(() => {
    newBoard.placeShip(0, shipMock, 'Horizontal');
  });

  test('Expect hasShip on all locations to be false', () => {
    expect(newBoard.board[0]).toMatchObject({ hasShip: false });
    expect(newBoard.board[1]).toMatchObject({ hasShip: false });
    expect(newBoard.board[2]).toMatchObject({ hasShip: false });
    expect(newBoard.board[3]).toMatchObject({ hasShip: false });
  });
});
