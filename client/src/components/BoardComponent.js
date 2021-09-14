import Game from '../models/Game';
import CellComponent from './CellComponent';
import '../styles/OtherComponent.css'

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