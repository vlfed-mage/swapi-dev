import React from "react";

import { withData, withChildren } from "../hoc-helper";
import ItemList from "../item-list";

const renderName = (i) => `${ i.name }`;

const PeopleList = withData(
    withChildren(ItemList, renderName),
    'people'
);

const PlanetList = withData(
    withChildren(ItemList, renderName),
    'planets'
);

const StarshipList = withData(
    withChildren(ItemList, renderName),
    'starships'
);

export {
    PeopleList,
    PlanetList,
    StarshipList
}

