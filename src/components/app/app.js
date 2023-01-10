import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetPage, StarshipPage } from "../pages";

import { ApiServices } from "../../api-services";
import ApiServicesContext from "../sw-service-context";
import ErrorBoundary from "../error-boundary";
import Feature from "../feature";

const App = () => {
    const apiServices = ApiServices();

    return (
        <div className='app-wrapper'>
            <ApiServicesContext.Provider value={ apiServices }>
                <ErrorBoundary>
                    <Header />
                </ErrorBoundary>
                <ErrorBoundary>
                    <RandomPlanet>
                        <Feature label='Population' field='population'/>
                        <Feature label='Rotation Period' field='rotationPeriod'/>
                        <Feature label='Diameter' field='diameter'/>
                    </RandomPlanet>
                </ErrorBoundary>

                <PeoplePage />
                <PlanetPage />
                <StarshipPage />
            </ApiServicesContext.Provider>
        </div>
    );
}

export default App;