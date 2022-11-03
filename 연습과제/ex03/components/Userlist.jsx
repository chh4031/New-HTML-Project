import React from 'react';
import { useState } from 'react';

function Userlist(props) {
    const userList = [
        {name:'Hong', point:100},
        {name:'Kim', point:50},
        {name:'Lee', point:200},
        {name:'Park', point:30},
    ];

    const [users, setUsers] = useState(userList);
    const [name, setName] = useState(' '); // 입력되는 값을 state에서 관리하고 싶음.
    const [point, setPoint] = useState(0);

    function deleteUser(index){
        const newUsers = users.filter(
                (user, index_1)=>index_1 !== index
            );
            // 넘어온 index값과 index_1의 값이 다른거만 newUsers에 넣어줌
    //    console.log(newUsers);
        setUsers(newUsers);
    };

    function changeName(event){
        setName(event.target.value);// 현재 이벤트가 발생한 엘리먼트를 가져옴 즉 input의 value값을 나타냄, 변경된 값이 value로 들어감.
        // console.log(name);
    };

    function changePoint(event){
        setPoint(event.target.value);
        // console.log(point);
    };

    function handleSumbit(event){
        const newUsers = [...users, {name:name, point:point}]; // 앞 name은 키 뒷 name은 state정의한 name임. point도 동일
        setUsers(newUsers); // setUsers를 이용해 새로운 배열을 넣겠다.
        event.preventDefault();//onSumbit 이후 다시 렌더링 되는데 이때 되는 디폴트 이벤트를 막겠다.
    };

    return (
        <div>
            {users.map(
                (item, index)=>
                <div key={index}>
                    <span>{item.name}, {item.point}</span>
                    <button onClick={()=>deleteUser(index)}>삭제</button>
                </div>
            )}
            <br/>
            <form onSubmit={(event)=>handleSumbit(event)}>
                <label>
                    Name : 
                    <input type="text" value={name} onChange={(event)=>changeName(event)}></input>{/* 폼의 데이터를 value로 재 렌더링 가능하게 컴포넌트가 관리, 콜백함수가 자동적으로 이벤트 1개 받음*/}
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

export default Userlist;

// map에서 두개 매개변수 두개받으면 두번째는 인덱스값임
// 인덱스 값을 키로 줘서 F12 콘솔상에서의 오류를 방지하는 역할을 하도록함.

// {users.map(
//     (item, index)=><p key={index}>{item.name}, {item.point}</p>
//     <button>삭제</button>
// )}
// 위의 코드는 리턴이 2개라 오류 div로 묶음

// deleteUser(index)
// 위의 이벤트 처리는 리엑트에서는 이름만 쓸수 있어 못쓴다. 그래서 ()=>로 해당 함수를 호출시키는 함수를 만들어서 넣음

// newUsers를 만드는 이유는 리엑트는 함수형 프로그래밍이라서 정의된 배열을 바꾸면 안된다.

// state에서 입력값을 관리하는 이유 : input은 웹사이트에서 관리하는데 이를 리엑트에서 쓰면 동기화 문제 발생