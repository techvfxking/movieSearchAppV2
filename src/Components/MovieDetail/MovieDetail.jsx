import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import './MovieDetail.css'
import { API_BASE_URL } from '../../Hooks/Context'
import Loader from './../Loader/Loader';
import { useGlobalImageObject, useGlobalRoutePathObject } from '../../Helper/PathHelper';

const MovieDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState("");
  const [isError, setIsError] = useState(false);

  const getMovies = async (url) => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      data.Response === "True" ? (
        setIsLoading(false),
        setMovie(data),
        setIsError(false)
      ) : (
          setIsError(true),
          setIsLoading(false),
          setMovie(data)
      );
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
      <Loader />
    )
  }
    return (ReturnMovieDetailJSX(movie,isError))
}

const ReturnMovieDetailJSX = (data, isError) => {
  if (isError) {
    return (
      
    <section className="body">
      <div className="container-movie">
        <div id="result">
          {data.Error}
          <NavLink to={useGlobalRoutePathObject.Home} className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
    )
  }
  else {
    return (
      <section className="body">
        <div className="container-movie">
          <div id="result">
            <div className="info">
              <img src={data.Poster} className="poster" />
              <div>
                <h2>{data.Title}</h2>
                <div className="rating">
                  <img src={useGlobalImageObject.StarIcon} />Ratings:
                  <h4>{data.imdbRating}</h4>
                  <img src={useGlobalImageObject.ImdbIcon} />Votes:
                  <h4>{data.imdbVotes}</h4>
                </div>
                <div className="details">
                  <span>{data.Rated}</span>
                  <span>{data.Year}</span>
                  <span>{data.Runtime}</span>
                </div>
                <div className="genre">
                  <div>{data.Genre.split(',').join(' ')}</div>
                </div>
              </div>
            </div>
            <h3>Plot:</h3>
            <p className='movieDetails-p'>{data.Plot}</p>
            <h3>Cast:</h3>
            <p className='movieDetails-p'>{data.Actors}</p>
            <h3>Awards:</h3>
            <p className='movieDetails-p'>{data.Awards}</p>
            <h3>BoxOffice: <p className='movieDetails-p'>{data.BoxOffice == null ? "Not Found" : data.BoxOffice}</p></h3>
            <h3>Writer:</h3>
            <p className='movieDetails-p'>{data.Writer}</p>
            <NavLink to={useGlobalRoutePathObject.Home} className="back-btn">
              Go Back
            </NavLink>
          </div>
        </div>
      </section>

    );
  }
  
}



export default MovieDetail