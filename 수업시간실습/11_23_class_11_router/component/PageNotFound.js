import React from 'react';
import {useLocation, useNavigate, Link} from 'react-router-dom';

function PageNotFound(props) {
    const location = useLocation();
    // const navigation = useNavigate();

    return (
        <div>
            <p>Page Not Found at {location.pathname}</p>
            <Link to='/'>
                <p>Home</p>
            </Link>
            {/* <button onClick={()=>navigation()}>Home</button> */}
        </div>
    );
}

export default PageNotFound;