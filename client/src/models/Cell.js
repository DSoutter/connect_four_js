class Cell {
    constructor(id, player = null, winning = false) {
        this.id = id
        this.player = player       
        this.winning = winning
    }

    isWinning() {
        //how is this different from setwin?
        this.winning = true
    }

    claim(player) {
        //set the cell to the players colour
        this.player = player
    }

    setWin() {
        //do something to the cells that make up the winning connect 4
    }
}

export default Cell