import React, { Component } from 'react';

import ApiServices from '../../api-services';

import LoaderIndicator from '../loader-indicator';
import ItemDetailsView from '../item-details-view';
import ErrorIndicator from '../error-indicator';

export default class ItemDetails extends Component {

    apiServices = new ApiServices();
    state = {
        details: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateDetails(this.props.selectedItemId);
    }

    componentDidUpdate(prevProps) {
        const { selectedItemId } = this.props;

        if (selectedItemId !== prevProps.selectedItemId) {
            this.updateDetails(selectedItemId)
        }
    }

    onDetailsLoaded = (details) => {
        this.setState({
            details,
            loading: false
        })
    }

    onDetailsError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    updateDetails = (id) => {
        this.setState({
            loading: true,
            error: false
        })
        this.apiServices
            .getItem('people', id)
            .then( this.onDetailsLoaded )
            .catch( this.onDetailsError )
    }

    render() {
        const { details, loading, error } = this.state;

        if (!details) {
            return null;
        }

        return (
            loading
                ? <LoaderIndicator />
                : error
                    ? <ErrorIndicator />
                    : <ItemDetailsView
                        details={ details } />
        )
    }
}
