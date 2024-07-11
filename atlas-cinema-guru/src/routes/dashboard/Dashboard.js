import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './dashboard.css';
import Header from '../navigation/Header';
import SideBar from '../navigation/SideBar';
import HomePage from '../../components/pages/HomePage';
import Favorites from '../../components/pages/Favorites';
import WatchLater from '../../components/pages/WatchLater';
import Filter from '../../components/movies/Filter';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
  const [minYear, setMinYear] = useState('');
  const [maxYear, setMaxYear] = useState('');
  const [sort, setSort] = useState('');
  const [genres, setGenres] = useState([]);
  const [title, setTitle] = useState('');

  return (
    <BrowserRouter>
      <div className="dashboard">
        <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
        <SideBar />
        <div className="dashboard-content">
          <Filter
            minYear={minYear}
            setMinYear={setMinYear}
            maxYear={maxYear}
            setMaxYear={setMaxYear}
            sort={sort}
            setSort={setSort}
            genres={genres}
            setGenres={setGenres}
            title={title}
            setTitle={setTitle}
          />
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
