import React from 'react';

const ScoreComponent = ({games}) => {

    console.log("hi", games.length)
    let playerOne = 0
    let playerTwo = 0

    for (let i = 0; i<games.length; i++){
        if (games[i].winner === 1) {
            playerOne ++
        } else if (games[i].winner === 2) {
            playerTwo ++
            }
        }
    

    // for (let step = 0; step < 5; step++) {
    //     // Runs 5 times, with values of step 0 through 4.
    //     console.log('Walking east one step');
    //   }

    return (
        <>
            <h3>I'm the Score Component</h3>
            <p>Player 1 has won: {playerOne}</p>
            <p>Player 2 has won: {playerTwo} </p>
        </>
    )

}

export default ScoreComponent