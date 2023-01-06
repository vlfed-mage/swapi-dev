import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetPage, StarshipPage } from "../pages";

import ApiServices from "../../api-services";
import { ApiServiceProvider } from "../sw-service-context";

const App = () => {
    const apiServices = new ApiServices();

    return (
        <div className='app-wrapper'>
            <ApiServiceProvider value={ apiServices }>
                <Header />
                <RandomPlanet />

                <PeoplePage />
                <PlanetPage />
                <StarshipPage />
            </ApiServiceProvider>
        </div>
    );
}

export default App;