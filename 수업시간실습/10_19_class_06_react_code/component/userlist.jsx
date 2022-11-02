import React from 'react';
import { useState } from 'react';

function Userlist(props) {
    const users = [
        {name:'Hong', point:100},
        {name:'Kim', point:50},
        {name:'Lee', point:200},
        {name:'Park', point:30},
    ]

    const [userList, setUserList] = useState(users);//const [state 변수, 변경함수]

    function deleteUser(index_1){
            const newList = userList.filter(
                (user, index)=>index !== index_1
            );
            setUserList(newList);
    }
    return (
        <div>
            {userList.map(
                (user, index)=>
                <div key={index}>
                    <span>{user.name}, {user.point}</span>
                    <button onClick={()=>deleteUser(index)}>Delete</button>
                </div>
            )}
        </div>
    );
}

export default Userlist;

//state => 새로 랜더링 될때마다 다시 적용시키는것