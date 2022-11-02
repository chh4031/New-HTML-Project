import React, { Component } from 'react';

class Userlist2 extends Component {
    constructor(props){
        super(props);

        const users = [
            {name:'Hong', point:100},
            {name:'Kim', point:50},
            {name:'Lee', point:200},
            {name:'Park', point:30},
        ];

        this.state = {userList: users}

        this.deleteUser= this.deleteUser.bind(this);
    }

    deleteUser(index_1){
        const newList = this.state.userList.filter(
            (user, index)=>index !== index_1
        );
        this.setState({userList: newList});
    };

    render() {
        return (
            <div>
            {this.state.userList.map(
                (user, index)=>
                <div key={index}>
                    <span>{user.name}, {user.point}</span>
                    <button onClick={()=>this.deleteUser(index)}>Delete</button>
                </div>
            )}
        </div>
        );
    }
}
export default Userlist2;