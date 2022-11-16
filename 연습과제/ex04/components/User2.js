import React, {useState} from 'react';
import User1 from './User1';

function User2({user, onRemove, onUpdate}){
    const [editable, setEditable] = useState(false);

    return(
        <div>
            <span onClick={()=>{editable? setEditable(false): setEditable(true)}}>
                {user.title1} {user.title2}
                <button onClick={()=> onRemove(user.id)}>삭제</button>
            </span>
            {/* {editable ? <User1 {...user} onUpdateUser={onUpdate}></User1> : null} */}
            {editable ? <p>{user.content}</p> : null}
        </div>
    )
};
export default User2;

