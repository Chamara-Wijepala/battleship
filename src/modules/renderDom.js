function renderBoard(player, boardElement) {
  for (let i = 0; i < player.gameBoard.board.length; i += 1) {
    const square = document.createElement('div');
    square.classList.add('square');
    if (player.gameBoard.board[i].hasShip === true) {
      square.classList.add('has-ship');
    }
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
