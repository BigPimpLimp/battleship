export function highlightShip(coordinates) {
  const cell = document.getElementById(coordinates.toString());
  cell.style.backgroundColor = 'purple'
}