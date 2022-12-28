import React, { Component } from 'react';

import ApiServices from "../../api-services";

import LoaderIndicator from "../loader-indicator";
import ErrorIndicator from "../error-indicator";

export default class ItemList extends Component {

    apiServices = new ApiServices();
    state = {
        people: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updatePeople()
    }

    onPeopleLoaded = (people) => {
        this.setState({
            people,
            loading: false
        })
    }

    onPeopleError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    updatePeople = () => {
        this.apiServices
            .getCollection('people')
            .then( this.onPeopleLoaded )
            .catch( this.onPeopleError )
    }

    renderPeopleList = (people) => {
        return people.map(({ name, id }) => {
            return (
                <li
                    className="list-group-item"
                    key={ id } >
                    { name }
                </li>
            )
        })
    }

    render() {
        const { loading, error, people } = this.state;

        return (
            loading
                ? <LoaderIndicator/>
                : error
                    ? <ErrorIndicator />
                    : <ul className="item-list list-group">
                          { this.renderPeopleList(people) }
                      </ul>

        );
    }
}
