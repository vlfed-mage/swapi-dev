import React, { Children, cloneElement, useContext } from 'react';

import ApiServicesContext from "../sw-service-context";

const ItemDetails = (props) => {

    const { data, children } = props,
    { id, name } = data,
    { getImgUrl, onImageError } = useContext(ApiServicesContext);

    return (
        <div className='item-details card' >
            <img className='item-image'
                 src={ getImgUrl(props.name, id) }
                 onError={ onImageError }
                 alt='item details image' />

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
