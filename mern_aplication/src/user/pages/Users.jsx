import React from 'react';
import UsersList from '../components/UsersList';

function Users() {
  const USERS = [
    {
      id: 'u1',
      name: 'Ante',
      image: 'https://static.thenounproject.com/png/4778723-200.png',
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
}

export default Users;
