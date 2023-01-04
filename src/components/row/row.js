import React, { Children } from 'react';

const Row = (props) => {
    const elements = Children.map(props.children, (el) => {
        return (
            <div className='col-md-6'> { el } </div>
        )
    });

    return (
        <div className='row mb2'>
            { elements }
        </div>
    );
}

export default Row;