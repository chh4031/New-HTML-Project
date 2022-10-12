import React from 'react' // 노드모듈에서 가져옴. jsc 코드를 쓰기위해

// props에는 객체 형태로 넘어옴. prop = {id : 'Hello', name : 'Hong'}
function Welcome(props){//컴포넌트는 첫글자는 대문자, 인자는 개체 한개
    return(
        <h1>Hello, {props.name}!</h1>
    );
};

export default Welcome; //외부에서 가져다 쓰기
// 컴포넌트의 역할인 엘리먼트를 만듬
// return 에는 create react code를 쓰던가 jsx 코드를 쓰던가
// 자바스크립트 값은 {}안에 사용 {props.name} => name값 가져옴

//이는 함수형태 컴포넌트의 예시이다.