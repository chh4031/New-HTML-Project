import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function UserDetail(props) {
    const {id} = useParams();
    const [user, setUser] = useState({});
    const url = 'https://api.github.com/users/';

    useEffect(
        ()=>{
            fetch(url+id)
            .then((response)=>response.json())
            .then((user) => setUser(user))
            .catch(console.error)
        }, []
    );
    
    return (
        <div>
            <h3>{id}</h3>
            <img src={user.avatar_url}></img>
            <p>{user.name}</p>
            <p>{user.company}</p>
        </div>
    );
}

export default UserDetail;