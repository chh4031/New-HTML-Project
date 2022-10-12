import React from 'react';

class Counter2 extends React.Component{

    
    constructor(props){
        super(props);
        this.state = {count: 0}; //constructor에서 state 정의 super클래스를 써서 넘겨줘야 props값을 쓸 수 있다.
    }

    change(){
        this.setState({count : this.state.count+1})// state는 값 변경 불가. 객체를 만들어서 넘겨줘야함.
    }
    // 그냥 바꿔도 되는데 이렇게 setState을 하면 화면이 바뀜
    // 즉 실제 값은 바뀌지만 화면은 바꾸지 않아서 count 값만 바뀌고 화면에는 그대로 0으로 나옴.

    render(){
        return(
            <div>
                <p>click count: {this.state.count}</p>
                <button onClick={()=>this.change()}>Click</button>
            </div>
        );
    }
}

export default Counter2;

// 두개 리턴 안되서 div로 묶음.
// 자바스크립트에서는 필드를 생성자안에서 정의해야함.
// 자바스크립트에서는 생성자 이름은 constructor로 동일. 자바와 다름
// 사용자가 생성자를 임의로 만들면 부모에 props를 정의해 줘야함
// 위와 같이 state를 정의해줌