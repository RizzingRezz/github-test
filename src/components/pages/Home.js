import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
//import HeroSection from '../HeroSection';

function Home() {
  return (
    <>
    {/* <HeroSection /> */}
      <h1 className='home'><span>A</span>tmospheric mo<span>N</span>itoring to <span>A</span>ssess <span>t</span>he availability of <span>O</span>ptical <span>LI</span>nks through the <span>A</span>tmosphere</h1>
      <img id="intro" src='/images/Anatolia.jpg' alt='Anatolia'></img>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
