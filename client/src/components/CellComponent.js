import React from 'react';
import '../styles/Game.css'

const CellComponent = ({cell, handleClick}) => {
    
    const playerClass = (cell.player) ? `player-${cell.player}` : ""

    return (
        <div className={`cell ${playerClass}`} onClick={handleClick}> 
            {cell.id}
        </div>
    )
}

export default CellComponent;
