import React from 'react';
import MovieCard from '../movies/MovieCard';
import './pages.css';

const placeholderMovies = [
  {
    id: "1",
    title: "The Murder House",
    synopsis: "A thrilling horror movie about a haunted house.",
    genres: ["Horror", "Thriller"],
    date: "March 21st, 2022",
  },
  {
    id: "2",
    title: "Grotesque",
    synopsis: "A disturbing yet captivating horror story.",
    genres: ["Horror"],
    date: "March 22nd, 2022",
  },
  {
    id: "3",
    title: "Revelation: The Unveiling",
    synopsis: "An epic tale of uncovering hidden truths.",
    genres: ["Drama", "Mystery"],
    date: "March 23rd, 2022",
  },
  {
    id: "4",
    title: "8 Days with Hopper",
    synopsis: "A heartwarming journey of self-discovery.",
    genres: ["Drama"],
    date: "March 24th, 2022",
  },
  {
    id: "5",
    title: "The Key",
    synopsis: "An adventurous quest to unlock ancient secrets.",
    genres: ["Adventure", "Fantasy"],
    date: "March 25th, 2022",
  },
  {
    id: "6",
    title: "Godhead: In a Fiction, In Dream of Passion",
    synopsis: "A fictional tale of gods and mortals intertwined.",
    genres: ["Fantasy", "Drama"],
    date: "March 26th, 2022",
  },
  {
    id: "7",
    title: "Revelation: The Unveiling",
    synopsis: "An epic tale of uncovering hidden truths.",
    genres: ["Drama", "Mystery"],
    date: "March 27th, 2022",
  },
  {
    id: "8",
    title: "Godhead: In a Fiction, In Dream of Passion",
    synopsis: "A fictional tale of gods and mortals intertwined.",
    genres: ["Fantasy", "Drama"],
    date: "March 28th, 2022",
  },

];

const HomePage = () => {
  return (
    <div className="home-page">
      <ul className="movie-list">
        {placeholderMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
