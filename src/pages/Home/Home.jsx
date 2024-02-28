import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchMovies } from '../../api';
import { useHttp } from '../../hooks/useHttp';

const Home = () => {

  const [movies] = useHttp(fetchMovies);
  const location = useLocation()
    
  return (
    <div>
      <h2>Trending today</h2>
      
        <ul>
          {movies?.map(movie => (
        <li key={movie.id}>
              <Link
                state={{ from: location }}
                to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      
    </div>
  );
};

export default Home;

