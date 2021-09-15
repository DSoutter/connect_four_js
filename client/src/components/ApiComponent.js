import React, {useEffect, useState} from "react";
import Game from '../models/Game'
import '../styles/Game.css'

const ApiComponent = ({game}) => {

    const [computerMoves, setComputerMoves] = useState([])
    const [moveList, setMoveList] = useState([])


    
    // console.log(`heres the game board length: ${game.board.length}`);

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


    // console.log(computerMoves)}

    // find the highest value in the array of 7...
    const bestMove = (computerMoves) => {
        let currentBest = (computerMoves[0])
        if (computerMoves.length >0) {
        return currentBest
    }}
    
    if (computerMoves.length === 0) {
        return (
        <button onClick={handleApiClick}>Use the Force?</button>)
    } else { 

    const boardMaker = game.board.map(cell => {
        if (!cell.player) { return 0} 
        else {return cell.player}
    })
    
    function compareFn (firstEl, secondEl) {
        if (firstEl[1] > secondEl[1]) {
            return -1
        } if (firstEl[1] < secondEl[1]) {
            return 1
        } else {
            return 0
        }
    }

    const thisArray = Object.entries(computerMoves).sort(compareFn)
    console.log(thisArray)
    console.log(thisArray[0]);
    const bestColumn = thisArray[0][0];
    // const secondBest = thisArray[1][0]
    

        return (
            <>
            
            <button onClick={handleApiClick}>Use the Force?</button>
            
            <p id='hint'>Best Column: {bestColumn}</p>

            </>
        )
        }
    }

export default ApiComponent

