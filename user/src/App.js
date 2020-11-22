import React from 'react';
import FavouriteQuotes from './components/FavouriteQuotes/FavouriteQuotes';
import Interests from './components/Interests/Interests';
import Skills from './components/Skills/Skills';
import TopBanner from "./components/TopBanner/TopBanner";
import TopNavigation from './components/TopNavigation/TopNavigation';
import Welcome from './components/Welcome/Welcome';
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div>
      <TopNavigation></TopNavigation>
      <TopBanner></TopBanner>
      <Welcome></Welcome>
      <Skills></Skills>
      <Interests></Interests>
      <FavouriteQuotes></FavouriteQuotes>
      <Footer></Footer>

    </div>
  );
}

export default App;
