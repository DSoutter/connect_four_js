import React, {useEffect, useState} from "react";


const ApiComponent = () => {

    const [computerMove, setComputerMove] = useState(null)

    const apiResponse = function () {
        fetch(`http://kevinalbs.com/connect4/back-end/index.php/getMoves?board_data=0000000000000000020000001200000210000021001012100&player=2`)
        .then(res => res.json())
        .then(move => setComputerMove(Object.entries(move)));
        console.log("This should be the computerMove", computerMove);
    }

    useEffect(() => 
    {
        apiResponse()}
        ,[])

    if (!computerMove) {
        return <p>Loading...</p>
    }



    // const apiArray = move.map
    

    return (
        <>
        {/* we want to display the max index 1 (value) of the seven arrays */}
        <p>The best move is </p>
        </>
    )
}

export default ApiComponent

// const getConversions = function() {
//     fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${selectedCurrency[0]}.json`)
//     .then(response => response.json())
//     .then(conversion => setConversions(conversion[selectedCurrency[0]]))
// }