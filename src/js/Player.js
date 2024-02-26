import UI from "./UI.js"
import Deck from "./Deck.js"


export default class Player {
    constructor(name) {
        this.name = name
        this.deck = new Deck()
        UI.updateDeckCount(this)
        this.drawnCards = []
        UI.clearPile(this)
        this.score = 0
        UI.updateScore(this)
    }

    drawCard() {
        const drawnCard = this.deck.cards[0]
        this.drawnCards.unshift(drawnCard)
        UI.displayDrawnCard(drawnCard, this)
        this.deck.cards.shift()
        UI.updateDeckCount(this)
    }

    updateScore() {
        this.score += 1
        UI.updateScore(this)
    }
}