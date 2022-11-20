import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: green;
`;

function UserinputForm({id='', name='', point='', onAddUser=f=>f, onUpdate=f=>f}) {
    const [txtName, setName] = useState(name)
    const [txtPoint, setPoint] = useState(point)

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(txtName, txtPoint);
        if(id){
            onUpdate(id, txtName, txtPoint);
        }else{
            onAddUser(txtName, txtPoint);
        }
        setName('');
        setPoint('');
    }


    return (
        <Wrapper>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder='User Name' value={txtName} onChange={(event)=>setName(event.target.value)}></input>
                <input type="text" placeholder='Point' value={txtPoint} onChange={(event)=>setPoint(event.target.value)}></input>
                <input type="submit" value={id?'수정':'추가'}></input>
            </form>
        </Wrapper>
    );
}

export default UserinputForm;