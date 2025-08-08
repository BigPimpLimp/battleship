import { carrier, gb } from './index';

test('length', () => {
    expect(carrier.length).toBe(3)
})

test('hits', () => {
    expect(carrier.hits).toBe(2)
})


describe('Gameboard tests', () => {
  test('gameboard length', () => {
      expect(gb.board.length).toBe(10);
  })
  
  test('gameboard indices', () => {
      expect(gb.board[0][1]).toEqual({
        hasShip: false, 
        shipId: null, 
        isHit: false
    })
  })

  // test('gameboard recieve attack', () => {
  //   const mockShip = {

  //   }
  //   expect(gb.recieveAttack([0, 1])).toEqual('Already hit dummy!')
  // })

  test('all ships sunk', () => {
    expect(gb.allShipsSunk()).toEqual( 'All ships not sunk!')
  })

})
