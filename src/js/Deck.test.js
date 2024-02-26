const Deck = require('./Deck')

test('Creates a new deck with 52 cards', () => {
    expect(new Deck().cards.length).toBe(52)
})


