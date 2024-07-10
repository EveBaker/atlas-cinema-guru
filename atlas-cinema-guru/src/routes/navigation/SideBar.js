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
  },
  {
    id: "4",
    username: "user4",
    title: "title4",
    date: "date4"
  },
  {
    id: "5",
    username: "user5",
    title: "title5",
    date: "date5"
  },
  {
    id: "6",
    username: "user6",
    title: "title6",
    date: "date6"
  },
  {
    id: "7",
    username: "user7",
    title: "title7",
    date: "date7"
  },
  {
    id: "8",
    username: "user8",
    title: "title8",
    date: "date8"
  },
  {
    id: "9",
    username: "user9",
    title: "title9",
    date: "date9"
  },
  {
    id: "10",
    username: "user10",
    title: "title10",
    date: "date10"
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
