function pickRandomLocation(suitableLocations) {
  const location = suitableLocations[Math.floor(Math.random() * suitableLocations.length)];
  return location;
}

export default function findSuitableLocation(opponentBoard) {
  const suitableLocations = [];
  opponentBoard.board.forEach((object, index) => {
    if (object.isHit === false) {
      suitableLocations.push(index);
    }
  });
  return pickRandomLocation(suitableLocations);
}
