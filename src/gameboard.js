import { Ship } from './ship'
import { highlightShip } from "./dom";

export class Gameboard {
  constructor() {
    this.board = Array.from({ length: 10 }, () => Array(10).fill({
      hasShip: false,
      shipId: null,
      isHit: false
    }));
    this.allShips = [];
  }

  recieveAttack(coordinates) {
    const [x, y] = coordinates;
    if (this.board[x][y].isHit) {
      return 'Already hit dummy!'
    }
    if (this.board[x][y].hasShip) {
      this.board[x][y].isHit = true;
      this.board[x][y].shipId.hit();
      this.board[x][y].shipId.checkIfSunk();
      return;
    }
    this.board[x][y].isHit = true;
  }

  placeShip(ship, ...coordinates) {
    for (let i = 0; i < coordinates.length; i++) {
      const [x, y] = coordinates[i];
      this.board[x][y].hasShip = true;
      this.board[x][y].shipId = ship;
      this.allShips.push(ship);
      highlightShip(coordinates[i]);
    }

  }

  allShipsSunk() {
    if (this.allShips.some(i => i.sunk !== true)) {
      return 'All ships not sunk!';
    }
    return 'All ships sunk!';
  }
}


