import React, { useRef, } from "react";
import { Link, NavLink, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { fetchMovieById } from "../../api";
import { useHttp } from "../../hooks/useHttp";

const Movie = () => {
  const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [error, setError] = useState(null);

//     console.log(id);
    
//   useEffect(() => {
//     fetchMovieById(id)
//       .then((data) => {
//         console.log("Movie data:", data); // Вивести дані про фільм у консоль
//         setMovie(data);
//       })
//       .catch((err) => setError(err.message));
  //   }, [id]);
  
  const navigate = useNavigate()
  const location = useLocation()
  const goBackRef = useRef(location.state?.from || '/')

    const [movie] = useHttp(fetchMovieById, id)
    
  if (!movie) {
    return <h1>Loading...</h1>;
  }

  return (
      <div>
          <Link to={goBackRef.current}>Go back</Link>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} width="300"
/>
      <h1>{movie.title}</h1>
      <p>User score: {movie.vote_average}</p>
      <h2>Overview</h2>
      <p>{movie.overview}</p>
      <h2>Genres</h2>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
          </ul>
          <div>
              <p>Additional infortation</p>
              {/* <Cast/> */}
              <nav>
                  <ul>
                      <li>
                          <NavLink to='cast'>Cast</NavLink>
                      </li>
                      <li>
                           <NavLink to='reviews'>Reviews</NavLink>
                      </li>
                  </ul>
              </nav>
          </div>
          <Outlet/>
      </div>
      
  );
};

export default Movie;





















// плюс-минус норм(последний перед чатом джипити)


// import { fetchMovieById } from "../../api";
// import React, { useEffect, useState } from "react";
// import { useParams } from 'react-router-dom'






// const Movie = () => {
//     const { id } = useParams()
//     const [movie, setMovie] = useState(null)
//     const [error, setError] = useState(null)
//     useEffect(() => {
//         fetchMovieById(id)
//             .then(data => setMovie(data))
//             .catch(err => setError(err.message))
//     }, [id])

//     if (!movie) {
// 		return <h1>Loading...</h1>
// 	}


//     return (
//         <div> Movie #{id}
//             <img src={movie.backdrop_path} alt="" />
//             <h2>{movie.title}</h2>
//             <p>User score: </p>
//             <h3>Overview</h3>
//             <p>{movie.overview}</p>
//             <h3>Genres</h3>
//             <p>{movie.genres.name}</p>
//             </div>
        
//     )
// }

// export default Movie