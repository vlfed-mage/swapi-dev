import React, { Component } from "react";

import Row from "../row";
import ErrorBoundary from "../error-boundary";
import { StarshipList, StarshipDetails, Feature } from "../sw-components";

class StarshipPage extends Component {
    _pageName = 'starships'
    state = {
        selectedItemId: '21'
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
                <ErrorBoundary >
                    <StarshipList onListItemSelected={ this.onListItemSelected } />
                </ErrorBoundary>

                <ErrorBoundary >
                    <StarshipDetails
                        name={ this._pageName }
                        selectedItemId={ selectedItemId } >

                        <Feature label='Manufacturer' field='manufacturer'/>
                        <Feature label='Passengers' field='passengers'/>
                        <Feature label='Starship class' field='starshipClass'/>
                    </StarshipDetails>
                </ErrorBoundary>
            </Row>
        )
    }
}

export {
    StarshipPage
}
