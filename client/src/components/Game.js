import React, { useState } from 'react';
import '../styles/Game.css'
import Cell from './Cell'

const Game = () => {

    // empty move list for new game
    const emptyMoves = [
        // 0 - 6
        {player: null},
        {player: null},
        {player: null},
        {player: null},
        {player: null},
        {player: null},
        {player: null},
        // 7 - 13
        {player: null},
        {player: null},
        {player: null},
        {player: null},
        {player: null},
        {player: null},
        {player: null},
        // 14 - 20
        {player: null},
        {player: null},
        {player: null},
        {player: null},
        {player: null},
        {player: null},
        {player: null},
        // 21 - 27
        {player: null},
        {player: null},
        {player: null},
        {player: null},
        {player: null},
        {player: null},
        {player: null},
        // 28 - 34
        {player: null},
        {player: null},
        {player: null},
        {player: null},
        {player: null},
        {player: null},
        {player: null},
        // 35 - 41
        {player: null},
        {player: null},
        {player: null},
        {player: null},
        {player: null},
        {player: null},
        {player: null},

    ]

    // Winning arrays using index position
    const winningArrays = [
    [0, 1, 2, 3],
    [41, 40, 39, 38],
    [7, 8, 9, 10],
    [34, 33, 32, 31],
    [14, 15, 16, 17],
    [27, 26, 25, 24],
    [21, 22, 23, 24],
    [20, 19, 18, 17],
    [28, 29, 30, 31],
    [13, 12, 11, 10],
    [35, 36, 37, 38],
    [6, 5, 4, 3],
    [0, 7, 14, 21],
    [41, 34, 27, 20],
    [1, 8, 15, 22],
    [40, 33, 26, 19],
    [2, 9, 16, 23],
    [39, 32, 25, 18],
    [3, 10, 17, 24],
    [38, 31, 24, 17],
    [4, 11, 18, 25],
    [37, 30, 23, 16],
    [5, 12, 19, 26],
    [36, 29, 22, 15],
    [6, 13, 20, 27],
    [35, 28, 21, 14],
    [0, 8, 16, 24],
    [41, 33, 25, 17],
    [7, 15, 23, 31],
    [34, 26, 18, 10],
    [14, 22, 30, 38],
    [27, 19, 11, 3],
    [35, 29, 23, 17],
    [6, 12, 18, 24],
    [28, 22, 16, 10],
    [13, 19, 25, 31],
    [21, 15, 9, 3],
    [20, 26, 32, 38],
    [36, 30, 24, 18],
    [5, 11, 17, 23],
    [37, 31, 25, 19],
    [4, 10, 16, 22],
    [2, 10, 18, 26],
    [39, 31, 23, 15],
    [1, 9, 17, 25],
    [40, 32, 24, 16],
    [9, 17, 25, 33],
    [8, 16, 24, 32],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [1, 2, 3, 4],
    [5, 4, 3, 2],
    [8, 9, 10, 11],
    [12, 11, 10, 9],
    [15, 16, 17, 18],
    [19, 18, 17, 16],
    [22, 23, 24, 25],
    [26, 25, 24, 23],
    [29, 30, 31, 32],
    [33, 32, 31, 30],
    [36, 37, 38, 39],
    [40, 39, 38, 37],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
    ]

    const [moves, setMoves] = useState(emptyMoves)
    let currentPLayer = 1


    function reset() {
        // creates an array 0 - 41, for cell id's in renderCells
        const cellIndex = [...Array(42).keys()]
        // render cells
        const renderCells = cellIndex.map((id, index) => {
            return  <Cell className="cell" id={id} key={index} handleChoice={handleChoice}/>    
        });

        return renderCells
    }


    function checkBoard() {
        for (let i = 0; i < winningArrays.length; i++) {
            const cell1 = moves[winningArrays[i][0]]
            const cell2 = moves[winningArrays[i][1]]
            const cell3 = moves[winningArrays[i][2]]
            const cell4 = moves[winningArrays[i][3]]

            // // check those squares to see if they all have the class of player-one
            if (cell1.player === 'player-one' &&
                cell2.player === 'player-one' &&
                cell3.player === 'player-one' &&
                cell4.player === 'player-one'
            ){
                // add winner useState to stop game?
                console.log("Player One Wins!");
                reset()
            }
            // // check those squares to see if they all have the class of player-two
            if (cell1.player === 'player-two' &&
                cell2.player === 'player-two' &&
                cell3.player === 'player-two' &&
                cell4.player === 'player-two'
            ){
                // add winner useState to stop game?
                reset()
                console.log("Player Two Wins!");
            }

        }
    }

    const handleChoice = function(cell){  
        if (cell.id > 34 && !cell.classList.contains('taken')){   
            if (currentPLayer == 1 ) {
                moves[cell.id].player = 'player-one'
                cell.classList.add('taken')
                cell.classList.add('player-one')
                currentPLayer = 2
            } else if (currentPLayer == 2) {
                moves[cell.id].player = 'player-two'
                cell.classList.add('taken')
                cell.classList.add('player-two')
                currentPLayer = 1
            }
        } else if (cell.id < 35 && moves[parseInt(cell.id) + 7].player !== null && !cell.classList.contains('taken')){
            if (currentPLayer == 1 ) {
                moves[cell.id].player = 'player-one'
                cell.classList.add('taken')
                cell.classList.add('player-one')
                currentPLayer = 2
            } else if (currentPLayer == 2) {
                moves[cell.id].player = 'player-two'
                cell.classList.add('taken')
                cell.classList.add('player-two')
                currentPLayer = 1
            }
        } else alert('Cant go there');
        checkBoard()
        // console.log(moves);              //Todo Remove
    }

    return (
        
        <>
            <h3>The current player is : Player { currentPLayer }</h3>
            <h3 className="result"></h3>

            <div className="grid">
                {reset()}
            </div>
            
        </>

    )
}

export default Game;