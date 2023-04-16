import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Home';
import Error from '../Components/Error';
import MovieDetail from '../Components/MovieDetail/MovieDetail';
import { useGlobalRoutePathObject } from '../Helper/PathHelper';
import NavbarComponent from '../Components/NavbarComponent';


const App = () => {

  return (
    <section id="app-rc">
      <NavbarComponent/>
        <Routes>
          <Route path={useGlobalRoutePathObject.Home} element={<Home />} />
          <Route path={useGlobalRoutePathObject.MovieDetails} element={<MovieDetail />} />
          <Route path={useGlobalRoutePathObject.OtherPaths} element={<Error />} />
        </Routes>
    </section>
  )
}

export default App