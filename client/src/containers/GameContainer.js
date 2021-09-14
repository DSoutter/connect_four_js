import React, {useEffect, useState} from 'react';
import HeaderComponent from '../components/HeaderComponent';
import GameBoardComponent from '../components/_GameBoardComponent';
import ScoreComponent from '../components/ScoreComponent';
import FooterComponent from '../components/FooterComponent';
import GamesService from '../services/GameServices';
import BoardComponent from '../components/BoardComponent';

import Game from '../models/Game'




const GameContainer = () => {

    const game = new Game();
    game.newBoard()

    const [games, setGames] = useState([])

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
        <BoardComponent game={game}/>
        <GameBoardComponent/>
        <ScoreComponent games = {games}/>
        <FooterComponent/>
        </>
    )

}

export default GameContainer