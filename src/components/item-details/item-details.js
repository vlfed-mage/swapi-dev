import React, { Children, cloneElement } from 'react';

import ImageView from "../image-view";

const ItemDetails = (props) => {

    const { data, children } = props,
    { id, name } = data;

    return (
        <div className='item-details card' >
            <ImageView
                id={ id }
                name={ props.name } />

            <div className='card-body' >
                <h4>{ name }</h4>
                <ul className='list-group list-group-flush' >
                    { Children.map(
                        children,
                        (child) => cloneElement(child, { data })
                    ) }
                </ul>
            </div>
        </div>
    )
};

export default ItemDetails;
