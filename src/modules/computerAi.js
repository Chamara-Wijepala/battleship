function pickRandomElement(array) {
  const element = array[Math.floor(Math.random() * array.length)];
  return element;
}

function findSuitableLocation(opponentBoard) {
  const suitableLocations = [];
  opponentBoard.board.forEach((object, index) => {
    if (object.isHit === false) {
      suitableLocations.push(index);
    }
  });
  return pickRandomElement(suitableLocations);
}

function computerMove(humanPlayer) {
  const coords = findSuitableLocation(humanPlayer.gameBoard);
  const ship = humanPlayer.gameBoard.board[coords].shipObject;
  humanPlayer.gameBoard.receiveAttack(coords, ship);
}

function findSuitableStart(computerPlayer, ship, direction) {
  let suitableStart;
  if (direction === 'Horizontal') {
    suitableStart = Math.abs(
      Math.floor(Math.random() * computerPlayer.gameBoard.board.length - (ship.length)),
    );
  } else {
    suitableStart = Math.abs(
      Math.floor(Math.random() * computerPlayer.gameBoard.board.length - (ship.length * 10)),
    );
  }
  return suitableStart;
}

// Creates an array of the locations a ship will be placed on and checks if it will collide with the
// right edge or with other ships.
function checkCollisions(start, ship, computerPlayer, randomDirection) {
  const collisions = [9, 19, 29, 39, 49, 59, 69, 79, 89];
  const shipLength = [];
  for (let i = 0; i < ship.length; i += 1) {
    if (randomDirection === 'Horizontal') {
      shipLength.push(start + i);
    } else {
      shipLength.push(start + i * 10);
    }
  }
  const collidesWithRightEdge = shipLength.some(
    (value) => collisions.some((number) => number === value),
  );
  const collidesWithShip = shipLength.some(
    (value) => computerPlayer.gameBoard.board[value].hasShip,
  );
  if (collidesWithShip === true || collidesWithRightEdge === true) { return true; }
  return false;
}

function placeComputerShips(computerPlayer, ship) {
  const direction = ['Horizontal', 'Vertical'];
  const randomDirection = pickRandomElement(direction);
  const start = findSuitableStart(computerPlayer, ship, randomDirection);
  const collides = checkCollisions(start, ship, computerPlayer, randomDirection);
  if (collides === true) {
    placeComputerShips(computerPlayer, ship);
  } else {
    computerPlayer.gameBoard.placeShip(start, ship, randomDirection);
  }
}

export {
  computerMove,
  placeComputerShips,
  findSuitableStart,
  checkCollisions,
};
