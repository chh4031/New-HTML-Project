import './App.css';
import userDate from './data/user-data.json'
import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import UserList from './component/UserList';
import UserinputForm from './component/UserinputForm';
import {v4} from 'uuid';
import { ThemeProvider } from './component/ThemeProvider';
import FlexboxTest from './component/FlexboxTest';

function App() {
  // console.log(userDate.userList)
  const [users, setUsers] = React.useState(userDate.userList);

  const removeUser = (id) => {
    const newUsers = users.filter(
      user => user.id !== id
    );

    setUsers(newUsers);
  }

  const addUser = (name, point) => {
    const user = {
      id : v4(),
      name,
      point
    };
    console.log(user);
    const newUsers = [...users, user]
    setUsers(newUsers)
  };

  const updateUser = (id, name, point) => {
    const newUsers = users.map(user => user.id===id? {id, name, point}:user);
    setUsers(newUsers);
  }

  return (
    <div className="App">
      <ThemeProvider>
        <Header></Header>
        <UserList users={users} onRemoveUser={removeUser} onUpdateUser={updateUser}></UserList>
        <UserinputForm onAddUser={addUser}></UserinputForm>
        <Footer></Footer>
      </ThemeProvider>
      <FlexboxTest></FlexboxTest>
    </div>
  );
}

export default App;


// name = name -> name으로 생략