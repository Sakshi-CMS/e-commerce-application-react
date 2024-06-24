import React from 'react';
import './AdminProfile.css'

const AdminProfile = () => {
  // Static user details
  const userDetails = {
    id: 123,
    email: 'example@example.com',
    firstName: 'John',
    lastName: 'Doe',
    role: 'Admin'
  };

  return (
    <div>
      <h3>ADMIN PROFILE</h3>
      <div className="container shadow cont-design">
        <div>
          <label>ID:</label>
          <span>{userDetails.id}</span>
        </div>
        <div>
          <label>Email:</label>
          <span>{userDetails.email}</span>
        </div>
        <div>
          <label>First Name:</label>
          <span>{userDetails.firstName}</span>
        </div>
        <div>
          <label>Last Name:</label>
          <span>{userDetails.lastName}</span>
        </div>
        <div>
          <label>Role:</label>
          <span>{userDetails.role}</span>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
