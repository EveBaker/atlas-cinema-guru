import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faClock } from '@fortawesome/free-solid-svg-icons';
import './movies.css';
import axios from 'axios';

const MovieCard = ({ movie }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isWatchLater, setIsWatchLater] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const favoriteResponse = await axios.get('/api/titles/favorite/');
          const watchLaterResponse = await axios.get('/api/titles/watchlater/');
  
          setIsFavorite(favoriteResponse.data.includes(movie.id));
          setIsWatchLater(watchLaterResponse.data.includes(movie.id));
        } catch (error) {
          console.error('Error fetching movie lists:', error);
        }
      };
  
      fetchData();
    }, [movie.id]);
  
    const handleClick = async (type) => {
      const url = `/api/titles/${type}/${movie.id}`;
      try {
        if (type === 'favorite') {
          if (isFavorite) {
            await axios.delete(url);
            setIsFavorite(false);
          } else {
            await axios.post(url);
            setIsFavorite(true);
          }
        } else if (type === 'watchlater') {
          if (isWatchLater) {
            await axios.delete(url);
            setIsWatchLater(false);
          } else {
            await axios.post(url);
            setIsWatchLater(true);
          }
        }
      } catch (error) {
        console.error(`Error updating ${type} list:`, error);
      }
    };
  
    return (
      <li className="movie-card">
        <img src={`https://via.placeholder.com/150`} alt={movie.title} />
        <div className="movie-details">
          <h3>{movie.title}</h3>
          <p>{movie.synopsis}</p>
          <div className="movie-genres">
            {movie.genres.map((genre, index) => (
              <span key={index} className="genre-tag">{genre}</span>
            ))}
          </div>
          <div className="movie-actions">
            <FontAwesomeIcon
              icon={faStar}
              className={`icon ${isFavorite ? 'favorite' : ''}`}
              onClick={() => handleClick('favorite')}
            />
            <FontAwesomeIcon
              icon={faClock}
              className={`icon ${isWatchLater ? 'watch-later' : ''}`}
              onClick={() => handleClick('watchlater')}
            />
          </div>
        </div>
      </li>
    );
  };
  
  export default MovieCard;
  