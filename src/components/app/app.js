import React, { Component } from 'react';

import ApiServices from '../../api-services';

import Header from '../header';
import RandomPlanet from '../random-planet';
import Row from "../row";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

export default class App extends Component {

    apiServices = new ApiServices();

    state = {
        selectedItemId: '1'
    }

    getData = (name) => {
        return this.apiServices.getCollection(name)
    }

    onListItemSelected = (id) => {
        this.setState({
            selectedItemId: id
        })
    }

    render() {
        const { selectedItemId } = this.state;

        const itemList = (name) => {
            return (
                <ItemList
                    getData={ () => this.getData(name) }
                    selectedItemId={ selectedItemId }
                    onListItemSelected={ this.onListItemSelected } />
            )
        }

        return (
            <div className='app-wrapper'>
                <Header/>
                <RandomPlanet/>

                <Row
                    left={ itemList('people') }
                    right={
                        <PersonDetails
                            selectedItemId={ selectedItemId } />
                    }
                />
                <Row
                    left={ itemList('planets') }
                    right={
                        <PersonDetails
                            selectedItemId={ selectedItemId } />
                    }
                />
                <Row
                    left={ itemList('starships') }
                    right={
                        <PersonDetails
                            selectedItemId={ selectedItemId } />
                    }
                />
            </div>
        );
    }
}