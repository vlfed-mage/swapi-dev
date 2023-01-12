import React, { Children, cloneElement } from 'react';

import ImageView from "../image-view";
import LoaderIndicator from "../loader-indicator";
import ErrorIndicator from "../error-indicator";
import {useData} from "../hooks";

const ItemDetails = (props) => {

    const { name, selectedItemId, children } = props,
    { loading, error, data } = useData(name, selectedItemId);

    if (loading) return <LoaderIndicator />;
    if (error) return <ErrorIndicator />;

    return (
        <div className='item-details card' >
            <ImageView
                id={ data.id }
                name={ props.name } />

            <div className='card-body' >
                <h4>{ data.name }</h4>
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
