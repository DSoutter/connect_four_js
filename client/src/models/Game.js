import winningArrays from './WinningArrays.js';
import Cell from './Cell.js';

class Game {
    constructor(players = [1, 2], board = []) {
        this.players = players
        this.board = board
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

    newBoard() {
        this.board = []
        for (let i = 0; i < 49; i++){
            const cell = new Cell(i);
            this.board.push(cell)
        }
        console.log(this.board);
    }
}

export default Game;