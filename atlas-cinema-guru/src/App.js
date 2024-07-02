import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const Dashboard = () => <div>Dashboard: Logged in</div>;
const Authentication = () => <div>Login or Register</div>;

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      axios.post('/api/auth/', {}, {
        headers: { Authorization: `Bearer ${accessToken}` }
      })
      .then(response => {
        if (response.status === 200) {
          setIsLoggedIn(true);
          setUserUsername(response.data.username);
        }
      })
      .catch(error => {
        console.error('Authentication error:', error);
      });
    }
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? <Dashboard /> : <Authentication />}
    </div>
  );
};

export default App;