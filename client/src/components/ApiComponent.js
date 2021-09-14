import React, {useEffect, useState} from "react";
import Game from '../models/Game'


const ApiComponent = ({game}) => {

    const [computerMoves, setComputerMoves] = useState([])
    const [moveList, setMoveList] = useState([])


    
    console.log(`heres the game board length: ${game.board.length}`);

    const apiResponse = function () {
        let currentBoard = game.boardMaker().join("")

        fetch(`http://kevinalbs.com/connect4/back-end/index.php/getMoves?board_data=${currentBoard}&player=2`)
        .then(res => res.json())
        .then(moves => setComputerMoves(Object.values(moves)));
        // console.log("This should be the computerMoves", computerMoves);
    }

    useEffect(() => {
        apiResponse()
    }
        ,[])



    // console.log(computerMoves)}

    // find the highest value in the array of 7...
    const bestMove = (computerMoves) => {
        let currentBest = (computerMoves[0])
        if (computerMoves.length >0) {
    //     for (let i=0; computerMoves.length; i++){
    //         console.log(`this is run number ${i}`);
    //         if (computerMoves[i] > currentBest) {
    //             currentBest = computerMoves[i]
    //         }
    //     }
    //     return currentBest
    // } else {
    //     return null
    // }
        // console.log(currentBest)
        return currentBest
    }}
    
    if (computerMoves.length === 0) {
        return <p>Loading...</p>
    } else { 

    const boardMaker = game.board.map(cell => {
        if (!cell.player) { return 0} 
        else {return cell.player}
    })
    

        return (
            <>
            {/* we want to display the max index 1 (value) of the seven arrays */}
            {/* <p> Here's the board: {game.board[1].player}</p> */}
            <button onClick={apiResponse}>Want a hint?</button>
            <p>The best move is column {(computerMoves)}</p>

            </>
        )
    }}

export default ApiComponent

