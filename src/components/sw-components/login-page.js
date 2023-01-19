import React from "react";
import { Redirect } from "react-router-dom";

const LoginPage = ({ isLoggedIn, onLogin }) => {

    if (isLoggedIn) {
        return <Redirect to='/' />
    }

    return (
        <div className='jumbotron'>
            <p>Login to see protected page.</p>
            <button
                type='button'
                onClick={ onLogin }
                className='btn btn-primary' >
                Login
            </button>
        </div>
    )
};

export default LoginPage;