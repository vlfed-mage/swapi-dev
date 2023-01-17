import React from 'react';

import { Link } from "react-router-dom";

const Header = (props) => {
    const { onServiceChange } = props;

    return (
        <header className='header d-flex'>
            <h3>
                <Link to='/'>
                    Star DB
                </Link>
            </h3>
            <ul className='d-flex'>
                <li>
                    <Link to='/people/'>People</Link>
                </li>
                <li>
                    <Link to='/planets/'>Planets</Link>
                </li>
                <li>
                    <Link to='/starships/'>Starships</Link>
                </li>
            </ul>
            <button
                className='btn btn-primary btn-sm'
                onClick={ onServiceChange } >
                Switch service
            </button>
        </header>
    );
};

export default Header;
