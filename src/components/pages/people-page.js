import React, { useState } from "react";

import Row from "../row";
import ErrorBoundary from "../error-boundary";
import { PeopleList, PersonDetails } from "../sw-components";
import Feature from "../feature";

const PeoplePage = () => {

    const _pageName = 'people',
    [ selectedItemId, setSelectedItemId ] = useState('11'),

    onListItemSelected = (id) => {
        setSelectedItemId(id);
    };

    return (
        <Row >
            <ErrorBoundary >
                <PeopleList onListItemSelected={ onListItemSelected } />
            </ErrorBoundary>

            <ErrorBoundary >
                <PersonDetails
                    name={ _pageName }
                    selectedItemId={ selectedItemId } >

                    <Feature label='Gender' field='gender'/>
                    <Feature label='Birth Year' field='birthYear'/>
                    <Feature label='Eye Color' field='eyeColor'/>
                </PersonDetails>
            </ErrorBoundary>
        </Row>
    )
}

export {
    PeoplePage
}
