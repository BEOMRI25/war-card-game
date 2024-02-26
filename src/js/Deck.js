import Card from "./Card.js"


export default class Deck {
    constructor() {
        this.cards = []
        const shapes = ["hearts", "clubs", "diamonds", "spades"]
        for (const shape of shapes) {
            for (let number = 1; number <= 13; number++) {
                this.cards.push(new Card(number, shape))
            }
        }
        this.cards = this.cards.sort(() => Math.random() - 0.5)
    }
}