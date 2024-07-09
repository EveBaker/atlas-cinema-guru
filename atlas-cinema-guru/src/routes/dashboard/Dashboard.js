import React from "react";
import './dashboard.css';
import Header from "../navigation/Header";

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
    return ( 
    <div className="dashboard">
        <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
        <div className="dashboard-content">
            <h1>welcome to the dashboard</h1>
        </div>
    </div>
    );
};

export default Dashboard