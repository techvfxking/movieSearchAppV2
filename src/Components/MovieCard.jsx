import React from 'react'
import { useGlobalImageObject } from './../Helper/PathHelper';

const MovieCard = (props) => {
    const imgJSX = ReturnImgJSX(props.Poster, props.imdbID);
    return (
        <div className="card">
            <div className="card-info">
                <h2>{props.Title}</h2>
                {imgJSX}
            </div>
        </div>
    )
}

const ReturnImgJSX = (poster, imdbID) => {
    poster = poster === 'N/A' ? useGlobalImageObject.BrokenMovieImage : poster;
    if (poster === useGlobalImageObject.BrokenMovieImage) {
        return (
            <img src={poster}
                alt={imdbID}
                style={{ width: "20rem" }}
            />
        )
    }
    else {
        return (
            <img src={poster}
                alt={imdbID}
            />
        )
    }
}

export default MovieCard
