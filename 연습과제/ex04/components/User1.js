import React, {useState} from 'react';

function User1({id = '', title1 = '', title2 = '', content='', onAddUser=f=>f, onUpdateUser=f=>f}){
    const [tt1, settitle_1] = useState(title1);
    const [tt2, settitle_2] = useState(title2);
    const [tt3, setcontent] = useState(content);

    const thisSumbit = (event) => {
        event.preventDefault();
        if(id){
            onUpdateUser(id, tt1, tt2, tt3)
        }else{
            onAddUser(tt1, tt2, tt3);
            settitle_1('');
            settitle_2('');
            setcontent('');
        };
    }

    return(
        <form onSubmit={thisSumbit}>
            <input type='text' value={tt1} onChange={event=>settitle_1(event.target.value)} placeholder = 'Notice'></input>
            <input type='text' value={tt2} onChange={event=>settitle_2(event.target.value)} placeholder = 'Class Name'></input>
            <input type='text' value={tt3} onChange={event=>setcontent(event.target.value)} placeholder = 'Detail content'></input>
            <input type='submit' value={id ? "수정" : "추가"}></input>
        </form>
    );
}

export default User1;