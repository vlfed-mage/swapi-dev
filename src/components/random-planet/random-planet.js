import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";

import ItemDetails from "../item-details";

const RandomPlanet = ({ updateInterval, listItems }) => {

    const randomId = Math.floor(Math.random()*28 + 2),
    _categoryName = 'planets',

    [ id, setId ] = useState(randomId);

    useEffect(() => {
        const randomPlanetInterval = setInterval(
            () => setId(Math.floor(Math.random()*28 + 2)),
            updateInterval
        )

        return () => clearInterval(randomPlanetInterval);
    }, [id])

    return (
        <ItemDetails
            name={ _categoryName }
            selectedItemId={ id }
            classNames='random-planet jumbotron rounded card' >

            { listItems }

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