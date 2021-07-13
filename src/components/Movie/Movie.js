import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './Movie.css'

function Movie({movie}) {
    return (
        <div>
            <Card style={{ height: '32rem'}}  className="m-2 p-2 shadow itemCard">
                <Card.Img variant="top" src={movie.images.["Poster Art"].url} className="itemCardImg"/>
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Button className="movieButton">Watch Now</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Movie
