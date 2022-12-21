import React, { Component, Fragment } from 'react';

import Services from '../../servises';
import Loader from '../loader';

export default class RandomPlanet extends Component {

    services = new Services();
    state = {
        planet: {},
        loading: true
    };

    componentDidMount() {
        setInterval(
            () => this.updatePlanet(),
            10000
        );
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        })
    }

    updatePlanet() {
        this.setState({ loading: true })
        const id = Math.floor(Math.random()*24 + 1);
        this.services
            .getItem('planets', id)
            .then((planet) => {
                this.onPlanetLoaded(planet);
            })
    }

    render() {
        const { loading } = this.state;

        return (
            <div className="random-planet jumbotron rounded" >
                {
                    loading
                        ? <Loader />
                        : <RandomPlanetView planet={ this.state.planet } />
                }
            </div>

        );
    }
}

const RandomPlanetView = ({ planet }) => {
    const { id, name, population, rotationPeriod, diameter } = planet;

    return (
        <Fragment >
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
        </Fragment>
    )
}
