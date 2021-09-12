import React, {useEffect, useState} from 'react';
import HeaderComponent from '../components/HeaderComponent';
import GameBoardComponent from '../components/GameBoardComponent';
import ScoreComponent from '../components/ScoreComponent';
import FooterComponent from '../components/FooterComponent';
import GamesService from '../services/GameServices'


const ScreenContainer = () => {

    const [scores, setScores] = useState([])
    const [games, setGames] = useState([])

    useEffect(() => {
        GamesService.getScores()
        .then(scores => setScores(scores))
        console.log(scores)
    }, []) 

    const endGameResults = finishedGame => {
        GamesService.postGame(finishedGame)
        .then(savedGames => setGames([...games, savedGames]))
    }

    return (
        <>
        <HeaderComponent/>
        <h1>I am the screen container</h1>
        <GameBoardComponent endGameResults={endGameResults}/>
        <ScoreComponent scores={scores}/>
        <FooterComponent/>
        </>
    )

}

export default ScreenContainer