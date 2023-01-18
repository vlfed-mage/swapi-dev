import React from 'react';

import { NavLink, withRouter} from "react-router-dom";

const Header = ({ onServiceChange }) => {

    const menu = ['people', 'planets', 'starships'],
    renderLinks = menu.map((el) => {
        const name = el.charAt(0).toUpperCase() + el.slice(1);
        return (
            <li>
                <NavLink to={ `/${el}/` } activeClassName='active'>
                    { name }
                </NavLink>
            </li>
        );
    });

    return (
        <header className='header d-flex'>
            <h3>
                <NavLink to='/'>
                    Star DB
                </NavLink>
            </h3>
            <ul className='d-flex'>
                { renderLinks }
            </ul>
            <button
                className='btn btn-primary btn-sm'
                onClick={ onServiceChange } >
                Switch service
            </button>
        </header>
    );
};

export default withRouter(Header);
