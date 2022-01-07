import { findSuitableStart } from '../src/modules/computerAi';
import Player from '../src/modules/classes/Player';

const newPlayer = new Player('playerName');

describe('Tests for carrier ship', () => {
  const ship = newPlayer.ships.carrier;

  test('Expect findSuitableStart to not return a negative integer', () => {
    expect(findSuitableStart(newPlayer, ship)).not.toBeLessThan(0);
  });

  test('Expect findSuitableStart to not return an integer greater than 94', () => {
    expect(findSuitableStart(newPlayer, ship)).not.toBeGreaterThan(94);
  });
});

describe('Tests for submarine', () => {
  const ship = newPlayer.ships.submarine;

  test('Expect findSuitableStart to not return a negative integer', () => {
    expect(findSuitableStart(newPlayer, ship)).not.toBeLessThan(0);
  });

  test('Expect findSuitableStart to not return an integer greater than 96', () => {
    expect(findSuitableStart(newPlayer, ship)).not.toBeGreaterThan(96);
  });
});
