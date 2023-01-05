import React, { Component, Children, cloneElement } from 'react';

import ApiServices from '../../api-services';

import LoaderIndicator from '../loader-indicator';
import ErrorIndicator from '../error-indicator';
import Helpers from "../helpers";

export default class ItemDetails extends Component {

    apiServices = new ApiServices();
    helpers = new Helpers();
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
        const { name, getData } = this.props;
        this.setState({
            loading: true,
            error: false
        })
        getData(name, id)
            .then( this.onDetailsLoaded )
            .catch( this.onDetailsError )
    }

    render() {
        const { details, loading, error } = this.state;

        if (!details) {
            return null;
        }

        const { id, name } = details;

        return (
            loading
                ? <LoaderIndicator />
                : error
                    ? <ErrorIndicator />
                    : <div className='item-details card' >
                        <img className='item-image'
                             src={ this.apiServices.getImgUrl(this.props.name, id) }
                             onError={ this.helpers.onImageError } />

                        <div className='card-body' >
                            <h4>{ name }</h4>
                            <ul className='list-group list-group-flush' >
                                { Children.map(
                                    this.props.children,
                                    (child) => cloneElement(child, { details })
                                ) }
                            </ul>
                        </div>
                    </div>
        )
    }
}
