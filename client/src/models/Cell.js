class Cell {
    constructor(id, player = null, winning = false) {
        this.id = id
        this.player = player       
        this.winning = winning
    }

    claim(player) {
        //set the cell to the players colour
        console.log(`claim cell function running, player is ${player}`);
        this.player = `player-${player}`
    }

    setWin() {
        this.winning = true
        //do something to the cells that make up the winning connect 4
    }
}

export default Cell