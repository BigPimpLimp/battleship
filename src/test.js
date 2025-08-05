import { carrier } from './ship';

test('length', () => {
    expect(carrier.length).toBe(3)
})

test('hits', () => {
    expect(carrier.hits).toBe(1)
})