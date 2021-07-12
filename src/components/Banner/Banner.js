import { Carousel, Row } from 'react-bootstrap';
import React from 'react';
import banner001 from '../../assets/banner001.jpg'
import banner002 from '../../assets/banner002.jpg'
import './Banner.css'

const bannerData = [
    {
        image: banner001,
        title: 'Your Favourite Series',
        subTitle: 'Your Favourite Series Collection is Here'
    },
    {
        image: banner002,
        title: 'Your Favourite Movies',
        subTitle: 'Your Favourite Movies Collection is Here'
    }
]

const Banner = () => {
    return (
        <Carousel>

            {
                bannerData.map((banner, index) => 
                
                    <Carousel.Item key={ index}>
                        <Row>
                        <div className="col-md-5 textBg col-sm-12 col-12 col-lg-5 d-flex justify-content-center align-items-end">
                            <div>
                                <h3 className="bannerTitle text-center">{ banner.title}</h3>
                                <p className="bannerSubTitle text-center">{ banner.subTitle}</p>
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-12 col-12 col-lg-7">
                            <img
                                className="w-100"
                                src={banner.image}
                                alt={ banner.title}
                            />
                        </div>
                    </Row>
                    </Carousel.Item>
                    )
            }
            
        </Carousel>
    );
};

export default Banner;