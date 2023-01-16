import React from 'react';

const Header = (props) => {
    const { onServiceChange } = props;

    return (
        <header className='header d-flex'>
            <h3>
                <a href='#'>
                    Star DB
                </a>
            </h3>
            <ul className='d-flex'>
                <li>
                    <a href='#'>People</a>
                </li>
                <li>
                    <a href='#'>Planets</a>
                </li>
                <li>
                    <a href='#'>Starships</a>
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
