import React, {Fragment} from "react";

import Feature from "../feature";

const planetDeps = (
    <Fragment>
        <Feature label='Population' field='population'/>
        <Feature label='Rotation Period' field='rotationPeriod'/>
        <Feature label='Diameter' field='diameter'/>
    </Fragment>
),

personDeps = (
    <Fragment>
        <Feature label='Gender' field='gender'/>
        <Feature label='Birth Year' field='birthYear'/>
        <Feature label='Eye Color' field='eyeColor'/>
    </Fragment>
),

starshipDeps = (
    <Fragment>
        <Feature label='Manufacturer' field='manufacturer'/>
        <Feature label='Passengers' field='passengers'/>
        <Feature label='Starship class' field='starshipClass'/>
    </Fragment>
);

export {
    planetDeps,
    personDeps,
    starshipDeps
}