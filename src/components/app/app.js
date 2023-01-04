import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from "../people-page";
import PlanetPage from "../planet-page";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <RandomPlanet />

            <PeoplePage />
            <PlanetPage />
        </div>
    );
}

export default App;