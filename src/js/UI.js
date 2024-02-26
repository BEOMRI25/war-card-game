export default class UI {
    static displayDrawnCard(card, player) {
        const drawnCard = document.createElement("img")
        drawnCard.setAttribute("src", card.image)
        drawnCard.classList.add("card")
        const gameProgressPercentage = player.drawnCards.length / 52
        const transformRange = gameProgressPercentage * 5 + 2
        drawnCard.style.transform = `rotate(${Math.floor(Math.random() * (transformRange * 4)) - (transformRange * 2)}deg) translate(${Math.floor(Math.random() * (transformRange * 2)) - transformRange}%, ${Math.floor(Math.random() * (transformRange * 2)) - transformRange}%)`
        document.querySelector(`.table-side.${player.name} > .pile`).appendChild(drawnCard)
    }

    static updateDeckCount(player) {
        document.querySelector(`#${player.name}-deck-count`).textContent = player.deck.cards.length
        const deckImg = document.querySelector(`.table-side.${player.name} > .deck > .card`)
        if (player.deck.cards.length === 0) {
            deckImg.style.display = "none"
        } else {
            deckImg.style.display = "block"
        }
    }

    static updateScore(player) {
        document.querySelector(`.score.${player.name}`).textContent = player.score
    }

    static displayGameResults(gameWinner) {
        const splashScreen = document.createElement("div")
        splashScreen.classList.add("splash-screen")
        const gameOverMessage = document.createElement("span")
        gameOverMessage.textContent = `game over`
        splashScreen.appendChild(gameOverMessage)
        const winnerMessage = document.createElement("span")
        winnerMessage.textContent = gameWinner ? `${gameWinner.name} wins!` : "it's a draw!"
        splashScreen.appendChild(winnerMessage)
        const restartButton = document.createElement("button")
        restartButton.textContent = "restart game"
        restartButton.classList.add("button")
        restartButton.setAttribute("id", "reset-button")
        splashScreen.appendChild(restartButton)
        document.body.appendChild(splashScreen)
    }

    static hideGameResults() {
        document.querySelector(".splash-screen").remove()
    }

    static clearPile(player) {
        document.querySelector(`.table-side.${player.name} > .pile`).innerHTML = ""
    }
}