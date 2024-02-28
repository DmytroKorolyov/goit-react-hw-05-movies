import { useHttp } from "../../hooks/useHttp";
import { fetchMoviesByQuery } from '../../api'
import Form from "./Form";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import React, { useMemo } from 'react';


const Movies = () => {
    
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('query') || ''
    const location = useLocation();

    const queryParams = useMemo(() => {
    return { query };
  }, [query]);
  const [movies] = useHttp(fetchMoviesByQuery, queryParams);
    
    
    return (
        
        <div>
            <Form setSearchParams={ setSearchParams } />
            <ul>
                {movies?.map(movie => (<li key={movie.id}>
                    <Link state={{ from: location }}
                        to={movie.id.toString()}>
                        {movie.title}
                    </Link></li>))}
            </ul>
        </div>
    )

}

export default Movies