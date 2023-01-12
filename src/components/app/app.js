import React from 'react';

import ErrorBoundary from "../error-boundary";
import Header from '../header';
import RandomPlanet from '../random-planet';
import Page from "../page";
import {
    personDeps,
    planetDeps,
    starshipDeps
}  from "../sw-components";

import { ApiServices } from "../../api-services";
import ApiServicesContext from "../sw-service-context";

const App = () => {
    const apiServices = ApiServices();

    return (
        <div className='app-wrapper'>
            <ApiServicesContext.Provider value={ apiServices }>
                <ErrorBoundary>
                    <Header />
                </ErrorBoundary>
                <ErrorBoundary>
                    <RandomPlanet listItems={ planetDeps } />
                </ErrorBoundary>

                <Page category='people'
                      listItems={ personDeps } />
                <Page category='planets'
                      listItems={ planetDeps } />
                <Page category='starships'
                      listItems={ starshipDeps } />

            </ApiServicesContext.Provider>
        </div>
    );
}

export default App;