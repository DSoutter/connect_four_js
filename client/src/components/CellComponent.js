import React from 'react';
import '../styles/Game.css'

const CellComponent = ({cell}) => {
    
    const playerClass = (cell.player) ? `player-${cell.player}` : ""

    return (
        <div className={`cell ${playerClass}`}> 
            {cell.id}
        </div>
    )
}

export default CellComponent;
