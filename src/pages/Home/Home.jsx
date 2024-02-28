import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchMovies } from '../../api';
import { useHttp } from '../../hooks/useHttp';

const Home = () => {
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchMovies()
//       .then(data => setMovies(data.results))
//       .catch(err => setError(err.message));
//   }, []);

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


// рабочий
// {movies.map(movie => (
//             <li key={movie.id}>
//               <Link to={`/movies/${movie.id}`}>{movie.title}</Link>














// норм працює


// import React, { useEffect, useState } from "react";
// import { fetchMovies } from "../../api";
// import { Link, } from 'react-router-dom'


// const Home = () => {
//     const [movies, setMovies] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetchMovies()
//             .then(data => setMovies(data))
//             .catch(err => setError(err.message));
//     }, []);

//     return (
//         <div>
//             <h2>Trending today</h2>
//             {error ? (
//                 <p>{error}</p>
//             ) : (
//                 <ul>
//                     {movies?.results.map(movie => (
//                         <li key={movie.id}>
//                             <Link to={movie.id.toString()}>{movie.title}</Link></li>
//                     ))}
//                 </ul>
//             )}

//         </div>
//     );
// };

// export default Home;
















// import fetchMovies from "../../api";
// import React, { useEffect, useState } from "react";


// const Home = () => {

//     const [movies, setMovies] = useState(null)
//     const [error, setError] = useState(null)



//     useEffect(() => {
//         fetchMovies().then((data) => setMovies(data)).catch(err => setError(err.message))
//     }, [])

//     return (
//         <div>
//             <h2>Trending today</h2>
//             <ul>
//                 {movies?.map(movie => <li key={movie.id}>{movie.title}</li>)}
                
//             </ul>
//         </div>
//     )
// }

// export default Home