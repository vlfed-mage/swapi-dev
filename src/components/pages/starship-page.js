import React, { useState } from "react";

import Row from "../row";
import ErrorBoundary from "../error-boundary";
import { StarshipList, StarshipDetails, Feature } from "../sw-components";

const StarshipPage = () => {

    const _pageName = 'starships',
    [ selectedItemId, setSelectedItemId ] = useState('21'),

    onListItemSelected = (id) => {
        setSelectedItemId(id);
    };

    return (
        <Row >
            <ErrorBoundary >
                <StarshipList onListItemSelected={ onListItemSelected } />
            </ErrorBoundary>

            <ErrorBoundary >
                <StarshipDetails
                    name={ _pageName }
                    selectedItemId={ selectedItemId } >

                    <Feature label='Manufacturer' field='manufacturer'/>
                    <Feature label='Passengers' field='passengers'/>
                    <Feature label='Starship class' field='starshipClass'/>
                </StarshipDetails>
            </ErrorBoundary>
        </Row>
    )
}

export {
    StarshipPage
}
