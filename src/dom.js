import { player1, npc } from ".";

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
      gridContainer.appendChild(cell);
    }
  }
}

export function highlightShip(coordinates) { //only works for player board currently
  const cell = document.getElementById('pc' + coordinates.toString());
  cell.style.backgroundColor = 'purple';
  cell.draggable = 'true';
  cell.classList.add('taken');
}

export function updateBoard(coordinates, str, bool) {
    const cell = document.getElementById(str + coordinates.toString());
    cell.innerHTML = 'X';
    if (bool) cell.style.color = 'red'; 
}

export function resetBoardStyling() { 
  const allCells = document.querySelectorAll('.grid-cell');
  allCells.forEach(event => {
    event.style.backgroundColor = 'black'
    event.innerHTML = '';
  })
}

export function newGame() {
  const userResponse = confirm('Play another game?')
  
  if (userResponse) {
    player1.myBoard.wipeBoard();
    npc.myBoard.wipeBoard();
    player1.myBoard.defaultShips(player1);
    npc.myBoard.defaultShips(npc);
  }
}