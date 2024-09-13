import React, { useState } from 'react';
import { forgotPassword } from '../api/api';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
// function to handle forgot passowrd reset link send
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword({ email });
      toast('Reset password link sent to your email.');
      setTimeout(() => navigate('/login'), 5000); // Redirect after 5 seconds
    } catch (err) {
      toast('User email not available or error in sending email');
    }
  };
// UI code for forgot page
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Send Reset Link</button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default ForgotPassword;
