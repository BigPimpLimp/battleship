import { Ship } from './ship'
import { highlightShip, resetBoardStyling, updateBoard, newGame } from "./dom";

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
      updateBoard(coordinates, 'ec', true)
      this.board[x][y].shipId.checkIfSunk();
      this.allShipsSunk();
      return true;
    }
    this.board[x][y].isHit = true;
    updateBoard(coordinates, 'ec', false)
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
      this.allShipsSunk();
      updateBoard(coordinates, 'pc', true)
      return;
    }
    this.board[x][y].isHit = true;
    updateBoard(coordinates, 'pc', false);
  }
  

  placeShip(ship, coordinates) {
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
    const shipNames = [
      'carrier', 
      'battleship', 
      'cruiser', 
      'submarine,', 
      'destroyer'
    ]
    const takenCells = [];

    for (let i = 0; i < shipLengths.length; i++) {
      let coords = this.randomCoordinates(shipLengths[i]);
      for (let j = 0; j < coords.length; j++) { 
        takenCells.some(e => {
          // console.log(e)
          if (e === coords[j]) { //cannot compare array this way. Need to loop through each value of sub array to compare
            console.log('kljahsdfkljashdflkjashd')
            takenCells = [];
            return this.randomShips();
          }
        })
        // if (takenCells.includes(coords[j])) {
        //   console.log('takenCells ran')
        //   takenCells = [];
        //   return this.randomShips();
        // }
        takenCells.push(coords[j]);
      }
        this.placeShip(shipNames[i], coords)
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
    this.allShips = [];
    resetBoardStyling();
  }

  allShipsSunk() { 
    if (this.allShips.some(i => i.sunk !== true)) {
      return;
    }
    else  {
      alert('All ships have fallen')
      newGame();
    }
  }

  randomCoordinates(num) {
    const arr = []; 
    const initialCoords = [
      Math.floor(Math.random() * 10), 
      Math.floor(Math.random() * 10)
    ];
       
    this.randomizer(arr, initialCoords, num);
    return arr;
  }

  randomizer(arr, initialCoords, num) {
    // [dx, dy] represents Right, Left, Down, Up
  const directions = [
    [1, 0],  // Right
    [-1, 0], // Left
    [0, 1],  // Down
    [0, -1]  // Up
  ];

  // Shuffle directions for randomness
  for (let i = directions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [directions[i], directions[j]] = [directions[j], directions[i]];
  }

  // Try each direction until one fits
  for (const [dx, dy] of directions) {
    const coords = [];
    let x = initialCoords[0];
    let y = initialCoords[1];

    // Compute the end coordinate for this direction
    const endX = x + dx * (num - 1);
    const endY = y + dy * (num - 1);

    // Check if ship fits inside 0-9 bounds
    if (endX >= 0 && endX <= 9 && endY >= 0 && endY <= 9) {
      for (let i = 0; i < num; i++) {
        coords.push([x, y]);
        x += dx;
        y += dy;
      }
      arr.push(...coords); // place ship
      break; // stop after first valid placement
    }
  }
}


}


