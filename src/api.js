


import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  params: {
    language: 'en-US',
  },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjA3MzJhZDQ1ODlkMTQ0NTFjODk2NTZiM2JkZGIxOCIsInN1YiI6IjY1ZGNiYmJhYjdiNjlkMDE2NGM4OThmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zxOUDvFiYEd37Tz81QIa3rjuQ-x9PUlIJ2PDB0GNA9U',
  },
};

export const fetchMovies = async () => {
  const { data } = await axios.get('trending/movie/day', options);
  return data.results;
};

export const fetchMovieById = async id => {
  const { data } = await axios.get(`movie/${id}`, options);
  return data;
};

export const fetchMovieCredits = async id => {
  const { data } = await axios.get(`movie/${id}/credits`, options);
  return data;
};



// export const fetchMovieReviews = async id => {
//   const { data } = await axios.get(`movie/${id}/reviews`, options);
//   return data.results;
// };

// export const fetchMoviesByQuery = async ({ query }) => {
//   const { data } = await axios.get(`search/movie`, {
//     ...options,
//     params: { ...options.params, query },
//   });
//   return data.results;
// };






















// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjA3MzJhZDQ1ODlkMTQ0NTFjODk2NTZiM2JkZGIxOCIsInN1YiI6IjY1ZGNiYmJhYjdiNjlkMDE2NGM4OThmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zxOUDvFiYEd37Tz81QIa3rjuQ-x9PUlIJ2PDB0GNA9U'
//   }
// };

// const baseURL = 'https://api.themoviedb.org/3';

// export const fetchMovies = async () => {
//   const url = `${baseURL}/trending/movie/day?language=en-US`;
//   try {
//     const response = await fetch(url, options);
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   } catch (error) {
//     console.error('Error fetching movies:', error);
//     throw error;
//   }
// };

// export const fetchMovieById = async (movieId) => {
//   console.log(movieId);
//   const url = `${baseURL}/movie/${movieId}?language=en-US`;
  
//   try {
//     const response = await fetch(url, options);
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   } catch (error) {
//     console.error('Error fetching movie details:', error);
//     throw error;
//   }
// };


// export const fetchMovieCredits = async (movieId) => {
//   console.log(movieId);
//   const url = `${baseURL}/movie/${movieId}/credits?language=en-US`;
  
//   try {
//     const response = await fetch(url, options);
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   } catch (error) {
//     console.error('Error fetching movie redits:', error);
//     throw error;
//   }
// };











// хорошо работает (последняя функия(новее, чем та что названа "норм"))

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjA3MzJhZDQ1ODlkMTQ0NTFjODk2NTZiM2JkZGIxOCIsInN1YiI6IjY1ZGNiYmJhYjdiNjlkMDE2NGM4OThmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zxOUDvFiYEd37Tz81QIa3rjuQ-x9PUlIJ2PDB0GNA9U'
//   }
// };

// const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'

// const fetchMovies = async () => {
//   try {
//     const response = await fetch(url, options);
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   } catch (error) {
//     console.error('Error fetching movies:', error);
//     throw error;
//   }
// };

// export default fetchMovies;
















// норм

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjA3MzJhZDQ1ODlkMTQ0NTFjODk2NTZiM2JkZGIxOCIsInN1YiI6IjY1ZGNiYmJhYjdiNjlkMDE2NGM4OThmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zxOUDvFiYEd37Tz81QIa3rjuQ-x9PUlIJ2PDB0GNA9U'
//   }
// };

// const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'

// const fetchMovies = async (url, options) => {
//   try {
//     const response = await fetch(url, options);
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response;
//   } catch (error) {
//     console.error('Error fetching movies:', error);
//     return null;
//   }
// };

// export default fetchMovies;
