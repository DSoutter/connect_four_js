import React from 'react';
import '../styles/OtherComponent.css'

const ScoreComponent = ({games}) => {

    console.log("This should display only once", games.length)
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
            {/* <h3>I'm the Score Component</h3> */}
            <h3 className="score"><span>  Score player one: {playerOne} player two: {playerTwo}  </span></h3>
        </>
    )

}

export default ScoreComponent