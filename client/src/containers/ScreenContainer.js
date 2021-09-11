import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import GameBoardComponent from '../components/GameBoardComponent';
import ScoreComponent from '../components/ScoreComponent';
import FooterComponent from '../components/FooterComponent';

const ScreenContainer = () => {



    return (
        <>
        <HeaderComponent/>
        <h1>I am the screen container</h1>
        <GameBoardComponent/>
        <ScoreComponent/>
        <FooterComponent/>
        </>
    )

}

export default ScreenContainer