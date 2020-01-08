import React, { useState, useEffect } from 'react';
import {
    API_URL,
    API_KEY,
    API_BASE_URL,
    POSTER_SIZE,
    BACKDROP_SIZE
} from '../config';

//import components
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import LoadMoreBtn from './elements/LoadMoreBtn';
import MovieThumb from './elements/MovieThumb';
import Spinner from './elements/Spinner';
import Grid from './elements/Grid';

//custom hooks
import { useHomeFetch } from './hooks/useHomeFetch';

const Home = () => {

    const [{ state, loading, error }, fetchMovies] = useHomeFetch();
    console.log(state);

    return (
        <>
            <HeroImage />
            <SearchBar />
            <Grid />
            <MovieThumb />
            <Spinner />
            <LoadMoreBtn />
        </>
    )

}

export default Home;