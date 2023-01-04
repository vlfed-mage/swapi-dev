import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from "../people-page";
import PlanetPage from "../planet-page";
import ErrorBoundary from "../error-boundary";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <RandomPlanet />

            <ErrorBoundary >
                <PeoplePage />
            </ErrorBoundary>

            <ErrorBoundary >
                <PlanetPage />
            </ErrorBoundary>

        </div>
    );
}

export default App;