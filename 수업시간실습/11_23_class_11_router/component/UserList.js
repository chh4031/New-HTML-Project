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
    const [name, setName] = useState('');
    const url = 'https://api.github.com/users';
    const searchurl = 'https://api.github.com/search/users?q=Q';

    const handleClick = async () => {
        try{
            const response = await fetch(searchurl+name)
            const result = await response.json();
            setUsers(result.items);
        }catch(error){
            console.error(error)
        }
    };

        // .then(response => response.json())
        // .then(result => setUsers(result.items))
        // .catch(console.error)

    useEffect(
        ()=>{
            fetch(url)
            .then(res => res.json())
            .then(userList => setUsers(userList))
            .catch(console.error)
        },[]
    );

    
    return (
        <div>
            <h2>UserList</h2>
            <div>
                <input type='text' onChange={(event)=>setName(event.target.value)} placeholder='name'/>
                <button onClick={()=>handleClick()}>Search</button>
            </div>
            <div>
                {users.map(
                    user => <UserListItem key={user.id} user={user}/>
                )}
            </div>
        </div>
    );
}

export default UserList;

// event.target.value 시험에 나옴