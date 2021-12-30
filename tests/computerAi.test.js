import findSuitableLocation from '../src/modules/computerAi';

const gameBoardMock = {
  board: [
    { isHit: true },
    { isHit: false },
    { isHit: false },
    { isHit: true },
    { isHit: false },
  ],
};

test('Expect findSuitableCoords to not return 0 or 3', () => {
  expect(findSuitableLocation(gameBoardMock)).not.toBe(0);
  expect(findSuitableLocation(gameBoardMock)).not.toBe(3);
});
