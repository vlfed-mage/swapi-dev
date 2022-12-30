import React, { Component } from 'react';

import ApiServices from '../../api-services';

import LoaderIndicator from '../loader-indicator';
import ErrorIndicator from '../error-indicator';

export default class ItemList extends Component {

    apiServices = new ApiServices();
    state = {
        items: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        const { getData } = this.props;
        getData()
            .then( this.onItemsLoaded )
            .catch( this.onItemsError )
    }

    onItemsLoaded = (items) => {
        const { selectedItemId } = this.props;

        this.setState({
            items: this._transformItemList(items, selectedItemId),
            loading: false
        })
    }

    onItemsError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    onItemClick(id) {
        this.props.onListItemSelected(id);

        this.setState(({ items }) => {
            return {
                items: this._transformItemList(items, id),
            }
        })
    }

    _transformItemList(arr, id) {
        return id
            ? arr.map((el) => ({ ...el, selected: id === el.id }))
            : arr;
    }

    renderItemsList = (items) => {
        return items.map(({ name, id, selected }) => {
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
        const { loading, error, items } = this.state;

        return (
            loading
                ? <LoaderIndicator/>
                : error
                    ? <ErrorIndicator />
                    : <ul className='item-list list-group'>
                          { this.renderItemsList(items) }
                      </ul>

        );
    }
}
