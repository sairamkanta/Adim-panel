import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { Button, Row, Col } from 'react-bootstrap';

const UserList = () => {
  const { users, deleteUser } = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='container'>
      <h2 className='user-list'>User List</h2>
      <Row className="justify-content-end mb-3">
        <Col xs="auto">
          <Link to="/create-user" className="btn btn-success">Create User</Link>
        </Col>
      </Row>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Link to={`/user/${user.id}`} className="btn btn-info btn-sm view">View</Link>{' '}
                <Button onClick={() => deleteUser(user.id)} variant="danger" size="sm" className='delete'>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {[...Array(Math.ceil(users.length / usersPerPage)).keys()].map(number => (
          <button key={number} onClick={() => paginate(number + 1)}>
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserList;
