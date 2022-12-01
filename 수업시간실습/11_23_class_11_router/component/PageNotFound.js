import React from 'react';
import {useLocation, useNavigate, Link, Navigate} from 'react-router-dom';

function PageNotFound(props, {user}) {
    const location = useLocation();
    const navigation = useNavigate();

    return (
        <div>
            <p>Page Not Found at {location.pathname}</p>
            {/* <Link to='/'>
                <p>Home</p>
            </Link> */}
            <button onClick={()=>navigation(`/`)}>Home</button>
        </div>
    );
}

export default PageNotFound;