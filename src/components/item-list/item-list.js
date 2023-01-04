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
        const { getData, name } = this.props;
        getData(name)
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
        return arr.map((el) => ({ ...el, selected: id === el.id }));
    }

    renderItemsList = (items) => {
        return items.map((item) => {
            const { id, selected } = item,
                  label = this.props.children(item), // can be any of type, including function
                  classNames = selected ? 'list-group-item selected' : 'list-group-item';

            return (
                <li
                    className={ classNames }
                    onClick={ () => this.onItemClick(id) }
                    key={ id } >
                    { label }
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
