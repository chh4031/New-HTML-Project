import React from 'react';
// import { useState } from 'react';

function NewUserlist(props) {

    const {users} = props;

    function deleteUser(index){
    //     const newUsers = users.filter(
    //             (user, index_1)=>index_1 !== index
    //         );
    //         // 넘어온 index값과 index_1의 값이 다른거만 newUsers에 넣어줌
    // //    console.log(newUsers);
    //     setUsers(newUsers);
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
        </div>
    );
}

export default NewUserlist;

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