// import axios from 'axios';

// const baseURL = 'https://api.themoviedb.org/3/configuration/';

// export const fetchImagesWithQuery = async (searchQuery, page) => {
//   try {
//     const response = await axios.get(baseURL, {
//       params: {
//         key: '42004606-5d03e591d800e1e125ea1f7b1',
//         q: searchQuery,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: 'true',
//         page: page,
//         per_page: 12,
//       },
//     });
//     return response.data.hits;
//   } catch (error) {
//     console.error('Error fetching images:', error);
//     return [];
//   }
// };




const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjA3MzJhZDQ1ODlkMTQ0NTFjODk2NTZiM2JkZGIxOCIsInN1YiI6IjY1ZGNiYmJhYjdiNjlkMDE2NGM4OThmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zxOUDvFiYEd37Tz81QIa3rjuQ-x9PUlIJ2PDB0GNA9U'
  }
};

const baseURL = 'https://api.themoviedb.org/3';

export const fetchMovies = async () => {
  const url = `${baseURL}/trending/movie/day?language=en-US`;
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const fetchMovieById = async (movieId) => {
  const url = `${baseURL}/movie/${movieId}?language=en-US`;
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};












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
