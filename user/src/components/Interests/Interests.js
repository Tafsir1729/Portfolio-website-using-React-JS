import React, { Component, Fragment } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ai from '../../asset/image/AI.svg'
import deep from '../../asset/image/deep-learning.svg'
import machine from '../../asset/image/machine-learning.svg'
import iot from '../../asset/image/internet-of-things.svg'

class Interests extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">

                 <h1 className="MainTitle">RESEARCH INTEREST</h1>

                 <Row>
                 <Col lg={3} md={4} sm={6}>
                           <div className="card text-center">
                               <img src={ai}/>
                               <h2 className="name">Artificial Intelligence</h2>
                            </div>
                </Col>

                <Col lg={3} md={4} sm={6}>
                           <div className="card text-center">
                               <img src={deep}/>
                               <h2 className="name">Deep Learning</h2>
                            </div>
                </Col>

                <Col lg={3} md={4} sm={6}>
                           <div className="card text-center">
                               <img src={machine}/>
                               <h2 className="name">Machine Learning</h2>
                            </div>
                </Col>

                <Col lg={3} md={4} sm={6}>
                           <div className="card text-center">
                               <img src={iot}/>
                               <h2 className="name">Internet of Things</h2>
                            </div>
                </Col>
                 </Row>

                 </Container>




            </Fragment>
        );
    }
}

export default Interests;