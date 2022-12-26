import React, { Fragment } from "react";

import dumb from "../../images/death-star.png";

const PersonDetailsView = ({ person, onImageError }) => {

    const { id, name, gender, birthYear, eyeColor } = person;
    const cover = `https://starwars-visualguide.com/assets/img/characters/${ id }.jpg`;

    return (
        <Fragment>
            <img className="person-image"
                 src= { cover ? cover : dumb }
                 alt="planet image"
                 onError={ onImageError } />
            <div className="card-body">
                <h4>{ name }</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender: </span>
                        <span>{ gender }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year: </span>
                        <span>{ birthYear }</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color: </span>
                        <span>{ eyeColor }</span>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}

export default PersonDetailsView;