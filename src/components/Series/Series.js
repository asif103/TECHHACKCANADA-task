import React from 'react'
import { Button, Card } from 'react-bootstrap'

function Series({series}) {
    return (
        <div>   
            <Card style={{ height: '32rem'}}  className="m-2 p-2 shadow itemCard">
                <Card.Img variant="top" src={series.images.["Poster Art"].url} className="itemCardImg"/>
                <Card.Body>
                    <Card.Title>{series.title}</Card.Title>
                    <Button variant="primary">Watch Now</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Series
