import React, { Component, Fragment } from 'react';

import Services from '../../servises';
import Loader from '../loader';
import ErrorIndicator from '../error-indicator';

export default class RandomPlanet extends Component {

    services = new Services();
    state = {
        planet: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        this.updatePlanet();
        setInterval(
            () => this.updatePlanet(),
            5000
        );
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet() {
        this.setState({
            error: false,
            loading: true
        })
        const id = Math.floor(Math.random()*80 + 1);
        this.services
            .getItem('planets', id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }

    render() {
        const { loading, error } = this.state;

        return (
            <div className="random-planet jumbotron rounded" >
                {

                    loading
                        ? <Loader />
                        : error
                            ? <ErrorIndicator />
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
