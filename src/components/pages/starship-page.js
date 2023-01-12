import React, { useState } from "react";

import Row from "../row";
import ErrorBoundary from "../error-boundary";
import Feature from "../feature";
import ItemDetails from "../item-details";
import ItemList from "../item-list";

const StarshipPage = () => {

    const _pageName = 'starships',
    [ selectedItemId, setSelectedItemId ] = useState('21'),

    renderName = (i) => `${ i.name }`,

    onListItemSelected = (id) => {
        setSelectedItemId(id);
    };

    return (
        <Row >
            <ErrorBoundary >
                <ItemList
                    name={ _pageName }
                    onListItemSelected={ onListItemSelected } >
                    { renderName }
                </ItemList>
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
