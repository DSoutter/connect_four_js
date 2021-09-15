import Game from '../models/Game';
import CellComponent from './CellComponent';
import '../styles/OtherComponent.css'
import ApiComponent from './ApiComponent';

const determineHighlight = (column, hintColumn) => {
    return (column === hintColumn) ? "highlight" : ""
}

const BoardComponent = ({game, board, handleClick, handleSelectClick, hintColumn}) => {
    // hintColumn is a number which is the best column
    const renderCells = board.map((cell) => {
        return <CellComponent player={cell.player} winning={cell.winning} id={cell.id} key={cell.id} handleClick={handleClick}/>
    })

    return (
        <>
            <div className ='selectButtons'>
                <button id="0" className={`slot-${game.currentPlayer} ${determineHighlight(0, hintColumn)}`} onClick ={handleSelectClick}></button>
                <button id="1" className={`slot-${game.currentPlayer} ${determineHighlight(1, hintColumn)}`} onClick ={handleSelectClick}></button>
                <button id="2" className={`slot-${game.currentPlayer} ${determineHighlight(2, hintColumn)}`} onClick ={handleSelectClick}></button>
                <button id="3" className={`slot-${game.currentPlayer} ${determineHighlight(3, hintColumn)}`} onClick ={handleSelectClick}></button>
                <button id="4" className={`slot-${game.currentPlayer} ${determineHighlight(4, hintColumn)}`} onClick ={handleSelectClick}></button>
                <button id="5" className={`slot-${game.currentPlayer} ${determineHighlight(5, hintColumn)}`} onClick ={handleSelectClick}></button>
                <button id="6" className={`slot-${game.currentPlayer} ${determineHighlight(6, hintColumn)}`} onClick ={handleSelectClick}></button>
            </div>

            <div className='grid' onClick= {(event) => {
                console.log(event.target)
            }}>

                {renderCells}

            </div>
            <ApiComponent game={game}/>
        </>
    )
}

export default BoardComponent;