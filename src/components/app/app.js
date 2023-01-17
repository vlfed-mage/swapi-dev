import React, { useState } from 'react';
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

import ErrorBoundary from "../error-boundary";
import Header from '../header';
import RandomPlanet from '../random-planet';
import Page from "../page";
import {
    personDeps,
    planetDeps,
    starshipDeps,
    StarshipList
} from "../sw-components";

import { ApiServices, DummyApiServices } from "../../api-services";
import ApiServicesContext from "../sw-service-context";
import ItemDetails from "../item-details";

const App = () => {
    const [ apiService, setApiService ] = useState(DummyApiServices()),
    onServiceChange = () => {
        const Service = apiService.dummy
            ? ApiServices
            : DummyApiServices;
        setApiService(Service());
    },

    renderStarshipDetails = () => {

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

                    <Route path='/' exact
                        render={() => <h2>Welcome to StarDB</h2>} />
                    <Route path='/people'
                        render={() => {
                            return <Page
                                category='people'
                                listItems={ personDeps } />
                            }
                        }
                    />
                    <Route path='/planets'
                        render={() => {
                            return <Page
                                category='planets'
                                listItems={ planetDeps } />
                            }
                        }
                    />
                    <Route path='/starships' exact component={ StarshipList } />

                    <Route path='/starships/:id'
                        render={({ match }) => { // match, location, params
                            const { id } = match.params;
                            return (
                                <ItemDetails name='starships'
                                    selectedItemId={ id } >
                                    { starshipDeps }
                                </ItemDetails>
                            )}
                        }
                    />
                </div>
            </Router>
        </ApiServicesContext.Provider>
    );
}

export default App;