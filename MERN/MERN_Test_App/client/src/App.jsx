import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [username, setUserName] = useState('');

  useEffect(() => {
    Axios.get('http://localhost:3001/getUsers').then((Response) => {
      setListOfUsers(Response.data);
    });
  }, []);

  function createUser() {
    Axios.post('http://localhost:3001/createUser', {
      name,
      age,
      username,
    }).then((Response) => {
      setListOfUsers([...listOfUsers, { name, age, username }]);
    });
  }

  //deleteuser
  function deleteUser(id) {
    Axios.delete(`http://localhost:3001/deleteUser/${id}`).then((response) => {
      setListOfUsers(listOfUsers.filter((user) => user._id !== id));
      alert('User deleted');
    });
  }

  return (
    <div className='app'>
      <div className='usersDisplay'>
        {listOfUsers.map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>UserName: {user.username}</h1>
              <button onClick={() => deleteUser(user._id)}>Delete user</button>
              <p>=================</p>
            </div>
          );
        })}
      </div>
      <div>
        <input
          type='text'
          placeholder='Name...'
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type='number'
          placeholder='Age...'
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <input
          type='text'
          placeholder='UserName...'
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
        <button onClick={createUser}>Create user</button>
      </div>
    </div>
  );
}

export default App;
