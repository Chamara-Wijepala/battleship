export default function renderBoard(player, boardElement) {
  for (let i = 0; i < player.gameBoard.board.length; i += 1) {
    const square = document.createElement('div');
    square.classList.add('square');
    boardElement.appendChild(square);
  }
}
