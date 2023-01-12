import React from "react";

import { withChildren } from "../hoc-helper";
import ItemList from "../item-list";

const renderName = (i) => `${ i.name }`;

const PeopleList = withChildren(ItemList, renderName);

const PlanetList = withChildren(ItemList, renderName);

const StarshipList = withChildren(ItemList, renderName);

export {
    PeopleList,
    PlanetList,
    StarshipList
}

