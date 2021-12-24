import createShip from '../src/modules/ship-factory';

describe('Ship with a length of 3', () => {
  const ship = createShip(3);

  test('Expect ship.length to be 3', () => {
    expect(ship).toMatchObject({ length: 3 });
  });

  ship.hit(3);

  test('Expect shit.hits to be [3]', () => {
    expect(ship).toMatchObject({ hits: [3] });
  });
});

describe('Ship with a length of 5', () => {
  const ship = createShip(5);

  test('Expect ship.length to be 5', () => {
    expect(ship).toMatchObject({ length: 5 });
  });

  ship.hit();

  test('Expect ship.hits to be empty array', () => {
    expect(ship).toMatchObject({ hits: [] });
  });
});
