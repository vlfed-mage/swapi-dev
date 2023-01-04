import React, { Component } from "react";

import ItemList from "../item-list";
import ItemDetails from "../item-details";
import Row from "../row";
import ApiServices from "../../api-services";

export default class PlanetPage extends Component {
    _pageName = 'planets'
    apiServices = new ApiServices();
    state = {
        selectedItemId: '11'
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

        return (
            <Row >
                <ItemList
                    name={ this._pageName }
                    getData={ this.getData }
                    selectedItemId={ selectedItemId }
                    onListItemSelected={ this.onListItemSelected } >
                    {
                        (i) => `${ i.name } (${ i.rotationPeriod })`
                    }
                </ItemList>
                <ItemDetails
                    name={ this._pageName }
                    selectedItemId={ selectedItemId } />
            </Row>
        )
    }
};