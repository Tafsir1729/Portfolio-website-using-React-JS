import React, { Component, Fragment } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

class Welcome extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                <h1 className="welcomeTitle">WELCOME TO MY PORTFOLIO</h1>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                    <p className="text-justify welcomeDes text-center"> Hi, I am Tafsir, a 22 year old computer science student from Bangladesh. Welcome to my online portfolio. Have a look!</p>

                    </Col>
                </Row>
                

                </Container>
            </Fragment>
        );
    }
}

export default Welcome;