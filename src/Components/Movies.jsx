import React from 'react'
import { useGlobalHook } from '../Hooks/Context'
import { NavLink } from 'react-router-dom'
import MovieCard from './MovieCard'
import Loader from './Loader/Loader'
import { useGlobalRoutePathObject } from '../Helper/PathHelper';

const Movies = () => {
    const { movies, isLoading } = useGlobalHook();
    if (isLoading) {
        console.log("Loader code block")
        return (
            <Loader />
        )
    }
    
    return (

        <div>
            <section className="movie-page">
                <div className="container grid grid-4-col">
                    {movies.map((currentMovie) => {
                        const { imdbID, Title, Poster } = currentMovie
                        let movieName = "";
                        movieName = Title.substring(0, 17);
                        return (
                                <NavLink to={`${useGlobalRoutePathObject.MovieDetails.replace('/:id', `/${imdbID}`)}`} key={imdbID}>
                                    <MovieCard
                                        Title={movieName.length >= 15 ? `${movieName}...` : movieName}
                                        Poster={Poster}
                                    />
                                </NavLink>
                            )
                    })}
                </div>
            </section>
        </div>
    )
}

export default Movies
