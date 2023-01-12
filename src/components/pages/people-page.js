import React, { useState } from "react";

import Row from "../row";
import ErrorBoundary from "../error-boundary";
import Feature from "../feature";
import ItemDetails from "../item-details";
import ItemList from "../item-list";

const PeoplePage = () => {

    const _pageName = 'people',
    [ selectedItemId, setSelectedItemId ] = useState('11'),

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

                    <Feature label='Gender' field='gender'/>
                    <Feature label='Birth Year' field='birthYear'/>
                    <Feature label='Eye Color' field='eyeColor'/>

                </ItemDetails>
            </ErrorBoundary>
        </Row>
    )
}

export {
    PeoplePage
}
