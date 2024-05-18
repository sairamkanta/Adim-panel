import React, { useContext, useState, useEffect } from 'react';
import { useHistory, useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../UserContext';


const UserForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users, addUser, updateUser } = useContext(UserContext);
  const isEdit = Boolean(id);

  const [user, setUser] = useState({
    username: '',
    email: '',
    role: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    role: ''
  });

  useEffect(() => {
    if (isEdit) {
      const userToEdit = users.find(user => user.id === parseInt(id));
      if (userToEdit) setUser(userToEdit);
    }
  }, [id, isEdit, users]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    // Clear the validation error when the user starts typing again
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const errorsCopy = { ...errors };
    if (!user.username) {
      errorsCopy.username = 'Username is required';
    }
    if (!user.email) {
      errorsCopy.email = 'Email is required';
    }
    if (!user.role) {
      errorsCopy.role = 'Role is required';
    }
    setErrors(errorsCopy);

    // If there are no errors, submit the form
    if (!errorsCopy.username && !errorsCopy.email && !errorsCopy.role) {
      if (isEdit) {
        updateUser(user);
      } else {
        user.id = users.length + 1; 
        addUser(user);
      }
      navigate('/');
    }
  };

  return (
    <div className='centered-container'> 
      <div className='container text-center'>
        <h2 className='user-list'>{isEdit ? 'Edit User' : 'Create User'}</h2>
        <form onSubmit={handleSubmit} className="form-container">
  <div>
    <label>Username:</label>
    <input
      type="text"
      name="username"
      value={user.username}
      onChange={handleChange}
      required
    />
    {errors.username && <p className="error-message">{errors.username}</p>}
  </div>
  <div>
    <label>Email:</label>
    <input
      type="email"
      name="email"
      value={user.email}
      onChange={handleChange}
      required
    />
    {errors.email && <p className="error-message">{errors.email}</p>}
  </div>
  <div>
    <label>Role:</label>
    <input
      type="text"
      name="role"
      value={user.role}
      onChange={handleChange}
      required
    />
    {errors.role && <p className="error-message">{errors.role}</p>}
  </div>
  <button type="submit" className="btn btn-success create-button">{isEdit ? 'Update' : 'Create'}</button>
</form>

      </div>
    </div>
  );
};

export default UserForm;
