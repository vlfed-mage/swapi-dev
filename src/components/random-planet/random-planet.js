import React, { useEffect, useState, useContext, Fragment, Children, cloneElement } from 'react';

import PropTypes from "prop-types";

import LoaderIndicator from '../loader-indicator';
import ErrorIndicator from '../error-indicator';

import ApiServicesContext from "../sw-service-context";

const RandomPlanet = (props) => {

    let cancelledReq = false;

    useEffect(() => {
        updatePlanet();
    }, []);

    const _categoryName = 'planets',
    [ data, setData ] = useState(null),
    [ loading, setLoading ] = useState(true),
    [ error, setError ] = useState(false),

    { getItem, getImgUrl, onImageError } = useContext(ApiServicesContext),
    { children } = props,

    onPlanetLoaded = (data) => {
        if (!cancelledReq) {
            setData(data);
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
        getItem(_categoryName, id)
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
    }, [data]);

    return (
        <div className='random-planet jumbotron rounded'>
            { loading && <LoaderIndicator /> }
            { error && <ErrorIndicator /> }
            { (!loading && !error) &&
                <Fragment>
                    <img className='planet-image'
                         src={ getImgUrl(_categoryName, data.id) }
                         onError={ onImageError }
                         alt='random planet image' />
                    <div>
                        <h4>{ data.name }</h4>
                        <ul className='list-group list-group-flush'>
                            { Children.map(
                                children,
                                (child) => cloneElement(child, { data })
                            ) }
                        </ul>
                    </div>
                </Fragment>
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
