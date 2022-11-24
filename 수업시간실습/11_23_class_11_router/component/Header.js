import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <h1>User List</h1>
            <div>
                <Link to='/'><span>Home</span> </Link>
                <Link to='/list'><span>UserList</span> </Link>
                <Link to='/About'><span>About</span> </Link>
            </div>
        </div>
    );
}

export default Header;