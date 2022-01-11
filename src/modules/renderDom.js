function renderBoard(player, boardElement) {
  for (let i = 0; i < player.gameBoard.board.length; i += 1) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.dataset.id = i;
    if (player.gameBoard.board[i].hasShip === true) {
      square.classList.add('has-ship');
    }
    if (player.gameBoard.board[i].isHit === true) {
      square.classList.add('is-hit');
    }
    if (player.gameBoard.board[i].hasShip === true && player.gameBoard.board[i].isHit === true) {
      square.classList.add('ship-hit');
    }
    if (player.gameBoard.board[i].shipHover === true) {
      square.classList.add('ship-hover');
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
