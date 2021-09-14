import React, {useEffect, useState} from "react";


const ApiComponent = () => {

    const [computerMoves, setComputerMoves] = useState([])

    const apiResponse = function () {
        fetch(`http://kevinalbs.com/connect4/back-end/index.php/getMoves?board_data=0000000000000000020000001200000210000021001012100&player=2`)
        .then(res => res.json())
        .then(moves => setComputerMoves(Object.values(moves)));
        console.log("This should be the computerMoves", computerMoves);
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
        console.log(currentBest)
        return currentBest
    }}
    
    if (computerMoves.length === 0) {
        return <p>Loading...</p>
    } else { 
    
        console.log(bestMove(computerMoves));

        return (
            <>
            {/* we want to display the max index 1 (value) of the seven arrays */}
            <p>The best move is column {(computerMoves)}</p>
            </>
        )
    }}

export default ApiComponent

// const getConversions = function() {
//     fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${selectedCurrency[0]}.json`)
//     .then(response => response.json())
//     .then(conversion => setConversions(conversion[selectedCurrency[0]]))
// }