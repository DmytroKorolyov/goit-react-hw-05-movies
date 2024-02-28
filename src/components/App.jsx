import React from "react";
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom'

import NotFound from "pages/notFound/NotFound";
import Layout from "./Layout";
import Movie from "./Movie/Movie";

// import Home from '../pages/Home/Home'
// import Cast from "../pages/AdditionalInformation/Cast";
// import Reviews from '../pages/AdditionalInformation/Reviews'
// import Movies from "../pages/movies/Movies";

const Home = lazy(() => import('../pages/Home/Home'))
const Cast = lazy(() => import('../pages/AdditionalInformation/Cast'))
const Movies = lazy(() => import('../pages/movies/Movies'))
const Reviews = lazy(() => import('../pages/AdditionalInformation/Reviews'))


export const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies/>} />
          <Route path="movies/:id" element={<Movie />}>
            <Route index element={<h3>Please click on the links at top</h3>} />
            <Route path="cast" element={<Cast />}/>
            <Route path="reviews" element={<Reviews />}/>
          </Route>
      </Route>
        

        
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
};




