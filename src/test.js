import { carrier } from './ship';
import { gb } from './gameboard';
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
})
