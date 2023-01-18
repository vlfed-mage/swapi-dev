import React, {Children, cloneElement, Fragment} from 'react';

import ImageView from "../image-view";
import LoaderIndicator from "../loader-indicator";
import ErrorIndicator from "../error-indicator";

import { useData } from "../hooks";
import PropTypes from "prop-types";

const ItemDetails = ( props ) => {

    const { children, selectedItemId, name } = props,
    { loading, error, data } = useData(name, selectedItemId),

    classNames = props.classNames.length
        ? props.classNames
        : 'item-details card';

    if (!selectedItemId) { // check if id is selected
        return (
            <div className= { classNames } >
                <span>Select item from the list</span>
            </div>
        )
    }

    return (
        <div className= { classNames } >

            { loading && <LoaderIndicator /> }
            { error && <ErrorIndicator /> }

            { (!loading && !error) && <Fragment>
                <ImageView
                    id={ data.id }
                    name={ name } />

                <div>
                    <h4>{ data.name }</h4>
                    <ul className='list-group list-group-flush' >
                        { Children.map(
                            children.props.children,
                            (child) => cloneElement(child, { data })
                        ) }
                    </ul>
                </div>
            </Fragment> }
        </div>
    )
};

ItemDetails.defaultProps = {
    classNames: '',
    name: 'people'
}

ItemDetails.propTypes = {
    classNames: PropTypes.string,
    name: PropTypes.string.isRequired
}

export default ItemDetails;
