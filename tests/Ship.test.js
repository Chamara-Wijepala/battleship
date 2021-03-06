import Ship from '../src/modules/classes/Ship';

describe('Ship with a length of 3', () => {
  const ship = new Ship(3);

  test('Expect ship.length to be 3', () => {
    expect(ship).toMatchObject({ length: 3 });
  });

  ship.hit(1);
  ship.hit(2);
  ship.hit(3);

  test('Expect ship.hits to contain 3', () => {
    expect(ship.hits).toContain(3);
  });

  test('Expect ship.isSunk() to return true', () => {
    expect(ship.isSunk()).toBe(true);
  });
});

describe('Ship with a length of 5', () => {
  const ship = new Ship(5);

  test('Expect ship.length to be 5', () => {
    expect(ship).toMatchObject({ length: 5 });
  });

  ship.hit('hello');

  test('Expect ship.hits to be empty array when passed a string', () => {
    expect(ship).toMatchObject({ hits: [] });
  });

  ship.hit(2.5);

  test('Expect ship.hits to be empty array when passed a floating number', () => {
    expect(ship).toMatchObject({ hits: [] });
  });

  test('Expect ship.isSunk() to return false', () => {
    expect(ship.isSunk()).toBe(false);
  });
});
