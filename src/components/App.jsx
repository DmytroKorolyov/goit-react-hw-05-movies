import React from "react";
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import NotFound from "pages/notFound/NotFound";
import Layout from "./Layout";
import Movie from "./Movie/Movie";


export const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<h1>Movies</h1>} />
        </Route>
        <Route path="movies/:id" element={<Movie />} />

        
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
};
