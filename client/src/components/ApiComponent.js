import React, {useEffect, useState} from "react";
import Game from '../models/Game'
import '../styles/Game.css'
import '../styles/OtherComponent.css'

function compareFn (firstEl, secondEl) {
    if (firstEl[1] > secondEl[1]) {
        return -1
    } if (firstEl[1] < secondEl[1]) {
        return 1
    } else {
        return 0
    }
}

const ApiComponent = ({game, handleHintUpdate}) => {

    const [computerMoves, setComputerMoves] = useState(null)
    const [moveList, setMoveList] = useState([])
    // const [bestMove, setBestMove] = useState(null)

    useEffect(() => {
        if (computerMoves) {
            const thisArray = Object.entries(computerMoves).sort(compareFn)
            console.log(thisArray)
            console.log(thisArray[0]);
            const bestColumn = thisArray[0][0];
            handleHintUpdate(parseInt(bestColumn))
            setComputerMoves(null)
        }
    }, [computerMoves])

    const apiResponse = function () {
        let currentBoard = game.boardMaker().join("")

        fetch(`http://kevinalbs.com/connect4/back-end/index.php/getMoves?board_data=${currentBoard}&player=${game.currentPlayer}`)
        .then(res => res.json())
        .then(moves => setComputerMoves(moves));
        
    }

    // useEffect(() => {
    //     apiResponse()
    // }
    //     ,[])
    const handleApiClick = function () {
        apiResponse()
    }
    
    if (!computerMoves) {
        return (
        <button className='hintButton' onClick={handleApiClick}>Use the Force</button>)
    } else { 

    const boardMaker = game.board.map(cell => {
        if (!cell.player) { return 0} 
        else {return cell.player}
    })
    


    // const secondBest = thisArray[1][0]
    

        return (
            <>
                {/* we want to display the max index 1 (value) of the seven arrays */}
                {/* <p> Here's the board: {game.board[1].player}</p> */}
                <button className='hintButton' onClick={handleApiClick}>Use the Force</button>
            </>
        )
        }
    }

export default ApiComponent

