import React from "react";

const Feature = ({ data, field, label }) => {
    return (
        <li className='list-group-item' >
            <span className='term'>{ `${ label }: ` }</span>
            <span>{ data[field] }</span>
        </li>
    )
}

export default Feature;