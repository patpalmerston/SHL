import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default function App() {
    const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const getMovies = () => {
            axios
                .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
                .then((response) => {
                    // Study this response with a breakpoint or log statements
                    setMovieList(response.data);
                    // and set the response data as the 'movieList' slice of state
                })
                .catch((error) => {
                    console.error('Server Error', error);
                });
        };
        getMovies();
    }, []);

    console.log('app.js movie list', movieList);

    const addToSavedList = (id) => {
        // This is stretch. Prevent the same movie from being "saved" more than once
        setSaved([...saved, id]);
    };

    return (
        <div>
            <div className='nav'>
                <Link to='/'>Home</Link>
            </div>

            <SavedList list={saved} />

            <Route exact path='/'>
                <MovieList movies={movieList} />
            </Route>
            <Route path='/movies/:id'>
                <Movie addToSavedList={addToSavedList} />
            </Route>

            <div>Replace this Div with your Routes</div>
        </div>
    );
}
