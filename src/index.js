// import './style.css';
import { Gameboard } from './gameboard';
import { Ship } from './ship';
console.log('Connected');


export const carrier = new Ship(3, 'carrier')
carrier.hit()
carrier.hit()
export const gb = new Gameboard();
gb.placeShip([0, 1], carrier)
// gb.recieveAttack([0, 1]);
