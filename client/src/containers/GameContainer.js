import React, {useEffect, useState} from 'react';
import HeaderComponent from '../components/HeaderComponent';
import ScoreComponent from '../components/ScoreComponent';
import FooterComponent from '../components/FooterComponent';
import GamesService from '../services/GameServices';
import BoardComponent from '../components/BoardComponent';

import Game from '../models/Game'




const GameContainer = () => {

    const [games, setGames] = useState([])
    const [game, setGame] = useState(null)
    const [board, setBoard] = useState(null)

    useEffect(() => {
        GamesService.getGames()
        .then(games=> setGames(games))
        const game = new Game()
        game.newBoard()
        setGame(game)
    }, []) 

    useEffect(() => {
        if (game) {
            setBoard([...game.board])
        }
    }, [game])

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
            let updatedGame = new Game(game.players, game.board, game.currentPlayer)
           setGame(updatedGame)
        }
        else if (!game.board[cellId].player && game.board[cellId+7].player){
            game.takeTurn(cellId)
            let updatedGame = new Game(game.players, game.board, game.currentPlayer)
            setGame(updatedGame)
        } else {
            console.log('move not allowed');
        }
    }

    const handleResetClick = () => {
        game.newBoard();
        let updatedGame = new Game(game.players, game.board, game.currentPlayer)
        setGame(updatedGame)
    }

    const handleSelectClick = (event) => {
        
        const id = parseInt(event.target.id)

        game.chooseColumn(id)
        let updatedGame = new Game(game.players, game.board, game.currentPlayer)
        setGame(updatedGame)
    
        }

    const boardNode = (board) ? <BoardComponent board={board} handleClick={handleClick} handleSelectClick={handleSelectClick}/> : null

    return (
        <>
        <HeaderComponent handleResetClick={handleResetClick}/>
        <h1>I am the screen container</h1>
        {boardNode}
        {/* <GameBoardComponent endGameResults={endGameResults}/> */}
        {/* <ScoreComponent games = {games}/> */}
        <FooterComponent/>
        </>
    )

}

export default GameContainer