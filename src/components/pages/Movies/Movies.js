import React, { useContext } from 'react'
import { Row } from 'react-bootstrap';
import { MovieContext } from '../../../App';
import Movie from '../../Movie/Movie';
import './Movies.css'

function Movies() {
    const [movies] = useContext(MovieContext);
    movies.sort(
        (a, b) =>  a["title"].localeCompare(b["title"])
      );
    return (
        <div className="body">
            <div className="container py-5">
                <h2 className="text-center p-5 shadow my-5 border">All Movies</h2>
                <Row className="g-4" xs={1} md={3} lg={4}>
                    {
                    movies.slice(0,20).map((movie, index) => <Movie movie={movie} key={index}></Movie>)
                    }
                </Row>
            </div>
        </div>
    )
}

export default Movies
