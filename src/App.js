import React, { useState } from 'react';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList';


function App() {
  const [userList, setUserList] = useState([]);

  const onSaveUserData = (userData) => {
    setUserList((prevUserList) => {
     return [...prevUserList, ...userData]
    })
  }

  return (
    <div>
      <AddUser onSave={onSaveUserData} />
      <UsersList items={userList} />
    </div>
  );
}

export default App;
