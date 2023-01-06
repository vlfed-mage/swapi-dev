import React from "react";

import { withData } from "../hoc-helper";
import ItemDetails from "../item-details";

const PersonDetails = withData(ItemDetails, 'people', true);

const PlanetDetails = withData(ItemDetails, 'planets', true);

const StarshipDetails = withData(ItemDetails, 'starships', true);

const Feature = ({ data, field, label }) => {
    return (
        <li className='list-group-item' >
            <span className='term'>{ `${ label }: ` }</span>
            <span>{ data[field] }</span>
        </li>
    )
}

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    Feature
}
