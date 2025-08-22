import { Ship } from './ship'
import { highlightShip } from "./dom";

export class Gameboard {
  constructor() {
    this.board = Array.from({ length: 10 }, () => 
      Array.from({ length: 10 }, () => ({
        hasShip: false,
        shipId: null,
        isHit: false
      }))
    );
    this.allShips = [];
  }

  recieveAttack(coordinates) {
    const [x, y] = coordinates;
    if (this.board[x][y].isHit) {
      alert('Already hit dummy!')
      return;
    }
    if (this.board[x][y].hasShip) {
      this.board[x][y].isHit = true;
      this.board[x][y].shipId.hit();
      this.board[x][y].shipId.checkIfSunk();
      console.log(this.allShips)
      this.allShipsSunk();
      return;
    }
    this.board[x][y].isHit = true;

  }

  placeShip(ship, ...coordinates) {
    const newShip = new Ship(coordinates.length, ship)
    this.allShips.push(newShip);
     
    for (let i = 0; i < coordinates.length; i++) {
      const [x, y] = coordinates[i];
      this.board[x][y].hasShip = true;
      this.board[x][y].shipId = newShip;
      highlightShip(coordinates[i]);
    }

  }

  allShipsSunk() { 
    if (this.allShips.some(i => i.sunk !== true)) {
      return;
    }
    else  {
      alert('All ships have fallen')
    }
  }
}


