import React, { Component } from "react";

import Row from "../row";
import ErrorBoundary from "../error-boundary";
import { PlanetList, PlanetDetails, Feature } from "../sw-components";

class PlanetPage extends Component {
    _pageName = 'planets'
    state = {
        selectedItemId: '11'
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
                    <PlanetList onListItemSelected={ this.onListItemSelected } />
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
}

export {
    PlanetPage
}
