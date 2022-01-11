function pickRandomElement(array) {
  const element = array[Math.floor(Math.random() * array.length)];
  return element;
}

function findSuitableStart(player, ship, direction) {
  let suitableStart;
  if (direction === 'Horizontal') {
    suitableStart = Math.abs(
      Math.floor(Math.random() * player.gameBoard.board.length - (ship.length)),
    );
  } else {
    suitableStart = Math.abs(
      Math.floor(Math.random() * player.gameBoard.board.length - (ship.length * 10)),
    );
  }
  return suitableStart;
}

// Creates an array of the locations a ship will be placed on and checks if it will collide with the
// right edge or with other ships.
function checkCollisions(start, ship, player, direction) {
  const rightCollisions = [9, 19, 29, 39, 49, 59, 69, 79, 89];
  const leftCollisions = [10, 20, 30, 40, 50, 60, 70, 80, 90];
  const shipLength = [];
  for (let i = 0; i < ship.length; i += 1) {
    if (direction === 'Horizontal') {
      shipLength.push(start + i);
    } else {
      shipLength.push(start + i * 10);
    }
  }
  const collidesWithRightEdge = shipLength.some(
    (value) => rightCollisions.some((number) => number === value),
  );
  const collidesWithLeftEdge = shipLength.some(
    (value) => leftCollisions.some((number) => number === value),
  );
  const collidesWithShip = shipLength.some(
    (value) => player.gameBoard.board[value].hasShip,
  );
  if ((collidesWithRightEdge === true && collidesWithLeftEdge === true)
    || (collidesWithShip === true)) { return true; }
  return false;
}

function placeShips(player, ship) {
  const direction = ['Horizontal', 'Vertical'];
  const randomDirection = pickRandomElement(direction);
  const start = findSuitableStart(player, ship, randomDirection);
  const collides = checkCollisions(start, ship, player, randomDirection);
  if (collides === true) {
    placeShips(player, ship);
  } else {
    player.gameBoard.placeShip(start, ship, randomDirection);
  }
}

export {
  findSuitableStart,
  checkCollisions,
  placeShips,
};
