import React, { Component } from 'react';

class Userlist2 extends Component {

    userList = [
        {name:'Hong', point:100},
        {name:'Kim', point:50},
        {name:'Lee', point:200},
        {name:'Park', point:30},
    ];


    constructor(props){
        super(props);   

        this.state = {users1:this.userList};// 객체형태라서 {}붙임, userList가 생성자가 아닌 필드에 있어서 this 써줘야함.
        this.deleteUser = this.deleteUser.bind(this);
    }


    deleteUser(index_1) {
        const newList = this.state.users1.filter(
            (user,index)=>index !== index_1
        );
        this.setState({users1: newList});
    };


    render() {
        return (
            <div>
                {this.state.users1.map(
                (item, index)=>
                <div key={index}>
                    <span>{item.name}, {item.point}</span>
                    <button onClick={()=>this.deleteUser(index)}>삭제</button>
                </div>
            )}
            </div>
        );
    }
}

export default Userlist2;