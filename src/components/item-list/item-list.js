import React from 'react';

const ItemList = (props) => {
    const {onListItemSelected, data, children: renderItems} = props;

    const onItemClick = (id) => {
        onListItemSelected(id);
    }

    const renderItemsList = (data) => {
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
    }

    return (
        <ul className='item-list list-group'>
            { renderItemsList(data) }
        </ul>
    );
}

export default ItemList;
