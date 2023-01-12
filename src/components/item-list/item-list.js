import React from 'react';
import {useData} from "../hooks";
import LoaderIndicator from "../loader-indicator";
import ErrorIndicator from "../error-indicator";

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

    if (loading) return <LoaderIndicator />;
    if (error) return <ErrorIndicator />;

    return (
        <ul className='item-list list-group'>
            { renderItemsList(data) }
        </ul>
    );
}

export default ItemList;
