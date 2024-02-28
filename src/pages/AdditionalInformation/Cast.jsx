import React from 'react'
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../api'
import { useHttp } from '../../hooks/useHttp';

const Cast = () => {

    const { id } = useParams()
    // const [actors, setActors] = useState(null)
    // const [error, setError] = useState(null)
    // useEffect(() => {
    //     fetchMovieCredits(id).then(data => setActors(data)).catch(err => setError(err.message))
    // }, [id])

    const [actors] = useHttp(fetchMovieCredits, id)

    if (!actors) {
        return <h2>Loading cast...</h2>
    }


    return (
    <ul>
      {actors.cast.map(actor => (
        <li key={actor.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
            width="150"
            alt={actor.name}
          />
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};


export default Cast;
