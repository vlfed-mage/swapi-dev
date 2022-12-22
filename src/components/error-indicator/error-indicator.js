import React from 'react';

import icon from './death-star.png'

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={ icon } alt="error indicator"/>
            <h2>BOOM!</h2>
            <span>Something went terrible wrong</span>
            <span>We already send droids to fix it</span>
        </div>
    )
}

export default ErrorIndicator;
