import React, { Component, Fragment } from 'react';

import Services from '../../servises';
import Loader from '../loader';
import ErrorIndicator from '../error-indicator';
import RandomPlanetView from "../random-planet-view";

import dumb from "../../images/death-star.png";

export default class RandomPlanet extends Component {

    services = new Services();
    state = {
        planet: null,
        loading: true,
        error: false
    };

    componentDidMount() {
        this.updatePlanet();
        this.updatePlanetInterval = setInterval(
            () => this.updatePlanet(),
            5000
        );
    }

    componentWillUnmount() {
        clearInterval(this.updatePlanetInterval);
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
        const id = Math.floor(Math.random()*24 + 2);
        this.services
            .getItem('planets', id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }

    onImageError = (e) => {
        e.target.src = dumb;
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
                            : <RandomPlanetView
                                planet={ this.state.planet }
                                onImageError={ this.onImageError } />
                }
            </div>

        );
    }
}
