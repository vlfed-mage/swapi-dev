import React, { Component, Children, cloneElement } from 'react';

import ApiServices from '../../api-services';
import Helpers from "../helpers";

export default class ItemDetails extends Component {

    helpers = new Helpers();
    apiServices = new ApiServices();

    render() {
        const { data } = this.props;

        if (!data) {
            return null;
        }

        const { id, name } = data;

        return (
            <div className='item-details card' >
                <img className='item-image'
                     src={ this.apiServices.getImgUrl(this.props.name, id) }
                     onError={ this.helpers.onImageError }
                     alt='item details image' />

                <div className='card-body' >
                    <h4>{ name }</h4>
                    <ul className='list-group list-group-flush' >
                        { Children.map(
                            this.props.children,
                            (child) => cloneElement(child, { data })
                        ) }
                    </ul>
                </div>
            </div>
        )
    }
}
