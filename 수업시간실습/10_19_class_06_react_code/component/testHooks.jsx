import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function TestHooks(props) {
    const [count, setCount] = useState(0);

    useEffect(
        ()=>{console.log('useEffect');
        return ()=>{};
    }
    );

    return (
        <div>
           <p>count:{count}</p> 
           <button onClick={()=>setCount(count+1)}>Click</button>
        </div>
    );
}

export default TestHooks;

// state가 바뀌어야 useEffect가 실행됨.
// hooks를 쓰면 클래스 컴포넌트의 다양한 기능을 사용할 수 있다.


// useEffect(
//     ()=>{console.log('useEffect')},
//     []
// );

// useEffect(
//     ()=>{console.log('useEffect')}
// );

// useEffect(
//     ()=>{console.log('useEffect')},
//     [count]
// );