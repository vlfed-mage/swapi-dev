import React, { Children } from 'react';

const Row = (props) => {
    return (
        <div className='row mb2'>
            { Children.map(
                props.children,
                (el) => ( <div className='col-md-6'> { el } </div> )
            ) }
        </div>
    );
}

export default Row;