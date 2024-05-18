import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../UserContext';


const UserDetails = () => {
  const { id } = useParams();
  const { users } = useContext(UserContext);
  const user = users.find(user => user.id === parseInt(id));

  return (
    <div className='container userdata'>
      {user ? (
        <>
          <h2 className='user-list'>User Details</h2>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <Link to={`/edit-user/${user.id}`}>Edit</Link>
        </>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default UserDetails;
