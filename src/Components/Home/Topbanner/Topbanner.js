import React from 'react';
import './Topbaner.css';
import { Carousel } from 'react-bootstrap';

import slider from '../../../images/slider.png';
const Topbanner = () => {
    return (
        <div className="row m-0 p-0 top-banner">
            <Carousel className="col-md-12 col-sm-12 col-lg-12 p-0 m-0">
                <Carousel.Item interval={1000}className="slider-div">
                    <img
                        className="d-block w-100"
                        src={slider}
                        alt="First slide"
                        
                    />
                    <Carousel.Caption className="caption-left">
                        <h1 className="text-white">Lowest Car Loan</h1>
                        <h4 className="text-uppercase text-info">We provide excellent loan services with lowest interest 6% rate.</h4>
                        <button className="btn btn-danger">  Check Details</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  className="slider-div">
                    <img
                        className="d-block w-100"
                        src={slider}
                        alt="Second slide"
                    />
                    <Carousel.Caption className="caption-left">
                        <h1 className="text-white">Student loan services</h1>
                        <h4 className="text-uppercase text-info">We provide excellent loan services with lowest interest 8% rate.</h4>
                        <button className="btn btn-danger">  Check Details</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="slider-div">
                    <img
                        className="d-block w-100"
                        src={slider}
                        alt="Third slide"
                    />
                    <Carousel.Caption className="caption-left">
                        <h1 className="text-white">House Loan </h1>
                        <h4 className="text-uppercase text-info">We provide excellent loan services with lowest interest 7% rate.</h4>
                        <button className="btn btn-danger"> Check Details</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    );
};

export default Topbanner;