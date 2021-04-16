import React from 'react';
import './Topbaner.css';
import { Carousel } from 'react-bootstrap';
import all from '../../../images/slider2.jpg';
import house from '../../../images/slider.jpg';
import car from '../../../images/slider1.jpg';
const Topbanner = () => {
    return (
        <section className="row m-0 p-0 top-banner">
            <Carousel className="col-md-12 col-sm-12 col-lg-12 p-0 m-0">
                <Carousel.Item interval={1000}className="slider-div">
                    <img
                        className="d-block w-100"
                        src={car}
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
                        src={all}
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
                        src={house}
                        alt="Third slide"
                    />
                    <Carousel.Caption className="caption-left">
                        <h1 className="text-white">House Loan </h1>
                        <h4 className="text-uppercase text-info">We provide excellent loan services with lowest interest 7% rate.</h4>
                        <button className="btn btn-danger"> Check Details</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>

    );
};

export default Topbanner;