import React, { Children, cloneElement } from 'react';

import ApiServices from '../../api-services';

const ItemDetails = (props) => {
    const { getImgUrl, onImageError } = new ApiServices(),
          { data } = props;

    if (!data) {
        return null;
    }

    const { id, name } = data;

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
                        props.children,
                        (child) => cloneElement(child, { data })
                    ) }
                </ul>
            </div>
        </div>
    )
};

export default ItemDetails;
