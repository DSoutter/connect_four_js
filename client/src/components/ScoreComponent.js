import React, {useEffect, useState} from 'react';

const ScoreComponent = ({scores}) => {



    return (
        <>
            <h3>I'm the Score Component</h3>
            {/* <h4>Hi {scores[0].playerName}</h4> */}
            {scores.map(score => {
                return (
                    <p key={score.playerName}>Player {score.playerName} has {score.playerWins} wins</p>
                )
            })}
           {/* <p>Player 1 wins: {scores[0].playerWins}</p>
           <p>Player 2 wins: {scores[1].playerWins}</p> */}
           
        </>
    )

}

export default ScoreComponent