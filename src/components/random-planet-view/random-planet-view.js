import React, { Fragment } from 'react';

import ApiServices from "../../api-services";

const RandomPlanetView = (props) => {
    const { getImgUrl, onImageError } = new ApiServices();

    const { id, name, population, rotationPeriod, diameter } = props.planet;

    return (
        <Fragment>
            <img className='planet-image'
                 src={ getImgUrl(props.name, id) }
                 onError={ onImageError }
                 alt='random planet image' />
            <div>
                <h4>{ name }</h4>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <span className='term'>Population: </span>
                        <span>{ population }</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Rotation Period: </span>
                        <span>{ rotationPeriod }</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Diameter: </span>
                        <span>{ diameter }</span>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}

export default RandomPlanetView;
