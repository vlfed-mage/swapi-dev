import React from 'react';

import { NavLink, withRouter} from "react-router-dom";

const Header = ({ onServiceChange }) => {

    const menu = [ 'people', 'planets', 'starships', 'login', 'protected' ],

    renderLinks = menu.map((el,idx ) => {
        const name = el.charAt(0).toUpperCase() + el.slice(1),
        url = idx > 2 ? `/${el}` : `/${el}/`;

        return (
            <li key={ el }>
                <NavLink to={ url } activeClassName='active'>
                    { name }
                </NavLink>
            </li>
        );
    });

    return (
        <header className='header d-flex'>
            <h3>
                <NavLink to='/'> Star DB </NavLink>
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
