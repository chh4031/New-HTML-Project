import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Userlist from './components/Userlist';
import Userlist2 from './components/Userlist2';
import AddUser from './components/AddUser';
import NewUserlist from './components/NewUserlist';

function App() {

    const userList = [
        {name:'Hong', point:100},
        {name:'Kim', point:50},
        {name:'Lee', point:200},
        {name:'Park', point:30},
    ];

    const [users, setUsers] = useState(userList);

    function addUser(name, point){
      const newUsers = [...users, {name:name, point:point}];
      setUsers(newUsers); 
  };

  return (
    <div className="App">
      <NewUserlist users={users}></NewUserlist>
      <AddUser onAdd={addUser}></AddUser>
      {/* <Userlist2></Userlist2> */}
    </div>
  );
}

export default App;

// onAdd라는 이름으로 addUser함수를 하위 컴포넌트로 넘겨줌. props를 onAdd라고 정의한 것이라고 생각해도 될듯
// userList를 users라는 props로 하위컴포넌트로 데이터를 보냄
