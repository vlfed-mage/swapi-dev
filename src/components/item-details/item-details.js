import React, { Children, cloneElement, useContext } from 'react';

import ApiServicesContext from "../sw-service-context";
import ImageView from "../image-view";

const ItemDetails = (props) => {

    const { data, children } = props,
    { id, name } = data,
    { getImgUrl, onImageError } = useContext(ApiServicesContext);

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
