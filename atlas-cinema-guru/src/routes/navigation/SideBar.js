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
    title: "The Murder House",
    date: "March 21st, 2022"
  },
  {
    id: "2",
    username: "user1",
    title: "Grotesque",
    date: "March 22nd, 2022"
  },
  {
    id: "3",
    username: "user1",
    title: "Revelation: The Unveiling",
    date: "March 23rd, 2022"
  },
  {
    id: "4",
    username: "user1",
    title: "8 Days with Hopper",
    date: "March 24th, 2022"
  },
  {
    id: "5",
    username: "user1",
    title: "The Key",
    date: "March 25th, 2022"
  },
  {
    id: "6",
    username: "user1",
    title: "Godhead: in a fiction, in dream of passion",
    date: "March 26th, 2022"
  },
  {
    id: "7",
    username: "user1",
    title: "Revelation: The Unveiling",
    date: "March 27th, 2022"
  },
  {
    id: "8",
    username: "user1",
    title: "Godhead: in a fiction, in dream of passion",
    date: "March 28th, 2022"
  },
  {
    id: "9",
    username: "user1",
    title: "The Key",
    date: "March 29th, 2022"
  },
  {
    id: "10",
    username: "user1",
    title: "8 Days with Hopper",
    date: "March 30th, 2022"
  },
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
