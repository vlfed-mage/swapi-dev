import React from "react";

import { withData } from "../hoc-helper";
import ItemDetails from "../item-details";

const PersonDetails = withData(ItemDetails, 'people');

const PlanetDetails = withData(ItemDetails, 'planets');

const StarshipDetails = withData(ItemDetails, 'starships');


export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}
