import React, { useState } from "react";

import Row from "../row";
import ErrorBoundary from "../error-boundary";
import { PlanetList, PlanetDetails, Feature } from "../sw-components";

const PlanetPage = () => {

    const _pageName = 'planets',
    [ selectedItemId, setSelectedItemId ] = useState('11'),

    onListItemSelected = (id) => {
        setSelectedItemId(id);
    };

    return (
        <Row >
            <ErrorBoundary>
                <PlanetList onListItemSelected={ onListItemSelected } />
            </ErrorBoundary>
            <ErrorBoundary>
                <PlanetDetails
                    name={ _pageName }
                    selectedItemId={ selectedItemId } >

                    <Feature label='Population' field='population'/>
                    <Feature label='Rotation Period' field='rotationPeriod'/>
                    <Feature label='Diameter' field='diameter'/>

                </PlanetDetails>
            </ErrorBoundary>
        </Row>
    )
}

export {
    PlanetPage
}
