import React from 'react';
import './dashboard.css';
import Header from '../navigation/Header';
import SideBar from '../navigation/SideBar';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
  return (
    <div className="dashboard">
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      <SideBar />
      <div className="dashboard-content">
        <h1>Welcome to the Dashboard </h1> <h2> User 1</h2>
        <h2>This is where you will find you're activities, and favorite movies!</h2>
      </div>
    </div>
  );
};

export default Dashboard;
