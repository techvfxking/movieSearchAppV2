import React, { useContext, useEffect, useState } from 'react';

export const API_BASE_URL = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`;
import { useGlobalImageObject } from './../Helper/PathHelper';

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [isError, setIsError] = useState({ showError: false, errorMessage: "" });
    const [search, setSearch] = useState("");

    const getMovies = async (url) => {
        try {
            setIsLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            data.Response === "True" ? (
                setIsError({
                    showError: false,
                    errorMessage: ""
                }),
                setIsLoading(false),
                setMovies(data.Search)
            ) : (
                setIsLoading(false),
                setIsError({
                    showError: true,
                    errorMessage: data.Error
                }),
                    setMovies([
                        {
                            Poster: useGlobalImageObject.BrokenMovieImage,
                            Title: "No Data Found",
                            imdbID: 1234
                    }
                ])
            );

        } catch (error) {
            alert(error);
        }
    }
    useEffect(() => {
        let timeOutID = setTimeout(() => {
            getMovies(`${API_BASE_URL}&s=${search === "" ? "Batman" : search}&page=1`);
        }, 800)
        return () => clearTimeout(timeOutID);
    }, [search]);

    return (
        <AppContext.Provider
            value={{
                isLoading,
                movies,
                isError,
                search,
                setSearch
            }}>
            {children}
        </AppContext.Provider>
    );
}

const useGlobalHook = () => useContext(AppContext);

export { AppProvider, useGlobalHook };