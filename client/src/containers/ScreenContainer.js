import React, {useEffect, useState} from 'react';
import HeaderComponent from '../components/HeaderComponent';
import GameBoardComponent from '../components/GameBoardComponent';
import ScoreComponent from '../components/ScoreComponent';
import FooterComponent from '../components/FooterComponent';
import GamesService from '../services/GameServices'


const ScreenContainer = () => {

    const [games, setGames] = useState([{winner : 0}])

    useEffect(() => {
        GamesService.getGames()
        .then(games=> setGames(games))
        // console.log(games[0])
    }, []) 

    const endGameResults = finishedGame => {
        GamesService.postGame(finishedGame)
        .then(savedGames => setGames([...games, savedGames]))
        console.log(games)
    }

    return (
        <>
        <HeaderComponent/>
        <h1>I am the screen container</h1>
        <GameBoardComponent endGameResults={endGameResults}/>
        <ScoreComponent games = {games}/>
        <FooterComponent/>
        </>
    )

}

export default ScreenContainer