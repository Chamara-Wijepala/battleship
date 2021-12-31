function renderBoard(player, boardElement) {
  for (let i = 0; i < player.gameBoard.board.length; i += 1) {
    const square = document.createElement('div');
    square.classList.add('square');
    boardElement.appendChild(square);
  }
}

function clearBoard(parent) {
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
}

export {
  renderBoard,
  clearBoard,
};
