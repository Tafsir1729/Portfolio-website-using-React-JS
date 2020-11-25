import React, { Component, Fragment } from 'react';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer'
import About from '../components/About/About'

class AboutPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTop pagetitle='About Me'/>
                <About/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AboutPage;