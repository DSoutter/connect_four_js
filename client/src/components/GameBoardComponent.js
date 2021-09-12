import React, {useEffect, useState} from 'react';

const GameBoardComponent = ({gameResults}) => {

    const startGameBoard = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ]

    gameResults = {
        results: startGameBoard,
        winner: "Player One"
    }
    let player = 1


    const handleOnClick = (event) => {
        event.preventDefault()
        let proceed = "can do"
        const index = event.target.value-1
        if (startGameBoard[6][index] === 0){
            startGameBoard[6][index] = player
        } else if (startGameBoard[5][index] === 0){
            startGameBoard[5][index] = player
        } else if (startGameBoard[4][index] === 0){
            startGameBoard[4][index] = player
        } else if (startGameBoard[3][index] === 0){
            startGameBoard[3][index] = player
        } else if (startGameBoard[2][index] === 0){
            startGameBoard[2][index] = player
        } else if (startGameBoard[1][index] === 0){
            startGameBoard[1][index] = player
        } else if (startGameBoard[0][index] === 0){
            startGameBoard[0][index] = player
        } else {
            proceed = "can't do"
            console.log("can't do")
        }

        if (proceed === "can do") {
            if (player - 2 === 0){
            player = 1} else {
                player = 2
        }}

        console.log(event.target.value)
        console.log(startGameBoard)
        
    }

    return (
        <div>
            I'm the GameBoardComponent
            <form>
                <button id='columnOne' for='columnOne' value='1' onClick={handleOnClick}>1</button>
                <button id='columnTwo' for='columnTwo' value='2' onClick={handleOnClick}>2</button>
                <button id='columnThree' for='columnThree' value='3' onClick={handleOnClick}>3</button>
                <button id='columnFour' for='columnFour' value='4' onClick={handleOnClick}>4</button>
                <button id='columnFive' for='columnFive' value='5' onClick={handleOnClick}>5</button>
                <button id='columnSix' for='columnSix' value='6' onClick={handleOnClick}>6</button>
                <button id='columnSeven' for='columnSeven' value='7' onClick={handleOnClick}>7</button>
            </form>
            {/* {gameBoard} */}
        </div>
    )

}

export default GameBoardComponent