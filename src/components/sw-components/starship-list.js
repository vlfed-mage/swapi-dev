import React from 'react';

import ItemList from "../item-list";
import { withRouter } from "react-router-dom";

const StarshipList = ({ history }) => {

    const renderName = (i) => `${ i.name }`,

    onListItemSelected = (id) => {
        history.push(`/starships/${id}`);
    };

    return (
        <ItemList
            name='starships'
            onListItemSelected={ onListItemSelected } >
            { renderName }
        </ItemList>
    )
};

export default withRouter(StarshipList);
