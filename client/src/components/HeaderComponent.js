import React from 'react';

const HeaderComponent = ({handleResetClick}) => {




    return (
        <div>
            I'm the Header
            <button onClick={handleResetClick}>Reset</button>
        </div>
    )

}

export default HeaderComponent