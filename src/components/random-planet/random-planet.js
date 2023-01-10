import React, { useEffect, useState, useContext } from 'react';

import PropTypes from "prop-types";

import LoaderIndicator from '../loader-indicator';
import RandomPlanetView from '../random-planet-view';
import ErrorIndicator from '../error-indicator';

import ApiServicesContext from "../sw-service-context";

const RandomPlanet = (props) => {

    let cancelledReq = false;

    const _categoryName = 'planets',
    { getItem } = useContext(ApiServicesContext),
    [ planet, setPlanet ] = useState(null),
    [ loading, setLoading ] = useState(true),
    [ error, setError ] = useState(false),

    onPlanetLoaded = (planet) => {
        if (!cancelledReq) {
            setPlanet(planet);
            setLoading(false);
            setError(false);
        }
    },

    onPlanetError = () => {
        setLoading(false);
        setError(true);
    },

    updatePlanet = () => {
        setLoading(true);
        setError(false);

        const id = Math.floor(Math.random()*28 + 2);
        getItem('planets', id)
            .then( onPlanetLoaded )
            .catch( onPlanetError )
    };

    useEffect(() => {
        const updatePlanetTimeout = setTimeout(
            updatePlanet,
            props.updateInterval
        );

        return () => {
            clearTimeout(updatePlanetTimeout);
            cancelledReq = true;
        }
    }, [planet]);

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
    updateInterval: 10000
}

RandomPlanet.propTypes = {
    updateInterval: PropTypes.number
}

export default RandomPlanet;
