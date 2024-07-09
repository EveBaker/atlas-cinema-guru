import React from 'react';
import './navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header = ({ userUsername, setIsLoggedIn }) => {
  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  };

  return (
    <nav className="header">
      <div className="logo">Cinema Guru</div>
      <div className="user-info">
        <img src="https://picsum.photos/100/100" alt="User Avatar" className="user-avatar" />
        <p>Welcome, {userUsername}!</p>
        <span className="logout" onClick={logout}>
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </span>
      </div>
    </nav>
  );
};

export default Header;
