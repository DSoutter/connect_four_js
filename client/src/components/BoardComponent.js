import Game from '../models/Game';
import CellComponent from './CellComponent';
import '../styles/OtherComponent.css'
import ApiComponent from './ApiComponent';

const BoardComponent = ({game, board, handleClick, handleSelectClick}) => {
    const renderCells = board.map((cell) => {
        return <CellComponent player={cell.player} winning={cell.winning} id={cell.id} key={cell.id} handleClick={handleClick}/>
    })

    console.log("#### Has Won", game.hasWon);
    console.log("#####game.currentPLayer", game.currentPlayer);


    let winner;
    if (!game.hasWon){
        return (
            <>
                {/* {winner ? <h2>Winner PLayer {winner}</h2> : false} */}

                <div className ='selectButtons'>
                    <button id="0" className={`slot-${game.currentPlayer}`} onClick ={handleSelectClick}></button>
                    <button id="1" className={`slot-${game.currentPlayer}`} onClick ={handleSelectClick}></button>
                    <button id="2" className={`slot-${game.currentPlayer}`} onClick ={handleSelectClick}></button>
                    <button id="3" className={`slot-${game.currentPlayer}`} onClick ={handleSelectClick}></button>
                    <button id="4" className={`slot-${game.currentPlayer}`} onClick ={handleSelectClick}></button>
                    <button id="5" className={`slot-${game.currentPlayer}`} onClick ={handleSelectClick}></button>
                    <button id="6" className={`slot-${game.currentPlayer}`} onClick ={handleSelectClick}></button>
                </div>

                <div className='grid' onClick= {(event) => {
                    console.log(event.target)
                }}>

                    {renderCells}

                </div>
                <ApiComponent game={game}/>
            </>
        )
    } else {
        if (game.currentPlayer === 1){
            winner = 2
        }else {
            winner = 1
        }
        console.log("#####Winner", winner);

        return (
            <>
                
                <h2 className={`winner-${winner}`}>Winner! Player {winner} is the chosen one</h2>

                <div className='grid' onClick= {(event) => {
                    console.log(event.target)
                }}>

                    {renderCells}

                </div>
                <ApiComponent game={game}/>
            </>
        )
    }
}

export default BoardComponent;