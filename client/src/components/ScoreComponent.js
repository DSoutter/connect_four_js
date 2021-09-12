import React, {useEffect, useState} from 'react';

const ScoreComponent = ({scores}) => {



    return (
        <>
            <h3>I'm the Score Component</h3>
            {scores.map(score => {
                return (
                    <p key={score.playerName}>Player {score.playerName} has {score.playerWins} wins</p>
                )
            })}
        </>
    )

}

export default ScoreComponent