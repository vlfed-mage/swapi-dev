import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";

import ApiServices from '../../api-services';

import LoaderIndicator from '../loader-indicator';
import RandomPlanetView from '../random-planet-view';
import ErrorIndicator from '../error-indicator';

const RandomPlanet = (props) => {

    const _categoryName = 'planets',
    apiServices = new ApiServices(),
    [ planet, setPlanet ] = useState(null),
    [ loading, setLoading ] = useState(true),
    [ error, setError ] = useState(false);

    useEffect(() => {
        updatePlanet();
        const updatePlanetInterval = setInterval(
            updatePlanet,
            props.updateInterval
        );

        return () => {
            clearInterval(updatePlanetInterval);
        }
    }, []);

    const onPlanetLoaded = (planet) => {
        setPlanet(planet);
        setLoading(false);
        setError(false);
    },

    onPlanetError = () => {
        setLoading(false);
        setError(true);
    },

    updatePlanet = () => {
        setLoading(true);
        setError(false);

        const id = Math.floor(Math.random()*28 + 2);

        apiServices
            .getItem('planets', id)
            .then( onPlanetLoaded )
            .catch( onPlanetError )
    };

    return (
        <div className='random-planet jumbotron rounded'>
            {
                loading
                    ? <LoaderIndicator />
                    : error
                        ? <ErrorIndicator />
                        : <RandomPlanetView
                            name={ _categoryName }
                            planet={ planet } />

            }
        </div>

    );
}

RandomPlanet.defaultProps = {
    updateInterval: 4000
}

RandomPlanet.propTypes = {
    updateInterval: PropTypes.number
}

export default RandomPlanet;
