import React from 'react';

const Row = (props) => {
    const elements = props.children.map((el, idx) => {
        return (
            <div
                key={ idx }
                className='col-md-6'>
                { el }
            </div>
        )
    });

    return (
        <div className='row mb2'>
            { elements }
        </div>
    )
}

export default Row;