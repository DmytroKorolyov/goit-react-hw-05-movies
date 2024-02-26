import { fetchMovieById } from "../../api";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

const Movie = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const [error, setError] = useState(null)
    useEffect(() => {
        fetchMovieById(id)
            .then(data => setMovie(data))
            .catch(err => setError(err.message))
    },[id])
    return (
        <h1>Movie #{ id }</h1>
        
    )
}

export default Movie