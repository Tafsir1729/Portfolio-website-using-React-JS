import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Col, Container, Row} from "react-bootstrap";

class Welcome extends Component {
    render() {
        var settings = {
            autoplaySpeed:4000,
            autoplay:true,
            dots: true,
            infinite: true,
            speed: 3000,
            horizontal:true,
            horizontalSwiping:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Fragment>
                <Container className="text-center">
                <h1 className="MainTitle">WELCOME TO MY PORTFOLIO</h1>
                
                <Slider {...settings}>
                    <div>
                    <Row className="text-center justify-content-center">
                    <Col lg={12} md={12} sm={12}>
                        <p className="text-justify welcomeDes text-center">Hi, I am Tafsir, a 22 year old computer science student from Bangladesh.</p>

                    </Col>
                </Row>
                    </div>

                    <div>
                    <Row className="text-center justify-content-center">
                    <Col lg={12} md={12} sm={12}>
                        <p className="text-justify welcomeDes text-center">Welcome to my portfolio.</p>

                    </Col>
                </Row>
                    </div>

                    <div>
                    <Row className="text-center justify-content-center">
                    <Col lg={12} md={12} sm={12}>
                        <p className="text-justify welcomeDes text-center">Have a look!</p>

                    </Col>
                </Row>
                    </div>

                </Slider>
                
                

                </Container>
            </Fragment>
        );
    }
}

export default Welcome;