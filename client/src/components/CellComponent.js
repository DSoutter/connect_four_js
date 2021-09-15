import React from 'react';
import '../styles/Game.css'

const CellComponent = ({player, winning, id, handleClick}) => {
    
    const playerClass = (player) ? `${player}` : ""

    return (
        <div className={`small cell ${playerClass}`} onClick={() => handleClick(id % 7)}> 
            {id}
        </div>
    )
}

export default CellComponent;
