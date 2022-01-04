const overlay = document.getElementById('overlay');
const overlayButton = document.getElementById('overlay-button');

export default function gameOver() {
  overlay.style.display = 'block';
}

overlayButton.addEventListener('click', () => {
  window.location.reload();
});
