import Game from '../models/Game'

const BoardComponent = ({game}) => {



    return (
        <>
        <p>Hey I'm the brand new board component {game.board.length}</p>
        </>
    )
}




export default BoardComponent