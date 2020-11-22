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
                <Col lg={3} md={4} sm={6} className="p-2">
                           <div className="card text-center">
                               <img src={web}/>
                               <h2 className="name">Web Development</h2>
                               <h4 className="skillDescription">React.js, HTML, CSS, Bootstrap, JavaScript, PHP</h4>


                           </div>
                </Col>

                <Col lg={3} md={4} sm={6} className="p-2">
                           <div className="card text-center">
                               <img src={md}/>
                               <h2 className="name">Mobile Development</h2>
                               <h4 className="skillDescription">Android (Java)</h4>


                           </div>
                </Col>

                <Col lg={3} md={4} sm={6} className="p-2">
                           <div className="card text-center">
                               <img src={pl}/>
                               <h2 className="name">Programming Language</h2>
                               <h4 className="skillDescription">C/C++, Python, Java</h4>


                           </div>
                </Col>

                <Col lg={3} md={4} sm={6} className="p-2">
                           <div className="card text-center">
                               <img src={es}/>
                               <h2 className="name">Embedded Systems</h2>
                               <h4 className="skillDescription">Arduino, Internet of Things</h4>


                           </div>
                </Col>

                




                </Row>




                </Container>
                
            </Fragment>
        );
    }
}

export default Skills;