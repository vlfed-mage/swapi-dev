import React, { useState } from "react";

import Row from "../row";
import ErrorBoundary from "../error-boundary";
import { StarshipList } from "../sw-components";
import Feature from "../feature";
import ItemDetails from "../item-details";

const StarshipPage = () => {

    const _pageName = 'starships',
    [ selectedItemId, setSelectedItemId ] = useState('21'),

    onListItemSelected = (id) => {
        setSelectedItemId(id);
    };

    return (
        <Row >
            <ErrorBoundary >
                <StarshipList
                    name={ _pageName }
                    onListItemSelected={ onListItemSelected } />
            </ErrorBoundary>

            <ErrorBoundary >
                <ItemDetails
                    name={ _pageName }
                    selectedItemId={ selectedItemId } >

                    <Feature label='Manufacturer' field='manufacturer'/>
                    <Feature label='Passengers' field='passengers'/>
                    <Feature label='Starship class' field='starshipClass'/>

                </ItemDetails>
            </ErrorBoundary>
        </Row>
    )
}

export {
    StarshipPage
}
