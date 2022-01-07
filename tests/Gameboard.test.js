import Gameboard from '../src/modules/classes/Gameboard';

const newBoard = new Gameboard();

describe('Ship mock with a length of 3', () => {
  const shipMock = {
    length: 3,
  };
  newBoard.placeShip(0, shipMock, 'Horizontal');

  test('Expect hasShip on ship location to be true', () => {
    expect(newBoard.board[0]).toMatchObject({ hasShip: true });
    expect(newBoard.board[1]).toMatchObject({ hasShip: true });
    expect(newBoard.board[2]).toMatchObject({ hasShip: true });
    expect(newBoard.board[3]).toMatchObject({ hasShip: false });
  });
});
