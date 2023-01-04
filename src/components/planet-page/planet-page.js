import React, { Component } from "react";

import ItemList from "../item-list";
import ItemDetails from "../item-details";
import Row from "../row";
import ApiServices from "../../api-services";

export default class PlanetPage extends Component {
    apiServices = new ApiServices();
    state = {
        selectedItemId: '2'
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
        const name = 'planets';

        return (
            <Row >
                <ItemList
                    name={ name }
                    getData={ this.getData }
                    selectedItemId={ selectedItemId }
                    onListItemSelected={ this.onListItemSelected }
                    renderItem={ ({ name, rotationPeriod }) => `${ name } (${ rotationPeriod })` } />
                <ItemDetails
                    name={ name }
                    selectedItemId={ selectedItemId } />
            </Row>
        )
    }
};