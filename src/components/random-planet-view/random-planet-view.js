import React, { Fragment } from "react";

import dumb from "../../images/death-star.svg";

const RandomPlanetView = ({ planet }) => {
    const { id, name, population, rotationPeriod, diameter } = planet;

    const onImageError = (e) => {
        e.target.src = dumb
    }

    return (
        <Fragment>
            <img className="planet-image"
                 src={ `https://starwars-visualguide.com/assets/img/planets/${ id }.jpg` }
                 onError={ onImageError } />
            <div>
                <h4>{ name }</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population: </span>
                        <span>{ population }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period: </span>
                        <span>{ rotationPeriod }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter: </span>
                        <span>{ diameter }</span>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}

export default RandomPlanetView;