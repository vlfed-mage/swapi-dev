import React, { Component, Fragment } from 'react';

import Services from "../../servises";

import Loader from "../loader";
import PersonDetailsView from "../person-details-view";

import dumb from "../../images/death-star.png";

export default class PersonDetails extends Component {

    services = new Services();

    state = {
        person: null,
        loading: true
    }

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedPersonId !== prevProps.selectedPersonId) {
            this.updatePerson();
        }
    }

    updatePerson = () => {
        const { selectedPersonId } = this.props;

        if (!selectedPersonId) {
            return;
        }

        this.setState({
            loading: true
        })
        this.services
            .getItem('people', selectedPersonId)
            .then((person) => {
                this.setState({
                    person,
                    loading: false
                })
            })
    }

    onImageError = (e) => {
        e.target.src = dumb;
    }

    render() {
        const { person, loading } = this.state;

        if (!person) {
            return null;
        }

        return (
            <div className="person-details card">
                {
                    loading
                        ? <Loader />
                        : <PersonDetailsView
                            person={ person }
                            onImageError={ this.onImageError } />
                }
            </div>
        )
    }
}
