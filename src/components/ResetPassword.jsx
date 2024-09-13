import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { resetPassword } from '../api/api';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
  // getting token value from params
  const { token } = useParams();
  // use state intiated for newPassword 
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();
  // function to handle new password set
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(token, { newPassword });
      navigate('/login');
      toast('Password changed successfully')
    } catch (err) {
      toast("Error in setting up new password");
    }
  };
  // UI code for reset password
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="newPassword" className="form-label">New Password</label>
          <input
            type="password"
            className="form-control"
            id="newPassword"
            placeholder="Enter your new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Reset Password</button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default ResetPassword;
