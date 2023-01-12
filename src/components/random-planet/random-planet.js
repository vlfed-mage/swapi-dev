import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";

import ItemDetails from "../item-details";
import Feature from "../feature";

const RandomPlanet = ( props ) => {

    const randomId = Math.floor(Math.random()*28 + 2),
    _categoryName = 'planets',

    [ id, setId ] = useState(randomId);

    useEffect(() => {
        const randomPlanetInterval = setInterval(
            () => setId(Math.floor(Math.random()*28 + 2)),
            props.updateInterval
        )

        return () => clearInterval(randomPlanetInterval);
    }, [id])

    return (
        <ItemDetails
            name={ _categoryName }
            selectedItemId={ id }
            classNames='random-planet jumbotron rounded card' >

            <Feature label='Population' field='population'/>
            <Feature label='Rotation Period' field='rotationPeriod'/>
            <Feature label='Diameter' field='diameter'/>

        </ItemDetails>
    );
}

RandomPlanet.defaultProps = {
    updateInterval: 60000
}

RandomPlanet.propTypes = {
    updateInterval: PropTypes.number
}

export default RandomPlanet;