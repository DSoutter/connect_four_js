import Game from '../models/Game';
import CellComponent from './CellComponent';
import ApiComponent from './ApiComponent';

const BoardComponent = ({game, handleClick}) => {
    const renderCells = game.board.map((cell) => {
        return <CellComponent cell={cell} id={cell.id} key={cell.id} handleClick={handleClick}/>
    })

    return (
        <>
        <div className='grid'>
            {renderCells}
        </div>
            <ApiComponent/>
        </>
    )
}

export default BoardComponent;