import React from 'react';

import Helpers from '../helpers';
import ApiServices from "../../api-services";

const ItemDetailsView = ({ details, category }) => {
    const helpers = new Helpers(),
          apiServices = new ApiServices();

    const { id, name, gender, birthYear, eyeColor } = details;

    return (
        <div className='item-details card' >
            <img className='item-image'
                 src={ apiServices.getImgUrl(category, id) }
                 onError={ helpers.onImageError } />

            <div className='card-body' >
                <h4>{ name }</h4>
                <ul className='list-group list-group-flush' >
                    <li className='list-group-item' >
                        <span className='term'>Gender: </span>
                        <span>{ gender }</span>
                    </li>
                    <li className='list-group-item' >
                        <span className='term'>Birth Year: </span>
                        <span>{ birthYear }</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>Eye Color: </span>
                        <span>{ eyeColor }</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ItemDetailsView;
