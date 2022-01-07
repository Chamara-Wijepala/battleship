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

function findSuitableStart(computerPlayer, ship) {
  const suitableStart = Math.abs(
    Math.floor(Math.random() * computerPlayer.gameBoard.board.length - ship.length),
  );
  return suitableStart;
}

function placeComputerShips(computerPlayer) {
  const direction = ['Horizontal', 'Vertical'];
  const randomDirection = pickRandomElement(direction);
  computerPlayer.gameBoard.placeShip(0, computerPlayer.ships.carrier, randomDirection);
}

export {
  computerMove,
  placeComputerShips,
  findSuitableStart,
};
