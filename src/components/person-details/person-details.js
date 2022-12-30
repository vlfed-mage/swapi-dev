import React, { Component } from 'react';

import ApiServices from '../../api-services';

import LoaderIndicator from '../loader-indicator';
import PersonDetailsView from '../person-details-view';
import ErrorIndicator from '../error-indicator';

export default class PersonDetails extends Component {

    apiServices = new ApiServices();
    state = {
        person: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updatePerson(this.props.selectedItemId);
    }

    componentDidUpdate(prevProps) {
        const { selectedItemId } = this.props;

        if (selectedItemId !== prevProps.selectedItemId) {
            this.updatePerson(selectedItemId)
        }
    }

    onPersonLoaded = (person) => {
        this.setState({
            person,
            loading: false
        })
    }

    onPersonError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    updatePerson = (id) => {
        this.setState({
            loading: true,
            error: false
        })
        this.apiServices
            .getItem('people', id)
            .then( this.onPersonLoaded )
            .catch( this.onPersonError )
    }

    render() {
        const { person, loading, error } = this.state;

        if (!person) {
            return null;
        }

        return (
            loading
                ? <LoaderIndicator />
                : error
                    ? <ErrorIndicator />
                    : <PersonDetailsView
                        person={ person } />
        )
    }
}
