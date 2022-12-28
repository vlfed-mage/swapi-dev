import React, { Component } from 'react';

import ApiServices from "../../api-services";

import LoaderIndicator from "../loader-indicator";
import RandomPlanetView from "../random-planet-view";
import ErrorIndicator from "../error-indicator";

export default class RandomPlanet extends Component {

    apiServices = new ApiServices();
    state = {
        planet: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updatePlanet();
        this.updatePlanetInterval = setInterval(
            this.updatePlanet,
            5000
        )
    }

    componentWillUnmount() {
        clearInterval(this.updatePlanetInterval)
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        })
    }

    onPlanetError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random()*28 + 2);

        this.apiServices
            .getItem('planets', id)
            .then( this.onPlanetLoaded )
            .catch( this.onPlanetError )
    }

    render() {
        const { planet, loading, error } = this.state;

        return (
            <div className="random-planet jumbotron rounded">
                {
                    loading
                        ? <LoaderIndicator />
                        : error
                            ? <ErrorIndicator />
                            : <RandomPlanetView
                                planet={ planet } />

                }
            </div>

        );
    }
}
