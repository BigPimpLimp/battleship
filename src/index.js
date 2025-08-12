import './style.css';
import { Gameboard } from './gameboard';
import { Ship } from './ship';
import { Player } from './player';
console.log('Connected');


// export const carrier = new Ship(3, 'carrier')
// carrier.hit()
// carrier.hit()
// export const gb = new Gameboard();
// gb.placeShip([0, 1], carrier)
// // gb.recieveAttack([0, 1]);



//probably better to use table instead of grid
document.addEventListener('DOMContentLoaded', () => { 
  const playerGridContainer = document.getElementById('player-board');
  const enemyGridContainer = document.getElementById('enemy-board');
  const gridSize = 10;

  for (let i = 0; i < gridSize; i ++) {
    for (let j = 0; j < gridSize; j++) {
      const cell = document.createElement('div');
      cell.classList.add('grid-cell');
      cell.innerHTML = 'x'
      playerGridContainer.appendChild(cell);
    }
  }

  for (let i = 0; i < gridSize; i ++) {
    for (let j = 0; j < gridSize; j++) {
      const cell = document.createElement('div');
      cell.classList.add('grid-cell');
      cell.innerHTML = 'x'
    enemyGridContainer.appendChild(cell);
    }
  }
})


const player1 = new Player ();
const npc = new Player ();

player1.myBoard.placeShip([0, 7], 'carrier');

const gridItem = document.querySelector('[style*="grid-column: 9"][style*="grid-row: 1"]');
gridItem.innerHTML = 'adf'

