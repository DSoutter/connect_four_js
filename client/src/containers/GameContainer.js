import React, {useEffect, useState} from 'react';
import HeaderComponent from '../components/HeaderComponent';
import ScoreComponent from '../components/ScoreComponent';
import FooterComponent from '../components/FooterComponent';
import GamesService from '../services/GameServices';
import BoardComponent from '../components/BoardComponent';
//we think we can call boardmaker (from the api component) here?
import ApiComponent from '../components/ApiComponent';
import "../styles/OtherComponent.css"

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

    // const handleClick = (cellId) => {
    //     if (!game.hasWon) {
    //         if (cellId > 41 && !game.board[cellId].player) {
    //             game.takeTurn(cellId)
    //             let updatedGame = new Game(game.players, game.board, game.currentPlayer, game.hasWon)
    //             setGame(updatedGame)
    //         }
    //         else if (!game.board[cellId].player && game.board[cellId+7].player){
    //             game.takeTurn(cellId)
    //             let updatedGame = new Game(game.players, game.board, game.currentPlayer, game.hasWon)
    //             setGame(updatedGame)
    //         } else {
    //             console.log('move not allowed');
    //         }
    //     }

    //     const boardMaker = game.board.map(cell => {
    //         if (!cell.player) { return 0} 
    //         else {return parseInt(cell.player.slice(-1))}
    //     })

    //     // console.log(boardMaker());

    // }

    const handleResetClick = () => {
        game.newBoard();
        let updatedGame = new Game(game.players, game.board)
        setGame(updatedGame)
    }

    const handleSelectClick = (column) => {
        console.log("has won logging", game.hasWon)
        if (!game.hasWon) {
            game.chooseColumn(column)
            let updatedGame = new Game(game.players, game.board, game.currentPlayer, game.hasWon)
            setGame(updatedGame)
        } else{
            console.log('srs, its gg');
        }
        }

    const boardNode = (board) ? <BoardComponent game={game} board={board} hintColumn={3} handleSelectClick={handleSelectClick}/> : null

    return (
        <div id="game-container">
            <HeaderComponent handleResetClick={handleResetClick}/>
            <div>
                <ScoreComponent games = {games}/>
                {boardNode}
                <audio src="../sound/imperial_march.mp3"></audio>
            </div>
            <FooterComponent/>
        </div>
    )

}

export default GameContainer