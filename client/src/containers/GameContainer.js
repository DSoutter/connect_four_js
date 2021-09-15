import React, {useEffect, useState} from 'react';
import HeaderComponent from '../components/HeaderComponent';
import ScoreComponent from '../components/ScoreComponent';
import FooterComponent from '../components/FooterComponent';
import GamesService from '../services/GameServices';
import BoardComponent from '../components/BoardComponent';
//we think we can call boardmaker (from the api component) here?
import ApiComponent from '../components/ApiComponent';

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

    const handleClick = (event) => {
        console.log(event.target);

        const cellId = parseInt(event.target.innerText);
        if (cellId > 41 && !game.board[cellId].player) {
            game.takeTurn(cellId)
            event.target.classList.add(`${game.board[cellId].player}`)
        }
        else if (!game.board[cellId].player && game.board[cellId+7].player){
            game.takeTurn(cellId)
            event.target.classList.add(`${game.board[cellId].player}`)
        } else {
            console.log('move not allowed');
        }

        const boardMaker = game.board.map(cell => {
            if (!cell.player) { return 0} 
            else {return parseInt(cell.player.slice(-1))}
        })

        // console.log(boardMaker());

    }

    return (
        <>
        <HeaderComponent/>
        <h1>I am the screen container</h1>
        <BoardComponent game={game} handleClick={handleClick}/>
        {/* <GameBoardComponent endGameResults={endGameResults}/> */}
        {/* <ScoreComponent games = {games}/> */}
        <FooterComponent/>
        </>
    )

}

export default GameContainer