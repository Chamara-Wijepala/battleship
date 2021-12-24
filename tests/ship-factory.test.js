import createShip from '../src/modules/ship-factory';

test('Expect ship.length to be 3', () => {
  expect(createShip(3)).toMatchObject({ length: 3 });
});

test('Expect ship.length to be 5', () => {
  expect(createShip(5)).toMatchObject({ length: 5 });
});
