import React, { useState } from "react";

import Row from "../row";
import ErrorBoundary from "../error-boundary";
import ItemDetails from "../item-details";
import ItemList from "../item-list";

const Page = ({ category, listItems }) => {

    const [ selectedItemId, setSelectedItemId ] = useState('11'),
    renderName = (i) => `${ i.name }`,

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
                    { listItems }
                </ItemDetails>
            </ErrorBoundary>
        </Row>
    )
}

export default Page;