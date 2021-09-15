import React from 'react';
import '../styles/Header.css'


const HeaderComponent = ({handleResetClick}) => {




    return (
        <>
        <div className="header" >
            STAR WARS Connect-4
        
        <button className='resetButton' onClick={handleResetClick}>Not the droids you're looking for?</button>
        </div>
        </>
    )

}

export default HeaderComponent;