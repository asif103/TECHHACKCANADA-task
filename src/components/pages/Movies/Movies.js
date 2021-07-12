import React, { useContext } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { MovieContext } from '../../../App';
import Movie from '../../Movie/Movie';

function Movies() {
    const [movies, setMovies] = useContext(MovieContext);
    movies.sort(
        (a, b) =>  a["title"].localeCompare(b["title"])
      );
    return (
        <div className="container">
            <h2 className="text-center bg-light p-5 shadow my-5">All Movies</h2>
            <Row className="g-4" xs={1} md={3} lg={4}>
                {
                movies.slice(0,20).map((movie, index) => <Movie movie={movie} key={index}></Movie>)
                }
            </Row>
        </div>
    )
}

export default Movies
