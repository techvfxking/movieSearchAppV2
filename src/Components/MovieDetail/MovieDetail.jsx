import React, {useState, useEffect} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import './MovieDetail.css'
import { API_BASE_URL } from '../../Hooks/Context'
import Loader from './../Loader/Loader';
import { useGlobalRoutePathObject } from '../../Helper/PathHelper';

const MovieDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState("");

  const getMovies = async (url) => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      data.Response === "True" && (
        setIsLoading(false),
        setMovie(data)
      )

    } catch (error) {
      alert(error);
    }
  }
  useEffect(() => {
    let timeOutID = setTimeout(() => {
      getMovies(`${API_BASE_URL}&i=${id}`);
    }, 800)
    return () => clearTimeout(timeOutID);
  }, []);
  if (isLoading) {
    return (
      <Loader/>
    )
  }
  return (
    ReturnMovieDetailJSX(movie)
  )
}

const ReturnMovieDetailJSX = (movie) => {
  return (
    <section className='movie-section'>
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{ movie.Title}</p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.Language}</p>
          <p className="card-text">{movie.Metascore}</p>
          <p className="card-text">{movie.Plot}</p>
          <NavLink to={useGlobalRoutePathObject.Home} className="back-btn">Go Back</NavLink>
        </div>
      </div>
    </section>
  );
}

export default MovieDetail