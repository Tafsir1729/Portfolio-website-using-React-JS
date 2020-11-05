import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Col, Container, Row} from "react-bootstrap";

class FavouriteQuotes extends Component {
    render() {
        var settings = {
            autoplaySpeed:4000,
            autoplay:true,
            dots: true,
            infinite: true,
            speed: 3000,
            vertical:true,
            verticalSwiping:true,
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
                    <h1 className="MainTitle">Favourite Quotes</h1>
                    <Slider {...settings}>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <h1 className="name">Winston Churchill</h1>
                                    <p className="quote" >"If you're going through hell, keep going."</p>
                                </Col>
                            </Row>
                        </div>


                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <h1 className="name">Socrates</h1>
                                    <p className="quote">"I am the wisest man alive, for I know one thing, and that is that I know nothing."</p>
                                </Col>
                            </Row>
                        </div>


                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <h1 className="name">Charles Horton Cooley</h1>
                                    <p className="quote">"I am not what I think I am. I am not what you think I am. I am what I think you think I am."</p>
                                </Col>
                            </Row>
                        </div>

                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <h1 className="name">Robert Frost</h1>
                                    <p className="quote">"In three words I can sum up everything I've learned about life: IT GOES ON."</p>
                                </Col>
                            </Row>
                        </div>

                    </Slider>



                </Container>





            </Fragment>
        );
    }
}

export default FavouriteQuotes;