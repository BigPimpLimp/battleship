import { Ship } from './ship'
import { highlightShip, resetBoardStyling, updatePlayerBoard } from "./dom";

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
      return false;
    }
    if (this.board[x][y].hasShip) {
      this.board[x][y].isHit = true;
      this.board[x][y].shipId.hit();
      this.board[x][y].shipId.checkIfSunk();
      console.log(this.allShips)
      this.allShipsSunk();
      return true;
    }
    this.board[x][y].isHit = true;
    return true;
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
    const shipLengths = [5, 4, 3, 3, 2];
    const takenCells = []
    // const carrier = [];
    // const battleship = [];
    // const cruiser = [];
    // const submarine = [];
    // const destroyer = [];
    let coords = this.randomCoordinates();

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < shipLengths[i]; j++) {
        
      }
    }
  }

  wipeBoard() {
    this.board = Array.from({ length: 10 }, () => 
      Array.from({ length: 10 }, () => ({
        hasShip: false,
        shipId: null,
        isHit: false
      }))
      
    );
    resetBoardStyling();
  }

  allShipsSunk() { 
    if (this.allShips.some(i => i.sunk !== true)) {
      return;
    }
    else  {
      alert('All ships have fallen')
    }
  }

  randomCoordinates(num) {
    const arr = [];
    const initialCoords = [
      Math.floor(Math.random() * 10), 
      Math.floor(Math.random() * 10)
    ];

    //need to find a way outOfBounds tracks which index is in range
    const outOfBounds = ([x, y]) => 
      [x, y].every(coord => coord + num > 9 && coord - num < 0);
    
    if (outOfBounds(initialCoords)) {
      return this.randomCoordinates(num);
    }

    let randomNum = Math.floor(Math.random() * 10);

    const diff1 = Math.abs(initialCoords[0] - randomNum);
    const diff2 = Math.abs(initialCoords[1] - randomNum);

    if (initialCoords[0] + 9) {
      for (let i = 0; i < num; i++) {
        arr.push([...initialCoords])
        initialCoords[0] += 1;
      }
    }
    else {
      for (let i = 0; i < num; i++) {
        arr.push([...initialCoords])
        initialCoords[1] += 1;
      }      
    }

  }


}


