import './style.css';
import { Gameboard } from './gameboard';
import { Ship } from './ship';
import { Player } from './player';
import { buildBoard, highlightShip } from './dom';
console.log('Connected');


// export const carrier = new Ship(3, 'carrier')
// carrier.hit()
// carrier.hit()
// export const gb = new Gameboard();
// gb.placeShip([0, 1], carrier)
// // gb.recieveAttack([0, 1]);

document.addEventListener('DOMContentLoaded', () => { 
  buildBoard('player-board', 'pc');
  buildBoard('enemy-board', 'ec')

  const player1 = new Player ();
  const npc = new Player ();

  player1.myBoard.placeShip('carrier', [0, 5], [0, 6], [0, 7], [0, 8], [0, 9]); //highlight ship function is not working
  player1.myBoard.placeShip('battleship', [3, 4], [3, 5], [3, 6], [3, 7]);
  player1.myBoard.placeShip('cruiser', [9, 5], [9, 6], [9, 7]);
  player1.myBoard.placeShip('submarine', [5, 5], [6, 5], [7, 5]);
  player1.myBoard.placeShip('destroyer', [7, 0], [8, 0]);


  const gridCell = document.getElementById('enemy-board');
  gridCell.addEventListener('mousemove', (event) => {
    event.target.style.borderColor = 'green';
  })
  gridCell.addEventListener('mouseout', (event) => {
    event.target.style.borderColor = 'lightgrey'
  })
  gridCell.addEventListener('click', (event) => {
    event.target.innerHTML = 'X';
    const cell = event.target.id.slice(2).split(',');
    const coordinates = cell.map(Number);
    npc.myBoard.recieveAttack(coordinates)
  })
})





// const gridItem = document.querySelector('[style*="grid-column: 9"][style*="grid-row: 1"]');
// gridItem.innerHTML = 'adf'

