import React from "react";
import {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);

    // const change = function(){

    // };

    return (
        <div>
            <p>click count: {count}</p>
            <button onClick={()=>setCount(count + 1)}>Click</button>
        </div>
    );
};

export default Counter;

// 이것이 훅을 쓴거임!