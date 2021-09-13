class Game {
    constructor(board = [], players = [1, 2]) {
        this.board = board
        this.players = players
        this.currentPlayer = players[0]
    }

    checkWin() {
        //some logic that checks if the game has been won
    }

    claimCell() {
        //
    }

    takeTurn() {
        //call all the above functions
    }

    changeCurrentPlayer() {
        //changes the player
    }
}