import React, { useState } from "react";

import Row from "../row";
import ErrorBoundary from "../error-boundary";
import ItemDetails from "../item-details";
import ItemList from "../item-list";
import Helpers from "../helpers";

const Page = ({ category }) => {

    const randomId = Math.floor(Math.random()*10 + 1);
    const [ selectedItemId, setSelectedItemId ] = useState(randomId),
    renderName = (i) => `${ i.name }`,

    { getDeps } = Helpers(),

    onListItemSelected = (id) => {
        setSelectedItemId(id);
    };

    return (
        <Row >
            <ErrorBoundary >
                <ItemList
                    name={ category }
                    onListItemSelected={ onListItemSelected } >
                    { renderName }
                </ItemList>
            </ErrorBoundary>

            <ErrorBoundary >
                <ItemDetails
                    name={ category }
                    selectedItemId={ selectedItemId } >
                    { getDeps(category) }
                </ItemDetails>
            </ErrorBoundary>
        </Row>
    )
}

export default Page;
