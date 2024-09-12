import React, { useEffect, useState } from 'react';
import { getDashboardData } from '../api/api';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Dashboard = () => {
  // daily count usestate initiated
  const [dailyCounts, setDailyCounts] = useState([]);
  // monthly count usestate initiated
  const [monthlyCounts, setMonthlyCounts] = useState([]);
  //created instance for  navigaiton
  const navigate = useNavigate();
  // initiated useEffect to render when data is fetched
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await getDashboardData();
        setDailyCounts(response.data.dailyCounts);
        setMonthlyCounts(response.data.monthlyCounts);
      } catch (error) {
        console.error('Error fetching dashboard data', error);
      }
    };

    fetchDashboardData();
  }, []);
// dashboard UI code
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Dashboard</h2>
      
      <div className="mb-4">
        <h3 className="mb-3">Daily Counts</h3>
        {dailyCounts.length > 0 ? (
          <ul className="list-group">
            {dailyCounts.map((count) => (
              <li key={count._id} className="list-group-item">
                {count._id}: <span className="badge bg-primary">{count.count}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No daily data available</p>
        )}
      </div>
      
      <div className="mb-4">
        <h3 className="mb-3">Monthly Counts</h3>
        {monthlyCounts.length > 0 ? (
          <ul className="list-group">
            {monthlyCounts.map((count) => (
              <li key={count._id} className="list-group-item">
                {count._id}: <span className="badge bg-secondary">{count.count}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No monthly data available</p>
        )}
      </div>

      <div className="d-flex justify-content-start">
        <button 
          className="btn btn-primary me-3"
          onClick={() => navigate('/urls')}
        >
          URL List
        </button>
        <button 
          className="btn btn-success"
          onClick={() => navigate('/shorten-url')}
        >
          Shorten URL
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
