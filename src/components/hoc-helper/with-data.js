import React, { Component } from "react";

import LoaderIndicator from "../loader-indicator";
import ErrorIndicator from "../error-indicator";
import ApiServices from "../../api-services";

const withData = (View, name, withId = false) => {
    return class extends Component {

        state = {
            data: null,
            loading: true,
            error: false
        }

        getData = () => {
            const { getItem, getCollection } = new ApiServices();
            return withId
                ? getItem(name, this.props.selectedItemId)
                : getCollection(name);
        }

        onDataLoaded = (data) => {
            this.setState({
                data: data,
                loading: false
            })
        }

        onDataError = () => {
            this.setState({
                loading: false,
                error: true
            })
        }

        onDataReset = () => {
            this.setState({
                loading: true,
                error: false
            })
        }

        componentDidMount() {
            this.getData()
                .then( this.onDataLoaded )
                .catch( this.onDataError )
        }

        componentDidUpdate(prevProps) {
            if (this.props.selectedItemId !== prevProps.selectedItemId) {
                this.onDataReset()
                this.getData()
                    .then( this.onDataLoaded )
                    .catch( this.onDataError )
            }
        }

        render() {
            const { data, error, loading } = this.state;

            return (
                loading
                    ? <LoaderIndicator />
                    : error
                        ? <ErrorIndicator />
                        : <View { ...this.props } data={ data } />
            )
        }
    };
};

export {
    withData
};