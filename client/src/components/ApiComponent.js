import React, {useEffect, useState} from "react";
import Game from '../models/Game'
import '../styles/Game.css'
import '../styles/OtherComponent.css'

const ApiComponent = ({game}) => {

    const [computerMoves, setComputerMoves] = useState([])
    const [moveList, setMoveList] = useState([])


    
    console.log(`heres the game board length: ${game.board.length}`);

    const apiResponse = function () {
        let currentBoard = game.boardMaker().join("")

        fetch(`http://kevinalbs.com/connect4/back-end/index.php/getMoves?board_data=${currentBoard}&player=2`)
        .then(res => res.json())
        .then(moves => setComputerMoves(Object.values(moves)));
        
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
        <button className='hintButton' onClick={handleApiClick}>Use the Force</button>)
    } else { 

    const boardMaker = game.board.map(cell => {
        if (!cell.player) { return 0} 
        else {return cell.player}
    })
    

        return (
            <>
            {/* we want to display the max index 1 (value) of the seven arrays */}
            {/* <p> Here's the board: {game.board[1].player}</p> */}
            <button className='hintButton' onClick={handleApiClick}>Use the Force</button>
            
            <p id='hint'>The column's relative strengths are: {(computerMoves)}</p>

            </>
        )
    }}

export default ApiComponent

