import './style.css';
import { Gameboard } from './gameboard';
import { Ship } from './ship';
import { Player } from './player';
import { buildBoard, highlightShip } from './dom';
console.log('Connected');

export const player1 = new Player ();
export const npc = new Player ();

document.addEventListener('DOMContentLoaded', () => { 
  buildBoard('player-board', 'pc');
  buildBoard('enemy-board', 'ec')

  player1.myBoard.defaultShips(player1);
  npc.myBoard.defaultShips(npc)

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
    if (verify === true) {
      setTimeout(() => {
        player1.myBoard.autoAttack();
      }, 500)
    }
  })
  
  randomizeButton.addEventListener('click', () => {
    player1.myBoard.randomShips();
    // npc.myBoard.randomShips(); //causes issues with marking hits on board, not sure if DOM or Gameboard
    console.log(player1.myBoard.allShips)
  })

  myShip.addEventListener('mousedown', (event) => {
    console.log(event);
  })
})




