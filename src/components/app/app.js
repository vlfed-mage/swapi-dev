import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetPage, StarshipPage } from "../pages";

import { ApiServices } from "../../api-services";
import ApiServicesContext from "../sw-service-context";

const App = () => {
    const apiServices = new ApiServices();

    return (
        <div className='app-wrapper'>
            <ApiServicesContext.Provider value={ apiServices }>
                <Header />
                <RandomPlanet />

                <StarshipPage />
            </ApiServicesContext.Provider>
        </div>
    );
}

export default App;