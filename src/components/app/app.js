import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetPage, StarshipPage } from "../pages";

import { ApiServices } from "../../api-services";
import ApiServicesContext from "../sw-service-context";
import ErrorBoundary from "../error-boundary";

const App = () => {
    const apiServices = ApiServices();

    return (
        <div className='app-wrapper'>
            <ApiServicesContext.Provider value={ apiServices }>
                <ErrorBoundary>
                    <Header />
                </ErrorBoundary>
                <ErrorBoundary>
                    <RandomPlanet />
                </ErrorBoundary>

                <PeoplePage />
                <PlanetPage />
                <StarshipPage />
            </ApiServicesContext.Provider>
        </div>
    );
}

export default App;