import Gameboard from '../src/modules/Gameboard';

const newBoard = new Gameboard();

describe('Ship mock with a length of 3', () => {
  const shipMock = { length: 3 };

  test('Expect hasShip on ship location to be true', () => {
    newBoard.placeShip([0, 1, 2], shipMock);

    expect(newBoard.board[0]).toMatchObject({ hasShip: true });
    expect(newBoard.board[1]).toMatchObject({ hasShip: true });
    expect(newBoard.board[2]).toMatchObject({ hasShip: true });
    expect(newBoard.board[3]).toMatchObject({ hasShip: false });
  });
});
