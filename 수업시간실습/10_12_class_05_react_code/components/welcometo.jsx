import React from "react";

class Welcome2 extends React.Component{
    render(){
        return(
            <h1>Hello, {this.props.name}</h1>
        );
    }
}

export default Welcome2;

// 이는 클래스형태의 컴포넌트이다.
// props는 생성자가 자동으로 생성되어 있음.(생략되어 있지만), 필드에 저장되어 있어 사용가능
// 필드 접근을 위한 본인 this를 호출해서 써야함.
// class는 render 함수 써야하고, React.Componet에서 상속받아 사용함.