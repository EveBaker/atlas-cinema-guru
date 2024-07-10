import React, { useState } from 'react';
import './auth.css';
import Login from './Login';
import Register from './Register';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
  const [switchBoolean, setSwitchBoolean] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const url = switchBoolean ? 'http://localhost:8000/api/auth/login' : 'http://localhost:8000/api/auth/register';
    const data = { username, password };

    axios.post(url, data)
      .then(response => {
        if (response.status === 200 || response.status === 201) {
          const { accessToken } = response.data;
          localStorage.setItem('accessToken', accessToken);

          const decodedToken = jwtDecode(accessToken);
          const { username: decodedUsername } = decodedToken;

          setIsLoggedIn(true);
          setUserUsername(decodedUsername);
        } else {
          console.error(`${switchBoolean ? 'Login' : 'Registration'} failed:`, response.data);
          alert(`${switchBoolean ? 'Login' : 'Registration'} failed. Please try again.`);
        }
      })
      .catch(error => {
        console.error(`${switchBoolean ? 'Login' : 'Registration'} error:`, error.response || error.message || error);
        alert(`${switchBoolean ? 'Login' : 'Registration'} failed. Please try again.`);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="auth-body">
      <div className="auth-container">
        <div className="auth-header">
          <button
            className={switchBoolean ? 'active' : ''}
            onClick={() => setSwitchBoolean(true)}
          >
            Sign In
          </button>
          <button
            className={!switchBoolean ? 'active' : ''}
            onClick={() => setSwitchBoolean(false)}
          >
            Sign Up
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          {switchBoolean ? (
            <Login
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
              showPassword={showPassword}
              togglePasswordVisibility={togglePasswordVisibility}
            />
          ) : (
            <Register
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
              showPassword={showPassword}
              togglePasswordVisibility={togglePasswordVisibility}
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default Authentication;
