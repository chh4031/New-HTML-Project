import React from 'react';
import {useState, useEffect} from 'react';
import UserListItem from './UserListItem';

const userList = [
    {id : '0000', name : 'Hong'},
    {id : '0001', name : 'Kim'},
    {id : '0002', name : 'Park'}
];

function UserList(props) {
    const [users, setUsers] = useState([]);
    const url = 'https://api.github.com/users';

    useEffect(
        ()=>{
            fetch(url)
            .then(res => res.json())
            .then(userlist => setUsers(userlist))
        },[]
    );

    
    return (
        <div>
            <h2>UserList</h2>
            <div>
                {users.map(
                    user => <UserListItem key={user.id} user={user}/>
                )}
            </div>
        </div>
    );
}

export default UserList;