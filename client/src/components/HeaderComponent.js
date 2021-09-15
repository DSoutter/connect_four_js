import React from 'react';
import '../styles/Header.css'

const HeaderComponent = ({handleResetClick}) => {




    return (
        <>
        <div className="header" >
            STAR WARS Connect-4 </div>
        <div>
            <button onClick={handleResetClick}>Reset</button>
        </div>
        </>
    )

}

export default HeaderComponent;