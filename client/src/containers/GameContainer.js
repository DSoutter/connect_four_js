import React, {useEffect, useState} from 'react';
import HeaderComponent from '../components/HeaderComponent';
import GameBoardComponent from '../components/_GameBoardComponent';
import ScoreComponent from '../components/ScoreComponent';
import FooterComponent from '../components/FooterComponent';
import GamesService from '../services/GameServices';
import BoardComponent from '../components/BoardComponent';

import Game from '../models/Game'




const GameContainer = () => {

    const [games, setGames] = useState([])
    const [game, setGame] = useState(null)

    useEffect(() => {
        GamesService.getGames()
        .then(games=> setGames(games))
        const game = new Game()
        game.newBoard()
        setGame(game)
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
           setGame(game)
        }
        else if (!game.board[cellId].player && game.board[cellId+7].player){
            game.takeTurn(cellId)
            setGame(game)
        } else {
            console.log('move not allowed');
        }
    }

    const handleResetClick = () => {
        game.newBoard();
        setGame(game)
    }

    const handleSelectClick = (event) => {

        const selectedCell = event.target.nextElementSibling.childNodes['45'].attributes['0'].nodeValue.trim()
        
        const id = parseInt(event.target.id)

        game.chooseColumn(id)

        // for (let i=id; i<48; i+=7) {
        //     if (event.target.nextElementSibling.childNodes[`${i}`].attributes['0'].nodeValue.trim() !== 'cell') {
        //         event.target.nextElementSibling.childNodes[`${i - 7}`].attributes['0'].nodeValue = `cell ${game.currentPlayer}`

        //         game.takeTurn(i-7)
        //     } else if (i+42 < 49) {  
        //         event.target.nextElementSibling.childNodes[`${i+42}`].attributes['0'].nodeValue = "cell player-1"

        //         game.takeTurn(i+42)
        //     }
        // }
        }

    const boardNode = (game) ? <BoardComponent game={game} handleClick={handleClick} handleSelectClick={handleSelectClick}/> : null

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