import './style.css';
import { Gameboard } from './gameboard';
import { Ship } from './ship';
import { Player } from './player';
import { buildBoard, highlightShip } from './dom';
console.log('Connected');

// [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]

  export const player1 = new Player ();
  export const npc = new Player ();

document.addEventListener('DOMContentLoaded', () => { 
  buildBoard('player-board', 'pc');
  buildBoard('enemy-board', 'ec')



  player1.myBoard.placeShip('carrier', [[0, 5], [0, 6], [0, 7], [0, 8], [0, 9]]); 
  player1.myBoard.placeShip('battleship', [[3, 4], [3, 5], [3, 6], [3, 7]]);
  player1.myBoard.placeShip('cruiser', [[9, 5], [9, 6], [9, 7]]);
  player1.myBoard.placeShip('submarine', [[5, 5], [6, 5], [7, 5]]);
  player1.myBoard.placeShip('destroyer', [[7, 0], [8, 0]]);

  npc.myBoard.placeShip('carrier', [[0, 5], [0, 6], [0, 7], [0, 8], [0, 9]]); 
  npc.myBoard.placeShip('battleship', [[3, 4], [3, 5], [3, 6], [3, 7]]);
  npc.myBoard.placeShip('cruiser', [[9, 5], [9, 6], [9, 7]]);
  npc.myBoard.placeShip('submarine', [[5, 5], [6, 5], [7, 5]]);
  npc.myBoard.placeShip('destroyer', [[7, 0], [8, 0]]);

  // player1.myBoard.wipeBoard();

  const gridCell = document.getElementById('enemy-board'); 
  const randomizeButton = document.getElementById('random');
  const myShip = document.getElementById('player-board');

  gridCell.addEventListener('mousemove', (event) => {
    event.target.style.borderColor = 'green';
  })

  gridCell.addEventListener('mouseout', (event) => {
    event.target.style.borderColor = 'lightgrey'
  })

  gridCell.addEventListener('click', (event) => {
    const cell = event.target.id.slice(2).split(',');
    if (cell.length !== 2) return; //Ensures no non grid-cells selected
    const coordinates = cell.map(Number);
    let verify = npc.myBoard.recieveAttack(coordinates);
    if (verify) {
      setTimeout(() => {
        player1.myBoard.autoAttack();
      }, 500)
      
    }   
  })
  
  randomizeButton.addEventListener('click', () => {
    player1.myBoard.randomShips();
    console.log(player1.myBoard.allShips)
  })

  myShip.addEventListener('mousedown', (event) => {
    console.log(event);
  })
})




