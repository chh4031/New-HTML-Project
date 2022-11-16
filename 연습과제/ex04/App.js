import './App.css';
import mydata from './mydata/mydata.json';
import Header from './components/Header';
import User1 from './components/User1';
import User3 from './components/User3';
import React, {useState} from 'react';
import {v4} from 'uuid';


function App() {

  const [users,setUsers] = useState(mydata.newdata)

  const addUser = (title1, title2, content) => {
    const newUser = {id:v4(), title1, title2, content};
    setUsers([...users, newUser])
  };

  const removeUser = (id) =>{
    const newUsers = users.filter(user => user.id !== id)
    setUsers(newUsers);
  };

  const updateUser = (id, title1, title2, content) => {
    const newUsers = users.map(user => user.id === id ? {id, title1, title2, content} : user);
    setUsers(newUsers);
  };

  return (
    <div className="App">
      <Header title="공지사항와 강의내용"></Header>
      <User3 users={users} onRemoveUser={removeUser} onUpdateUser={updateUser}></User3>
      <User1 onAddUser={addUser}></User1>
    </div>
  );
}

export default App;
