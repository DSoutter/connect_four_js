import React, {useEffect, useState} from "react";


const ApiComponent = () => {

    const [computerMoves, setComputerMoves] = useState([])

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

    // if (computerMoves.length) {
    //     return <p>Loading...</p>
    // }



    // find the highest value in the array of 7...
    // const bestMove = (computerMoves) => {
    //     if (computerMoves.length >0) {
    //     let currentBest = (computerMoves[0][0])
    //     console.log(currentBest)
    //     for (let i=1; computerMoves.length; i++){
    //         if (computerMoves[i][1] > currentBest) {
    //             currentBest = computerMoves[i][1]
    //         }
    //     }
    //     return currentBest
    // } else {
    //     return null
    // }
    // }
    
    // bestMove(computerMoves)

    return (
        <>
        {/* we want to display the max index 1 (value) of the seven arrays */}
        <p>The best move is column {(computerMoves)}</p>
        </>
    )
}

export default ApiComponent

// const getConversions = function() {
//     fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${selectedCurrency[0]}.json`)
//     .then(response => response.json())
//     .then(conversion => setConversions(conversion[selectedCurrency[0]]))
// }