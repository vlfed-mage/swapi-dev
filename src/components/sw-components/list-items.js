import React from "react";

import { withData, withChildren } from "../hoc-helper";
import ItemList from "../item-list";

const renderPeopleData = (i) => `${ i.name } ( ${ i.gender } )`
const renderPlanetsData = (i) => `${ i.name } ( RP: ${ i.rotationPeriod } )`

const PeopleList = withData(
    withChildren(ItemList, renderPeopleData),
    'people'
);

const PlanetList = withData(
    withChildren(ItemList, renderPlanetsData),
    'planets'
);

export {
    PeopleList,
    PlanetList
}

