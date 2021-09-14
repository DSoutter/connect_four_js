import Game from '../models/Game';
import CellComponent from './CellComponent';

const BoardComponent = ({game, handleClick, handleSelectClick}) => {
    const renderCells = game.board.map((cell) => {
        return <CellComponent cell={cell} id={cell.id} key={cell.id} handleClick={handleClick}/>
    })

    return (
        <>
            <button id="0" onClick ={handleSelectClick}>Column 1</button>
            
            <div className='grid' onClick= {(event) => {
                console.log(event.target)
            }}>

                {renderCells}

            </div>
        </>
    )
}

export default BoardComponent;