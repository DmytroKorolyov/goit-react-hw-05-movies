import React from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieReviews } from '../../api';
import { useHttp } from '../../hooks/useHttp';


const Reviews = () => {
  const { id } = useParams();
  const [movie] = useHttp(fetchMovieReviews, id);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul>
      {movie.map(item => (
        <li key={item.id}>
          <p>Author: {item.author}</p>
          <p>{item.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
