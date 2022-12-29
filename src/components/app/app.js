import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from "../people-page";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <RandomPlanet/>

            <PeoplePage />
        </div>
    );
};

export default App;