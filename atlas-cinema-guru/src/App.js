import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/general/SearchBar';
import SelectInput from './components/general/SelectInput';
import Button from './components/general/Button';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Authentication from './routes/auth/Authentication';

const Dashboard = () => <div>Dashboard: Logged in</div>;

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      axios.post('/api/auth/', {}, {
        headers: { Authorization: `Bearer ${accessToken}` }
      })
      .then(response => {
        if (response.status === 200) {
          setIsLoggedIn(true);
          setUserUsername(response.data.username);
        }
      })
      .catch(error => {
        console.error('Authentication error:', error);
      });
    }
  }, []);

  const handleSearch = () => {
    console.log('Searching for:', searchTitle);
    console.log('Selected option:', selectedOption);
  };

  const options = [
    { value: 'default', label: 'Default' },
    { value: 'latest', label: 'Latest' },
    { value: 'oldest', label: 'Oldest' },
    { value: 'highestRated', label: 'Highest Rated' },
    { value: 'lowestRated', label: 'Lowest Rated' },
  ];

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <div className="search-bar-container">
            <SearchBar title={searchTitle} setTitle={setSearchTitle} />
            <SelectInput
              label="Sort:"
              options={options}
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <Button
              label="Search"
              className="search-button"
              onClick={handleSearch}
              icon={faSearch}
            />
          </div>
          <Dashboard />
        </>
      ) : (
        <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} />
      )}
    </div>
  );
};

export default App;
