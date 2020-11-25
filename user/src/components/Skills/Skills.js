import React, { Component, Fragment } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import web from '../../asset/image/web.svg'
import pl from '../../asset/image/programming-language.svg'
import es from '../../asset/image/embedded-systems.svg'
import md from '../../asset/image/mobile-development.svg'

class Skills extends Component {
    render() {
        return (
            <Fragment>

                <Container className="text-center">

                <h1 className="MainTitle">MY SKILLS</h1>

                <Row>
                <Col lg={6} md={12} sm={12} className="p-2">
                           <div className="card text-center">
                               <img src={web}/>
                               <h2 className="name">Web Development</h2>
                               <h4 className="skillDescription">React Js, PHP, MySQL</h4>


                           </div>
                </Col>

                

                <Col lg={6} md={12} sm={12} className="p-2">
                           <div className="card text-center">
                               <img src={pl}/>
                               <h2 className="name">Programming Language</h2>
                               <h4 className="skillDescription">Python, C, Java</h4>


                           </div>
                </Col>

               

                




                </Row>




                </Container>
                
            </Fragment>
        );
    }
}

export default Skills;