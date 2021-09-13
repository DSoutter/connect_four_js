import Game from '../models/Game';
import CellComponent from './CellComponent';

const BoardComponent = ({game}) => {
    const renderCells = game.board.map((cell) => {
        return <CellComponent cell={cell} key={cell.id}/>
    })

    return (
        <div className='grid'>
            {renderCells}
        </div>
    )
}

export default BoardComponent;