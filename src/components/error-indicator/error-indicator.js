import React from 'react';

import cover from '../../images/death-star.svg';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator" >
            <img
                src={ cover }
                alt="error icon" />
            <span
                className="boom" >
                BOOM!
            </span>
            <span>something has gone terribly wrong</span>
            <span>(but we already sent droids to fix it)</span>
        </div>
    );
};

export default ErrorIndicator;
