import React, { Component } from 'react';
import Services from '../../servises';

export default class RandomPlanet extends Component {

    services = new Services();
    state = {
        planets: {}
    };

    constructor(prop) {
        super(prop);

        this.updatePlanet();
    }

    updatePlanet = () => {
        const id = '51'
        this.services
            .getItem('planets', id)
            .then((planet) => {
                this.setState(() => {
                    this.services._transformPlanet(planet)
                })
            })
    }

    render() {
        const {
            planets: {
                id,
                name,
                population,
                rotationPeriod,
                diameter
            }
        } = this.state;

        return (
            <div className="random-planet jumbotron rounded" >
                <img className="planet-image"
                     src={ `https://starwars-visualguide.com/assets/img/planets/${ id }.jpg` } />
                <div>
                    <h4>{ name }</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>{ population }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period</span>
                            <span>{ rotationPeriod }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>{ diameter }</span>
                        </li>
                    </ul>
                </div>
            </div>

        );
    }
}
