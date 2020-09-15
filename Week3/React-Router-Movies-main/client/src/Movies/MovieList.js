import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieList(props) {
    // adding a link to each iteration that is mapped from the movies data. Each Id from a single movie will be assigned to the url path that is created from the link we attached from react router dom.
    return (
        <div className='movie-list'>
            {props.movies.map((movie) => (
                <MovieDetails key={movie.id} movie={movie} />
            ))}
        </div>
    );
}

function MovieDetails(props) {
    const { title, director, metascore } = props.movie;

    return (
        <div className='movie-card'>
            <h2>{title}</h2>
            <div className='movie-director'>
                Director: <em>{director}</em>
            </div>
            <div className='movie-metascore'>
                Metascore: <strong>{metascore}</strong>
            </div>
        </div>
    );
}
