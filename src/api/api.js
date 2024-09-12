import axios from 'axios';
// created base url
const api = axios.create({
  baseURL: 'https://urlshorten-backend-p7yy.onrender.com',
});
// initiated all api calls for the applications
export const registerUser = (data) => api.post('/auth/register', data);
export const loginUser = (data) => api.post('/auth/login', data);
export const forgotPassword = (data) => api.post('/auth/forgot-password', data);
export const resetPassword = (token, data) => api.post(`/auth/reset-password/${token}`, data);
export const shortenUrl = (data) => api.post('/url/shorten', data);
export const getDashboardData = () => api.get('/url/dashboard');
export const getAllUrls = () => api.get('/url/all');
export const redirectOriginalUrl = (shortUrl) => api.get(`/url/url/${shortUrl}`);
