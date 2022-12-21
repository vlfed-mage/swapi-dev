import React from 'react';

const Header = () => {
    return (
        <div className="header d-flex">
            <h3>
                <a href="javascript:void(0)">
                    Star DB
                </a>
            </h3>
            <ul className="d-flex">
                <li>
                    <a href="javascript:void(0)">People</a>
                </li>
                <li>
                    <a href="javascript:void(0)">Planets</a>
                </li>
                <li>
                    <a href="javascript:void(0)">Starships</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;