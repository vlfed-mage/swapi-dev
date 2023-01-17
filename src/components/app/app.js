import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import ErrorBoundary from "../error-boundary";
import Header from '../header';
import RandomPlanet from '../random-planet';
import Page from "../page";
import {
    personDeps,
    planetDeps,
    starshipDeps
}  from "../sw-components";

import { ApiServices, DummyApiServices } from "../../api-services";
import ApiServicesContext from "../sw-service-context";

const App = () => {
    const [ apiService, setApiService ] = useState(DummyApiServices()),

    onServiceChange = () => {
        const Service = apiService.dummy
            ? ApiServices
            : DummyApiServices;
        setApiService(Service());
    };

    return (
        <ApiServicesContext.Provider value={ apiService }>
            <Router>
                <div className='app-wrapper'>
                    <ErrorBoundary>
                        <Header onServiceChange={ onServiceChange } />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <RandomPlanet listItems={ planetDeps } />
                    </ErrorBoundary>
                    <Route path='/people' render={() => {
                        return <Page
                            category='people'
                            listItems={ personDeps } />
                    }} />
                    <Route path='/planets' render={() => {
                        return <Page
                            category='planets'
                            listItems={ planetDeps } />
                    }} />
                    <Route path='/starships' render={() => {
                        return <Page
                            category='starships'
                            listItems={ starshipDeps } />
                    }} />
                </div>
            </Router>
        </ApiServicesContext.Provider>
    );
}

export default App;