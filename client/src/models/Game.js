import winningArrays from './WinningArrays.js';
import Cell from './Cell.js';
import GamesService from '../services/GameServices.js';

class Game {
    constructor(players = [1, 2], board = [], currentPlayer, hasWon = false) {
        this.players = players
        this.board = board
        this.currentPlayer = currentPlayer || players[0]
        this.hasWon = hasWon
    }

    chooseColumn(column) {
        // TODO: logic for using column number to determine which id should be claimed
        // work out which cell id should be claimed in column
        // claim the cell
        // in react once this has been called update the state and it should rerender `setGame(game)`
        for (let i=column+42; i>=0; i-=7) {
            console.log(this.board[i].player);
            if (!this.board[i].player) {
                this.board[i].player = `player-${this.currentPlayer}`
                console.log(this.currentPlayer);
                console.log(this.board[i].player, i);
                this.takeTurn(i);
                break
            } else {
                console.log("error else");
            }
        }
    }


    

    checkWin() {
        //some logic that checks if the game has been won
        for (let i = 0; i < winningArrays.length; i++) {
            const cell1 = this.board[winningArrays[i][0]]
            const cell2 = this.board[winningArrays[i][1]]
            const cell3 = this.board[winningArrays[i][2]]
            const cell4 = this.board[winningArrays[i][3]]

            // // check those squares to see if they all have the class of player-one
            if (cell1.player === 'player-1' &&
                cell2.player === 'player-1' &&
                cell3.player === 'player-1' &&
                cell4.player === 'player-1'
            ){
                // add winner useState to stop game?
                console.log("Player One Wins!");
                this.hasWon = true
                console.log(this.hasWon);
                this.createWinPayload()
            }
            // // check those squares to see if they all have the class of player-two
            if (cell1.player === 'player-2' &&
                cell2.player === 'player-2' &&
                cell3.player === 'player-2' &&
                cell4.player === 'player-2'
            ){
                // add winner useState to stop game?
                console.log("Player Two Wins!");
                this.hasWon = true
                console.log(this.hasWon);
                this.createWinPayload()
            }
        }
        //some kind of win screen...       
    }

    claimCell(id) {
        //
        this.board[id].claim(this.currentPlayer)
    }

    changeCurrentPlayer() {
        //changes the player
        if (this.currentPlayer === this.players[0]){
            this.currentPlayer = this.players[1];
        } else {
            this.currentPlayer = this.players[0];
        }
    }

    takeTurn(id) {
        //call all the above functions

        console.log(`running taketurn with id ${id}, current player is ${this.currentPlayer}`);
        this.claimCell(id)
        this.changeCurrentPlayer()
        this.checkWin()
        
    }

    boardMaker() {
        const boardArray = this.board.map(cell => {
            if (!cell.player) { return 0} 
            else {return parseInt(cell.player.slice(-1))}
        })
        return boardArray
    }

    createWinPayload() {
        let winningPlayer = null
        if (this.currentPlayer === 2) {
            winningPlayer = 1
        } else {
            winningPlayer = 2
        }
        const winningBoard = this.boardMaker()
        const payload = {finalBoard: winningBoard, winner: winningPlayer}
        GamesService.postGame(payload)
    }

    newBoard() {
        this.board = []
        for (let i = 0; i < 49; i++){
            const cell = new Cell(i);
            this.board.push(cell)
        }
        // console.log(this.board);
    }
}

export default Game;