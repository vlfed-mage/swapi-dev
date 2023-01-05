import React, { Component } from "react";

import ItemList from "../item-list";
import ItemDetails from "../item-details";
import Row from "../row";
import ApiServices from "../../api-services";
import ErrorBoundary from "../error-boundary";
import {withData} from "../hoc-helper";

const Feature = ({ details, field, label }) => {
    return (
        <li className='list-group-item' >
            <span className='term'>{ `${ label }: ` }</span>
            <span>{ details[field] }</span>
        </li>
    )
}

const PlanetList = withData(ItemList, 'planets');

export default class PlanetPage extends Component {
    _pageName = 'planets'
    apiServices = new ApiServices();
    state = {
        selectedItemId: '11'
    }

    getData = (name, id = null) => {
        const { getItem, getCollection } = this.apiServices;
        return id ? getItem(name, id) : getCollection(name);
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
                <ErrorBoundary>
                    <PlanetList onListItemSelected={ this.onListItemSelected } >
                        { (i) => `${ i.name } (${ i.rotationPeriod })` }
                    </PlanetList>
                </ErrorBoundary>
                <ErrorBoundary>
                    <ItemDetails
                        name={ this._pageName }
                        getData={ this.getData }
                        selectedItemId={ selectedItemId } >

                        <Feature label='Population' field='population'/>
                        <Feature label='Rotation Period' field='rotationPeriod'/>
                        <Feature label='Diameter' field='diameter'/>

                    </ItemDetails>
                </ErrorBoundary>
            </Row>
        )
    }
};