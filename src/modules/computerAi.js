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

function placeComputerShips(computerPlayer) {
  const direction = [0, 1];
  const randomDirection = pickRandomElement(direction);
  computerPlayer.gameBoard.placeShip(0, computerPlayer.ships.carrier, randomDirection);
}

export {
  computerMove,
  placeComputerShips,
};
