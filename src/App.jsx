import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ResetPassword from './components/ResetPassword';
import ForgotPassword from './components/ForgotPassword'; // Import ForgotPassword
import ShortenUrl from './components/ShortenUrl';
import UrlList from './components/UrlList';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage'
import ShortUrlRedirect from './components/ShortUrlRedirect';

function App() {
  return (
    <Router>
      <div>
        {/* Routes mapped for each pages */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/shorten-url" element={<ShortenUrl />} />
          <Route path="/urls" element={<UrlList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/:shortUrl" element={<ShortUrlRedirect />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
