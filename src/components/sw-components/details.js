import React from "react";

import { withData } from "../hoc-helper";
import ItemDetails from "../item-details";

const PersonDetails = withData(ItemDetails, 'people', true);

const PlanetDetails = withData(ItemDetails, 'planets', true);

const StarshipDetails = withData(ItemDetails, 'starships', true);


export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}
