export function buildBoard(boardId, cellId) {
  const gridContainer = document.getElementById(boardId);
  const gridSize = 10;
  const columns = ['0,', '1,', '2,', '3,', '4,', '5,', '6,', '7,', '8,', '9,']
  const rows = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  for (let i = 0; i < gridSize; i ++) {
    for (let j = 0; j < gridSize; j++) {
      const cell = document.createElement('div');
      cell.classList.add('grid-cell');
      cell.id = `${cellId + columns[i] + rows[j]}`;
      // cell.innerHTML = 'x'
      gridContainer.appendChild(cell);
    }
  }
}

export function highlightShip(coordinates) { //only works for player board currently
  const cell = document.getElementById('pc' + coordinates.toString());
  cell.style.backgroundColor = 'purple'
}