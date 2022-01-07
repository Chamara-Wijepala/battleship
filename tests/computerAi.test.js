import { findSuitableStart, checkCollisions } from '../src/modules/computerAi';
import Player from '../src/modules/classes/Player';

const newPlayer = new Player('playerName');

describe('Tests for carrier ship', () => {
  const ship = newPlayer.ships.carrier;

  test('Expect findSuitableStart with a horizontal ship to not return a negative integer', () => {
    expect(findSuitableStart(newPlayer, ship, 'Horizontal')).not.toBeLessThan(0);
  });

  test('Expect findSuitableStart with a horizontal ship to not return an integer greater than 94', () => {
    expect(findSuitableStart(newPlayer, ship, 'Horizontal')).not.toBeGreaterThan(94);
  });

  test('Expect findSuitableStart with a vertical ship to not return a negative integer', () => {
    expect(findSuitableStart(newPlayer, ship, 'Vertical')).not.toBeLessThan(0);
  });

  test('Expect findSuitableStart with a vertical ship to not return an integer greater than 59', () => {
    expect(findSuitableStart(newPlayer, ship, 'Vertical')).not.toBeGreaterThan(59);
  });

  test('Expect checkCollisions to not return an array containing 9', () => {
    expect(checkCollisions(0, ship)).not.toContain(9);
  });

  test('Expect checkCollisions to return an array containing 19', () => {
    expect(checkCollisions(15, ship)).toContain(19);
  });
});

describe('Tests for submarine', () => {
  const ship = newPlayer.ships.submarine;

  test('Expect findSuitableStart with a horizontal ship to not return a negative integer', () => {
    expect(findSuitableStart(newPlayer, ship, 'Horizontal')).not.toBeLessThan(0);
  });

  test('Expect findSuitableStart with a horizontal ship to not return an integer greater than 96', () => {
    expect(findSuitableStart(newPlayer, ship, 'Horizontal')).not.toBeGreaterThan(96);
  });

  test('Expect findSuitableStart with a vertical ship to not return a negative integer', () => {
    expect(findSuitableStart(newPlayer, ship, 'Vertical')).not.toBeLessThan(0);
  });

  test('Expect findSuitableStart with a vertical ship to not return an integer greater than 79', () => {
    expect(findSuitableStart(newPlayer, ship, 'Vertical')).not.toBeGreaterThan(79);
  });
});
