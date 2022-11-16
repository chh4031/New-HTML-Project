import React, {useState} from 'react';
import User2 from './User2';

function User3({users, onRemoveUser, onUpdateUser}){
    const [text, setText] = useState("");

    return(
        <div>
            {/* <label>Find:
            <input type="text" value={text} onChange={event=>setText(event.target.value)} placeholder='Notice name...'></input>
            </label> */}
            <div>
                {users.filter(
                    user => user.title1.includes(text)
                ).map(
                    user => <User2 key={user.id} user={user} onRemove={onRemoveUser} onUpdate={onUpdateUser}></User2>
                )}
            </div>
        </div>
    )
}

export default User3;