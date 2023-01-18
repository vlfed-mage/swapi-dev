import React, { useState } from "react";

import Row from "../row";
import ErrorBoundary from "../error-boundary";
import ItemDetails from "../item-details";
import ItemList from "../item-list";
import Helpers from "../helpers";
import { withRouter } from "react-router-dom";

const PeoplePage = ({ match, history }) => {

    const renderName = (i) => `${ i.name }`,
    { getDeps } = Helpers(),

    { id } = match.params;

    const onListItemSelected = (id) => {
        history.push(`/people/${id}`)
    };

    return (
        <Row >
            <ErrorBoundary >
                <ItemList
                    name='people'
                    onListItemSelected={ onListItemSelected } >
                    { renderName }
                </ItemList>
            </ErrorBoundary>

            <ErrorBoundary >
                <ItemDetails
                    name='people'
                    selectedItemId={ id } >
                    { getDeps('people') }
                </ItemDetails>
            </ErrorBoundary>
        </Row>
    )
}

export default withRouter(PeoplePage);
