function pickRandomLocation(suitableLocations) {
  const location = suitableLocations[Math.floor(Math.random() * suitableLocations.length)];
  return location;
}

function findSuitableLocation(opponentBoard) {
  const suitableLocations = [];
  opponentBoard.board.forEach((object, index) => {
    if (object.isHit === false) {
      suitableLocations.push(index);
    }
  });
  return pickRandomLocation(suitableLocations);
}

export default function computerMove(humanPlayer) {
  const coords = findSuitableLocation(humanPlayer.gameBoard);
  const ship = humanPlayer.gameBoard.board[coords].shipObject;
  humanPlayer.gameBoard.receiveAttack(coords, ship);
}
