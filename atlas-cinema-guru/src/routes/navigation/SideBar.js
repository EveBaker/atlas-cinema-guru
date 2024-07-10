import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStar, faClock } from '@fortawesome/free-solid-svg-icons';
import Activity from '../../components/Activity';

const placeholderActivities = [
  {
    id: "1",
    username: "user1",
    title: "title1",
    date: "date1"
  },
  {
    id: "2",
    username: "user2",
    title: "title2",
    date: "date2"
  },
  {
    id: "3",
    username: "user3",
    title: "title3",
    date: "date3"
  }
];

const SideBar = () => {
  const [selected, setSelected] = useState('home');
  const navigate = useNavigate();

  const setPage = (pageName) => {
    setSelected(pageName);
    navigate(`/${pageName}`);
  };

  return (
    <div className="sidebar">
      <ul className="nav-list">
        <li className={`nav-item ${selected === 'home' ? 'active' : ''}`} onClick={() => setPage('home')}>
          <FontAwesomeIcon icon={faHome} className="icon" />
          <span className="label">Home</span>
        </li>
        <li className={`nav-item ${selected === 'favorites' ? 'active' : ''}`} onClick={() => setPage('favorites')}>
          <FontAwesomeIcon icon={faStar} className="icon" />
          <span className="label">Favorites</span>
        </li>
        <li className={`nav-item ${selected === 'watchlater' ? 'active' : ''}`} onClick={() => setPage('watchlater')}>
          <FontAwesomeIcon icon={faClock} className="icon" />
          <span className="label">Watch Later</span>
        </li>
      </ul>
      <div className="activities-list">
        <h2>Latest Activities</h2>
        <ul>
          {placeholderActivities.slice(0, 10).map(activity => (
            <Activity key={activity.id} activity={activity} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
