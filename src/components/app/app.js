import React, { Component } from 'react';

import ApiServices from '../../api-services';

import Header from '../header';
import RandomPlanet from '../random-planet';
import Row from "../row";
import ItemList from "../item-list";
import ItemDetails from "../item-details";

export default class App extends Component {

    apiServices = new ApiServices();
    pages = [ 'people', 'planets', 'starships' ];
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

        const rowElements = this.pages.map((page) => {
            return (
                <Row key={ page }>
                    { itemList(page) }
                    <ItemDetails
                        selectedItemId={ selectedItemId } />
                </Row>
            )
        })

        return (
            <div className='app-wrapper'>
                <Header />
                <RandomPlanet />
                { rowElements }
            </div>
        );
    }
}