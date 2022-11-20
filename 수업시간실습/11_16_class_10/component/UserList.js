import React, { useState } from 'react';
import UserListItem from './UserListItem';

function UserList({users=[], onRemoveUser=f=>f, onUpdateUser=f=>f}) {

    const [txtFind, setFind] = useState('');

    return (
        <div>
            <label>
                Find:
                <input type="text" value={txtFind} onChange={(event)=>setFind(event.target.value)}></input>
            </label>
            {users.filter(user => user.name.includes(txtFind)).map(user=><UserListItem key={user.id} {...user} onRemove={onRemoveUser} onUpdate={onUpdateUser}></UserListItem>)}
        </div>
    );
}

export default UserList;

// onRemoveUser=f=>f 이거는 동작하지 않는 함수를 의미함.