import React, {useEffect, useState} from 'react';
import HeaderComponent from '../components/HeaderComponent';
import GameBoardComponent from '../components/GameBoardComponent';
import ScoreComponent from '../components/ScoreComponent';
import FooterComponent from '../components/FooterComponent';

const ScreenContainer = () => {

    const [scores, setScores] = useState('')

    // useEffect(() => {
    //     fetchScores()
    //     console.log(scores);
    // }, [])

    // const fetchScores = () => {
    //     fetch('http://localhost:5000/api/scores')
    //     .then(res => res.json())
    //     .then(scores => setScores(scores));
    // }



    return (
        <>
        <HeaderComponent/>
        <h1>I am the screen container</h1>
        <GameBoardComponent/>
        {/* <ScoreComponent scores={scores}/> */}
        <FooterComponent/>
        </>
    )

}

export default ScreenContainer