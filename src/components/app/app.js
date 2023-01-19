import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ErrorBoundary from "../error-boundary";
import Header from '../header';
import RandomPlanet from '../random-planet';
import Page from "../page";
import { LoginPage, PeoplePage, ProtectedPage, StarshipList } from "../sw-components";

import { ApiServices, DummyApiServices } from "../../api-services";
import ApiServicesContext from "../sw-service-context";
import ItemDetails from "../item-details"
import Helpers from "../helpers";

const App = () => {
    const [ apiService, setApiService ] = useState(DummyApiServices()),
    [ isLoggedIn, setIsLoggedIn ] = useState(false),

    { getDeps } = Helpers(),

    onServiceChange = () => {
        const Service = apiService.dummy
            ? ApiServices
            : DummyApiServices;
        setApiService(Service());
    },

    onLogin = () => setIsLoggedIn(true),

    renderPlanetsPage = () => <Page category='planets' />,
    renderStarshipDetails = ({ match }) => {
        const { id } = match.params,
        name = 'starships';

        return (
            <ItemDetails name={ name } selectedItemId={ id } >
                { getDeps(name) }
            </ItemDetails>
        )
    },
    renderLoginPage = () => <LoginPage isLoggedIn={ isLoggedIn } onLogin={ onLogin }/>,
    renderProtectedPage = () => <ProtectedPage isLoggedIn={ isLoggedIn } />;

    return (
        <ApiServicesContext.Provider value={ apiService }>
            <Router>
                <div className='app-wrapper'>
                    <ErrorBoundary>
                        <Header onServiceChange={ onServiceChange } />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <RandomPlanet/>
                    </ErrorBoundary>

                    <Switch>
                        <Route path='/' exact render={ () => <h3>Welcome to StarDB</h3>} />
                        <Route path='/people/:id?' component={ PeoplePage } />
                        <Route path='/planets/' render={ renderPlanetsPage } />
                        <Route path='/starships/' exact component={ StarshipList } />
                        <Route path='/starships/:id' render={ renderStarshipDetails } />
                        <Route path='/login' render={ renderLoginPage } />
                        <Route path='/protected' render={ renderProtectedPage } />
                        <Route render={ () => <h2>404</h2> } />
                    </Switch>

                </div>
            </Router>
        </ApiServicesContext.Provider>
    );
}

export default App;