import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";

import ItemDetails from "../item-details";
import Helpers from "../helpers";

const RandomPlanet = ({ updateInterval }) => {

    const randomId = Math.floor(Math.random()*10 + 1),
    _categoryName = 'planets',

    { getDeps } = Helpers(),

    [ id, setId ] = useState(randomId);

    useEffect(() => {
        const randomPlanetInterval = setInterval(
            () => setId(Math.floor(Math.random()*10 + 1)),
            updateInterval
        )

        return () => clearInterval(randomPlanetInterval);
    }, [id])

    return (
        <ItemDetails
            name={ _categoryName }
            selectedItemId={ id }
            classNames='random-planet jumbotron rounded card' >

            { getDeps(_categoryName) }

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