import React, {useEffect, useState} from 'react';

const GameBoardComponent = ({endGameResults}) => {

    const startGameBoard = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ]

    const gameBoard = startGameBoard

    const handleSubmit = (event) => {
        event.preventDefault()
        const results = {
            results: gameBoard,
            winner: player
        }
        console.log(player)

        endGameResults(results)
        gameBoard = startGameBoard
    }

    let player = 1

    const handleOnClick = (event) => {
        event.preventDefault()
        let proceed = "can do"
        const index = event.target.value-1
        if (gameBoard[6][index] === 0){
            gameBoard[6][index] = player
        } else if (gameBoard[5][index] === 0){
            gameBoard[5][index] = player
        } else if (gameBoard[4][index] === 0){
            gameBoard[4][index] = player
        } else if (gameBoard[3][index] === 0){
            gameBoard[3][index] = player
        } else if (gameBoard[2][index] === 0){
            gameBoard[2][index] = player
        } else if (gameBoard[1][index] === 0){
            gameBoard[1][index] = player
        } else if (gameBoard[0][index] === 0){
            gameBoard[0][index] = player
        } else {
            proceed = "can't do"
            console.log("can't do")
        }

        if (proceed === "can do") {
            if (player - 2 === 0){
            player = 1} else {
                player = 2
        }}

        console.log(startGameBoard)
        
    }

    return (
        <div>
            I'm the GameBoardComponent
            <form onSubmit={handleSubmit}>
                <button id='columnOne' for='columnOne' value='1' onClick={handleOnClick}>1</button>
                <button id='columnTwo' for='columnTwo' value='2' onClick={handleOnClick}>2</button>
                <button id='columnThree' for='columnThree' value='3' onClick={handleOnClick}>3</button>
                <button id='columnFour' for='columnFour' value='4' onClick={handleOnClick}>4</button>
                <button id='columnFive' for='columnFive' value='5' onClick={handleOnClick}>5</button>
                <button id='columnSix' for='columnSix' value='6' onClick={handleOnClick}>6</button>
                <button id='columnSeven' for='columnSeven' value='7' onClick={handleOnClick}>7</button>
                <input type='submit' name='winner' for='winner' value = 'Win'/>
            </form>
            {/* {gameBoard} */}
        </div>
    )

}

export default GameBoardComponent