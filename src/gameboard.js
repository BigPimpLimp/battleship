import { Ship } from './ship'

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

  placeShip(coordinates, ship) {
    const [x, y] = coordinates;
    this.board[x][y].hasShip = true;
    this.board[x][y].shipId = ship;
    this.allShips.push(ship);
  }

  allShipsSunk() {
    this.allShips.some(i => { // not using .some correctly here
      console.log(i)
      if (i.sunk !== true) return 'All ships not sunk!';
    })
    return 'All ships sunk!';
    // for (let i = 0; i < this.board.length; i++) {
    //   for (let j = 0; j < this.board[i].length; j++) {
    //     if (this.board[j].hasShip && this.board[j].isHit === false) {
    //       return 'All ships not sunk!'
    //     }
    //   }
    // }
    // return 'All ships sunk!'
  }
}


