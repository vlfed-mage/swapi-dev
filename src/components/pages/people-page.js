import React, { useState } from "react";

import Row from "../row";
import ErrorBoundary from "../error-boundary";
import { PeopleList } from "../sw-components";
import Feature from "../feature";
import ItemDetails from "../item-details";

const PeoplePage = () => {

    const _pageName = 'people',
    [ selectedItemId, setSelectedItemId ] = useState('11'),

    onListItemSelected = (id) => {
        setSelectedItemId(id);
    };

    return (
        <Row >
            <ErrorBoundary >
                <PeopleList
                    name={ _pageName }
                    onListItemSelected={ onListItemSelected } />
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
