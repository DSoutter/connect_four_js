import Game from '../models/Game';
import CellComponent from './CellComponent';
import '../styles/OtherComponent.css'
import ApiComponent from './ApiComponent';
import { useState } from 'react'

const determineHighlight = (column, hintColumn) => {
    return (column === hintColumn) ? "highlight" : ""
}

const BoardComponent = ({game, board, handleClick, handleSelectClick}) => {
    // hintColumn is a number which is the best column
    const [hintColumn, setHintColumn] = useState(null)

    const onSelectClick = (column) => {
        setHintColumn(null)
        handleSelectClick(column)
    }

    const renderCells = board.map((cell) => {
        return <CellComponent player={cell.player} winning={cell.winning} id={cell.id} key={cell.id} handleClick={onSelectClick}/>
    })

    return (
        <>
            <div className ='selectButtons'>
                <button id="0" className={`slot-${game.currentPlayer} ${determineHighlight(0, hintColumn)}`} onClick ={() => onSelectClick(0)}></button>
                <button id="1" className={`slot-${game.currentPlayer} ${determineHighlight(1, hintColumn)}`} onClick ={() => onSelectClick(1)}></button>
                <button id="2" className={`slot-${game.currentPlayer} ${determineHighlight(2, hintColumn)}`} onClick ={() => onSelectClick(2)}></button>
                <button id="3" className={`slot-${game.currentPlayer} ${determineHighlight(3, hintColumn)}`} onClick ={() => onSelectClick(3)}></button>
                <button id="4" className={`slot-${game.currentPlayer} ${determineHighlight(4, hintColumn)}`} onClick ={() => onSelectClick(4)}></button>
                <button id="5" className={`slot-${game.currentPlayer} ${determineHighlight(5, hintColumn)}`} onClick ={() => onSelectClick(5)}></button>
                <button id="6" className={`slot-${game.currentPlayer} ${determineHighlight(6, hintColumn)}`} onClick ={() => onSelectClick(6)}></button>
            </div>

            <div className='grid' onClick= {(event) => {
                console.log(event.target)
            }}>

                {renderCells}

            </div>
            <ApiComponent game={game} handleHintUpdate={(newHint) => setHintColumn(newHint)} />
        </>
    )
}

export default BoardComponent;