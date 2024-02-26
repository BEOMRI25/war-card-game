import Player from "./Player.js"
import UI from "./UI.js"

export default class Game {
    constructor() {
        this.player = new Player("player")
        this.cpu = new Player("cpu")
        document.querySelector("#draw-button").addEventListener("click", this.initPlay.bind(this))
        document.addEventListener("click", e => {
            if (e.target.id === "reset-button") this.reset()
        })
    }

    initPlay() {
        this.player.drawCard()
        this.cpu.drawCard()
        const playWinner = this.determinePlayWinner()
        if (playWinner) playWinner.updateScore()
        if (this.player.deck.cards.length === 0 && this.cpu.deck.cards.length === 0) {
            const gameWinner = this.determineGameWinner()
            UI.displayGameResults(gameWinner)
        }
    }

    reset() {
        UI.hideGameResults()
        this.player = new Player("player")
        this.cpu = new Player("cpu")
    }

    determinePlayWinner() {
        let playWinner
        const playerCardNum = this.player.drawnCards[0].number
        const cpuCardNum = this.cpu.drawnCards[0].number
        if (playerCardNum === cpuCardNum) {
            playWinner = null
        } else if (playerCardNum === 1) {
            playWinner = this.player
        } else if (cpuCardNum === 1) {
            playWinner = this.cpu
        } else if (playerCardNum > cpuCardNum) {
            playWinner = this.player
        } else if (cpuCardNum > playerCardNum) {
            playWinner = this.cpu
        }
        return playWinner
    }

    determineGameWinner() {
        let gameWinner = null
        const playerFinalScore = this.player.score
        const cpuFinalScore = this.cpu.score
        if (playerFinalScore > cpuFinalScore) {
            gameWinner = this.player
        } else if (cpuFinalScore > playerFinalScore) {
            gameWinner = this.cpu
        } 
        return gameWinner
    }
}
