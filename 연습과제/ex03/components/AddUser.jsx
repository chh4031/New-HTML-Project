import React from 'react';
import { useState } from 'react';

function AddUser(props) {

    const [name, setName] = useState(' ');
    const [point, setPoint] = useState(0);

    function changeName(event){
        setName(event.target.value);
        // console.log(name);
    };

    function changePoint(event){
        setPoint(event.target.value);
        // console.log(point);
    };

    function handleSumbit(event){
        props.onAdd(name, point); // 상위 컴포넌트의 함수값을 호출함.
        event.preventDefault();
    };

    return (
        <div>
            <form onSubmit={(event)=>handleSumbit(event)}>
                <label>
                    Name : 
                    <input type="text" value={name} onChange={(event)=>changeName(event)}></input>
                </label>
                <label>
                    point : 
                    <input type="text" value={point} onChange={(event)=>changePoint(event)}></input>
                </label>
                <input type="submit" value="ADD"></input>
            </form>
        </div>
    );
}

export default AddUser;