import Game from '../models/Game';
import CellComponent from './CellComponent';
import ApiComponent from './ApiComponent';

const BoardComponent = ({game, board, handleClick, handleSelectClick}) => {
    const renderCells = board.map((cell) => {
        return <CellComponent player={cell.player} winning={cell.winning} id={cell.id} key={cell.id} handleClick={handleClick}/>
    })

    return (
        <>
            <button id="0" onClick ={handleSelectClick}>Column 1</button>
            <button id="1" onClick ={handleSelectClick}>Column 2</button>
            <button id="2" onClick ={handleSelectClick}>Column 3</button>
            <button id="3" onClick ={handleSelectClick}>Column 4</button>
            <button id="4" onClick ={handleSelectClick}>Column 5</button>
            <button id="5" onClick ={handleSelectClick}>Column 6</button>
            <button id="6" onClick ={handleSelectClick}>Column 7</button>

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