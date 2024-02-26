import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../api";
import { Link, } from 'react-router-dom'

const Home = () => {
    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchMovies()
            .then(data => setMovies(data))
            .catch(err => setError(err.message));
    }, []);

    return (
        <div>
            <h2>Trending today</h2>
            {error ? (
                <p>{error}</p>
            ) : (
                <ul>
                    {movies?.results.map(movie => (
                        <li key={movie.id}>
                            <Link to={movie.id.toString()}>{movie.title}</Link></li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Home;
















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