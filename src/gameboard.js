import { Ship } from './ship'
import { highlightShip, updatePlayerBoard } from "./dom";

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

  autoAttack() {
    const coordinates = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
    const [x, y] = coordinates;
    if (this.board[x][y].isHit) {
      this.autoAttack();
      return;
    }
    if (this.board[x][y].hasShip) {
      this.board[x][y].isHit = true;
      this.board[x][y].shipId.hit();
      this.board[x][y].shipId.checkIfSunk();
      console.log(this.allShips)
      this.allShipsSunk();
      updatePlayerBoard(coordinates)
      return;
    }
    this.board[x][y].isHit = true;
    updatePlayerBoard(coordinates);
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

  randomShips() {
    this.wipeBoard();
    //do stuff
  }

  wipeBoard() {
    this.board = Array.from({ length: 10 }, () => 
      Array.from({ length: 10 }, () => ({
        hasShip: false,
        shipId: null,
        isHit: false
      }))
    );
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


