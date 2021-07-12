import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Homepage.css'
import moviePoster from '../../../assets/movies.jpg'
import seriesPoster from '../../../assets/series.jpg'
import { Link } from 'react-router-dom'
import Banner from '../../Banner/Banner'

function Homepage() {
    return (
        <div className="body">
            <Banner></Banner>
            <Container>
            <h2 className="text-center bg-light p-5 shadow my-5">Categories</h2>
                <Row>
                    <Col md={6} lg={6} sm={12}>
                        <Link to="/movies">
                            <div class="custom_card">
                                <div class="card_image"> <img src={moviePoster} /> </div>
                                <div class="card_title title-white">
                                    <p>All Movies</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col md={6} lg={6} sm={12}>
                        <Link to="/series">
                            <div class="custom_card">
                                <div class="card_image"> <img src={seriesPoster} /> </div>
                                <div class="card_title title-white">
                                    <p>All Series</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}

export default Homepage
