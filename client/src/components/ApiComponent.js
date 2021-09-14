import React, {useEffect, useState} from "react";


const ApiComponent = () => {

    const [computerMoves, setComputerMoves] = useState(null)

    const apiResponse = function () {
        fetch(`http://kevinalbs.com/connect4/back-end/index.php/getMoves?board_data=0000000000000000020000001200000210000021001012100&player=2`)
        .then(res => res.json())
        .then(moves => setComputerMoves(Object.entries(moves)));
        console.log("This should be the computerMoves", computerMoves);
    }

    useEffect(() => 
    {
        apiResponse()}
        ,[])

    if (!computerMoves) {
        return <p>Loading...</p>
    }



    // find the highest value in the array of 7...
    const bestMove = (computerMoves) => {
        let currentBest = 1+ parseInt(computerMoves[0][0])
        console.log(currentBest)
        return currentBest
    }
    
    bestMove(computerMoves)

    return (
        <>
        {/* we want to display the max index 1 (value) of the seven arrays */}
        <p>The best move is column {bestMove(computerMoves)}</p>
        </>
    )
}

export default ApiComponent

// const getConversions = function() {
//     fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${selectedCurrency[0]}.json`)
//     .then(response => response.json())
//     .then(conversion => setConversions(conversion[selectedCurrency[0]]))
// }