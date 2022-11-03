import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AddUser from './components/AddUser';
import DeleteUser from './components/DeleteUser';

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

    function deleteUser(index){
      const newUsers = users.filter(
              (user, index_1)=>index_1 !== index
          );
      setUsers(newUsers);
  };

  return (
    <div className="App">
      <DeleteUser users={users} ondel={deleteUser} ></DeleteUser>
      <AddUser onAdd={addUser}></AddUser>
    </div>
  );
}

export default App;

