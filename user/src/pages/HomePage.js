import React, { Component, Fragment } from 'react';
import FavouriteQuotes from '../components/FavouriteQuotes/FavouriteQuotes';
import Interests from '../components/Interests/Interests';
import Skills from '../components/Skills/Skills';
import TopBanner from "../components/TopBanner/TopBanner";
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Welcome from '../components/Welcome/Welcome';
import Footer from '../components/Footer/Footer'
class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation></TopNavigation>
                <TopBanner></TopBanner>
                <Welcome></Welcome>
                <Interests></Interests>
                <Skills></Skills>
                <FavouriteQuotes></FavouriteQuotes>
                <Footer></Footer>
            </Fragment>
        );
    }
}

export default HomePage;