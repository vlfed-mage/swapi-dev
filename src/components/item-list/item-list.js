import React, { Component } from 'react';

import ApiServices from '../../api-services';

import LoaderIndicator from '../loader-indicator';
import ErrorIndicator from '../error-indicator';

export default class ItemList extends Component {

    apiServices = new ApiServices();
    state = {
        people: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.apiServices
            .getCollection('people')
            .then( this.onPeopleLoaded )
            .catch( this.onPeopleError )
    }

    onPeopleLoaded = (people) => {
        const { selectedPersonId } = this.props;

        this.setState({
            people: this._transformItemList(people, selectedPersonId),
            loading: false
        })
    }

    onPeopleError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    onItemClick(id) {
        this.props.onListItemSelected(id);

        this.setState(({ people }) => {
            return {
                people: this._transformItemList(people, id),
            }
        })
    }

    _transformItemList(arr, id) {
        return arr.map((el) => {
            return { ...el, selected: id === el.id }
        })
    }

    renderPeopleList = (people) => {
        return people.map(({ name, id, selected }) => {
            const classNames = selected ? 'list-group-item selected' : 'list-group-item'
            return (
                <li
                    className={ classNames }
                    onClick={ () => this.onItemClick(id) }
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
                    : <ul className='item-list list-group'>
                          { this.renderPeopleList(people) }
                      </ul>

        );
    }
}
