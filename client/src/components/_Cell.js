import React, { useState } from 'react';

const Grid = ({className, id, handleChoice}) => {

    

    const handleClick = (e) => {
        handleChoice(e.target)
    }
    
    return (
        <>
            <div onClick={handleClick} className={className} id={id}></div>
        </>
    )

}

export default Grid;