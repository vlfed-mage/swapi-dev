import React, {Fragment} from "react";

import dumb from "../../images/death-star.png";

const RandomPlanetView = ({ planet, onImageError }) => {
    const { id, name, population, rotationPeriod, diameter } = planet;
    const cover = `https://starwars-visualguide.com/assets/img/planets/${ id }.jpg`;

    return (
        <Fragment >
            <img className="planet-image"
                 src= { cover ? cover : dumb }
                 alt="planet image"
                 onError={ onImageError }/>
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