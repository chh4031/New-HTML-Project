import React, { useContext, useState } from 'react';
import UserinputForm from './UserinputForm';
import {ThemeContext} from './ThemeProvider'

function UserListItem({id='', name='NoName', point=0, onRemove=f=>f, onUpdate=f=>f}) {
    const [editable, setEditable] = useState(false)
    const {theme} = useContext(ThemeContext);

    const handleClick = () =>{
        onRemove(id);
    }

    return (
        <div>
            <h3 style={theme} onClick={()=>editable ? setEditable(false):setEditable(true)}>{name}, {point} <button onClick={()=>onRemove(id)}>삭제</button></h3>
            {editable? <UserinputForm id={id} name={name} point={point} onUpdate={onUpdate}></UserinputForm> : null}
        </div>
    );
}

export default UserListItem;