import headerLogo from '../assets/icon/movie-logo-type.png';
import brokenMovieImage from '../assets/images/computer.png';
import starIcon from '../assets/icon/star-icon.svg';
import imdbIcon from '../assets/icon/imdb-3.png'

export const useGlobalImageObject = {
    HeaderLogo: headerLogo,
    BrokenMovieImage: brokenMovieImage,
    StarIcon: starIcon,
    ImdbIcon: imdbIcon
}

export const useGlobalRoutePathObject = {
    Home: '/',
    MovieDetails: 'movie/:id',
    OtherPaths: '*'
}