// src/components/Activity.js

import React from 'react';
import './components.css';

const Activity = ({ activity }) => {
    return (
        <li className="activity-item">
            <p>
                <span className="username">{activity.username}</span> added <span className="movie-title">{activity.title}</span> to watch later - <span className="date">{activity.date}</span>
            </p>
        </li>
    );
};

export default Activity;
