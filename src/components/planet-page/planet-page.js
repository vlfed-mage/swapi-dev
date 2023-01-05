import React, { Component } from "react";

import ItemList from "../item-list";
import ItemDetails from "../item-details";
import Row from "../row";
import ErrorBoundary from "../error-boundary";
import { withData } from "../hoc-helper";

const Feature = ({ data, field, label }) => {
    return (
        <li className='list-group-item' >
            <span className='term'>{ `${ label }: ` }</span>
            <span>{ data[field] }</span>
        </li>
    )
}

const PlanetList = withData(ItemList, 'planets');
const PlanetDetails = withData(ItemDetails, 'planets', true);

export default class PlanetPage extends Component {
    _pageName = 'planets'
    state = {
        selectedItemId: '2'
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
                    <PlanetDetails
                        name={ this._pageName }
                        selectedItemId={ selectedItemId } >

                        <Feature label='Population' field='population'/>
                        <Feature label='Rotation Period' field='rotationPeriod'/>
                        <Feature label='Diameter' field='diameter'/>

                    </PlanetDetails>
                </ErrorBoundary>
            </Row>
        )
    }
};