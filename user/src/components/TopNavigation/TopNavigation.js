import React, {Component,Fragment} from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import Logo from '../../asset/image/logo1.svg'
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'

class TopNavigation extends Component {
    constructor(){
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarLogo:[Logo],
            navBarBack:"navBackground",
            navBarItem:"navItem",
            navVariant:"dark"
            
        }
    }
    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navVariant:'light',navBarTitle:'navTitleScroll', navBarLogo:[Logo], navBarBack:'navBackgroundScroll', navBarItem:'navItemScroll'})
        }
        else if(window.scrollY<100){
            this.setState({navVariant:'dark',navBarTitle:'navTitle',navBarLogo:[Logo], navBarBack:'navBackground', navBarItem:'navItem'})
        }
    }
    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }






    render() {
        return (
            <Fragment>
                <Navbar variant={this.state.navVariant} className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg">
                    <Navbar.Brand className={this.state.navBarTitle}><img src={this.state.navBarLogo}/> Tafsir Ahamed</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link className={this.state.navBarItem} href="#deets">HOME</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">EDUCATION</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">PUBLICATIONS</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">PROJECTS</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">COURSES & CERTIFICATIONS</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">CONTACT</Nav.Link>
                            <Nav.Link className={this.state.navBarItem} href="#deets">ABOUT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
            

        );
    }
}

export default TopNavigation;