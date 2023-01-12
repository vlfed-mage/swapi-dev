import React, { useState } from "react";

import Row from "../row";
import ErrorBoundary from "../error-boundary";
import { PlanetList } from "../sw-components";
import Feature from "../feature";
import ItemDetails from "../item-details";

const PlanetPage = () => {

    const _pageName = 'planets',
    [ selectedItemId, setSelectedItemId ] = useState('11'),

    onListItemSelected = (id) => {
        setSelectedItemId(id);
    };

    return (
        <Row >
            <ErrorBoundary>
                <PlanetList
                    name={ _pageName }
                    onListItemSelected={ onListItemSelected } />
            </ErrorBoundary>
            <ErrorBoundary>
                <ItemDetails
                    name={ _pageName }
                    selectedItemId={ selectedItemId } >

                    <Feature label='Population' field='population'/>
                    <Feature label='Rotation Period' field='rotationPeriod'/>
                    <Feature label='Diameter' field='diameter'/>

                </ItemDetails>
            </ErrorBoundary>
        </Row>
    )
}

export {
    PlanetPage
}
