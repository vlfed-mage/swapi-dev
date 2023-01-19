import React from "react";
import { Redirect } from "react-router-dom";

const ProtectedPage = ({ isLoggedIn }) => {

    if (isLoggedIn) {
        return (
            <div className='jumbotron text-center'>
                <p>This is protected page. You're allowed to see this.</p>
            </div>
        )
    }

    return <Redirect to='/login' />
}

export default ProtectedPage;