import React from 'react';

import { useData } from "../hooks";
import LoaderIndicator from "../loader-indicator";
import ErrorIndicator from "../error-indicator";
import PropTypes from "prop-types";

const ItemList = (props) => {
    const { onListItemSelected, name, children: renderItems } = props,
    { loading, error, data } = useData(name),

    onItemClick = (id) => {
        onListItemSelected(id);
    },

    renderItemsList = (data) => {
        return data.map((item) => {
            const { id, selected } = item,
                label = renderItems(item), // can be any of type, including function
                classNames = selected ? 'list-group-item selected' : 'list-group-item';

            return (
                <li
                    className={ classNames }
                    onClick={ () => onItemClick(id) }
                    key={ id } >
                    { label }
                </li>
            )
        })
    };

    return (
        <ul className='item-list list-group card'>
            { loading && <LoaderIndicator /> }
            { error && <ErrorIndicator /> }

            { (!loading && !error) && renderItemsList(data) }
        </ul>
    );
};

ItemList.defaultProps = {
    name: 'people'
}

ItemList.propTypes = {
    name: PropTypes.string.isRequired
}

export default ItemList;
