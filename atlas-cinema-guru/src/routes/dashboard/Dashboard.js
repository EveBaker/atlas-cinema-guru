import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './dashboard.css';
import Header from '../navigation/Header';
import SideBar from '../navigation/SideBar';
import HomePage from '../../components/pages/HomePage';
import Favorites from '../../components/pages/Favorites';
import WatchLater from '../../components/pages/WatchLater';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
  return (
    <BrowserRouter>
      <div className="dashboard">
        <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
        <SideBar />
        <div className="dashboard-content">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/watchlater" element={<WatchLater />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Dashboard;
