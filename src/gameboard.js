class Gameboard {
  constructor() {
    this.board = Array.from({ length: 10 }, () => Array(10).fill({
      hasShip: false,
      shipId: null,
      isHit: false
    }));
  }

  recieveAttack(coordinates) {
    
  }

  placeShip(coordinates, ship) {
    const [x, y] = coordinates;
    this.board[x][y].hasShip = true;
    this.board[x][y].shipId = ship.name;
  }
}

export const gb = new Gameboard();
