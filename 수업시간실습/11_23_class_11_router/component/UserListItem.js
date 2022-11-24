import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function UserListItem({user}) {
    const navigate = useNavigate()

    return (
        <div>
            {/* <Link to={`/user/${user.id}`}>
                <p>{user.id}</p>
            </Link> */}
            <p onClick={()=>navigate(`/user/${user.login}`)}>{user.login}</p>
        </div>
    );
}

export default UserListItem;