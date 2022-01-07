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

function checkCollisions(start, ship) {
  const shipPlacement = [];
  for (let i = 0; i < ship.length; i += 1) {
    shipPlacement.push(start + i);
  }
  return shipPlacement;
}

function placeComputerShips(computerPlayer) {
  const direction = ['Horizontal', 'Vertical'];
  const randomDirection = pickRandomElement(direction);
  const start = findSuitableStart(computerPlayer, computerPlayer.ships.carrier, randomDirection);
  computerPlayer.gameBoard.placeShip(start, computerPlayer.ships.carrier, randomDirection);
}

export {
  computerMove,
  placeComputerShips,
  findSuitableStart,
  checkCollisions,
};
