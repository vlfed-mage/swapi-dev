import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

export default class App extends Component {

    state = {
        selectedPersonId: null
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPersonId: id
        })
    }

    render() {
        const { selectedPersonId } = this.state;

        return (
            <div className="swapi-dev">
                <Header />
                <RandomPlanet />

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            onPersonSelected={ this.onPersonSelected } />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails
                            selectedPersonId={ selectedPersonId } />
                    </div>
                </div>
            </div>
        );
    }
};