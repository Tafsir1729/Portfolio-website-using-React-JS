import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <Fragment>
                <Container className='mt-5'>
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <h1 className='name'>Who I AM</h1>
                            <hr/>
                            <p className='skillDescription'>I am CSE fresher. I am expert in React JS and Python</p>

                            <h1 className='name'>My Mission</h1>
                            <hr/>
                            <p className='skillDescription'>I want to be Python Developer</p>

                            <h1 className='name'>My Vision</h1>
                            <hr/>
                            <p className='skillDescription'>I want to be Python Developer</p>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default About;