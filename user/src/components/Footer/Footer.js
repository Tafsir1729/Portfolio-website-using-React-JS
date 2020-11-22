import React, { Component, Fragment } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone, faPlayCircle, faHome} from "@fortawesome/free-solid-svg-icons";
import {faFacebook,faLinkedin} from "@fortawesome/free-brands-svg-icons";
class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className='footerSection text-center'>
                    <Row>
                        <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
                            <h1 className='name'>Follow Me</h1>
                            <a className='socialLink' href="#"><FontAwesomeIcon  icon={faLinkedin} /> LinkedIn</a><br/>
                            <a className='socialLink' href="#"><FontAwesomeIcon  icon={faFacebook} /> Facebook</a>


                        </Col>

                        <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
                        <h1 className='name'>Address</h1>
                        <p className='skillDescription'><FontAwesomeIcon icon={faHome}/> #21/1 A Johurabad, Mirpur-1, Dhaka-1216</p>
                        <p className='skillDescription'><FontAwesomeIcon icon={faEnvelope}/> shuvotafsir9143@gmail.com</p>
                        <p className='skillDescription'><FontAwesomeIcon icon={faPhone}/> +8801795315139</p>
                        
                        </Col>

                        <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
                        <h1 className='name'>Information</h1>
                        <a className='footerLink' href="#">About Me</a><br/>
                        <a className='footerLink' href="#">My Resume</a><br/>
                        <a className='footerLink' href="#">Contact Me</a>

                        
                        </Col>

                        <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
                        <h1 className='name'>Legal</h1>
                        <a className='footerLink' href="#">Refund Policy</a><br/>
                        <a className='footerLink' href="#">Terms And Conditions</a><br/>
                        <a className='footerLink' href="#">Privacy Policy</a>

                        
                        </Col>
                    </Row>
                </Container>

                <Container fluid={true} className="text-center copyrightSection">
                    <a className="copyrightLink" href="#">tafsir.com &copy; 2020-2021</a>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;