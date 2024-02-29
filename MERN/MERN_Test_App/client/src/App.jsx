import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [username, setUserName] = useState('');
  const [updateId, setUpdateId] = useState(null);
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState(0);
  const [newUsername, setNewUserName] = useState('');
  const [showUpdateFields, setShowUpdateFields] = useState(false); // Dodajemo stanje za prikaz novih polja za ažuriranje

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

  function updateUser(id) {
    Axios.put(`http://localhost:3001/updateUser/${id}`, {
      name: newName,
      age: newAge,
      username: newUsername,
    }).then((Response) => {
      console.log('User updated');
      // Nakon što ažuriramo korisnika, postavljamo sve vrijednosti na početne
      setNewName('');
      setNewAge(0);
      setNewUserName('');
      setUpdateId(null);
      setShowUpdateFields(false); // Sakrivamo polja za ažuriranje
    });
  }

  return (
    <div className='app'>
      <div className='usersDisplay'>
        {listOfUsers.map((user) => {
          return (
            <div key={user._id}>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>UserName: {user.username}</h1>
              {/* Omogućavamo prikazivanje polja za ažuriranje samo za odabrane korisnike */}
              {updateId === user._id ? (
                <div>
                  <input
                    type='text'
                    placeholder='New Name...'
                    value={newName}
                    onChange={(event) => setNewName(event.target.value)}
                  />
                  <input
                    type='number'
                    placeholder='New Age...'
                    value={newAge}
                    onChange={(event) => setNewAge(event.target.value)}
                  />
                  <input
                    type='text'
                    placeholder='New UserName...'
                    value={newUsername}
                    onChange={(event) => setNewUserName(event.target.value)}
                  />
                  <button onClick={() => updateUser(updateId)}>
                    Update user
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    onClick={() => {
                      // Postavljamo id korisnika koji se ažurira i prikazujemo polja za ažuriranje
                      setUpdateId(user._id);
                      setShowUpdateFields(true);
                    }}
                  >
                    Update user
                  </button>
                  <button onClick={() => deleteUser(user._id)}>
                    Delete user
                  </button>
                </div>
              )}
              <p>=================</p>
            </div>
          );
        })}
      </div>
      <div>
        <input
          type='text'
          placeholder='Name...'
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type='number'
          placeholder='Age...'
          value={age}
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <input
          type='text'
          placeholder='UserName...'
          value={username}
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
        {/* Prikazujemo dugme za kreiranje korisnika samo ako se ne prikazuju polja za ažuriranje */}
        {!showUpdateFields && <button onClick={createUser}>Create user</button>}
      </div>
    </div>
  );
}

export default App;
