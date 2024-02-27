import React from "react";
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import NotFound from "pages/notFound/NotFound";
import Layout from "./Layout";
import Movie from "./Movie/Movie";
import Cast from "../pages/AdditionalInformation/Cast";
import Reviews from '../pages/AdditionalInformation/Reviews'


export const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<h1>Movies</h1>} />
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
