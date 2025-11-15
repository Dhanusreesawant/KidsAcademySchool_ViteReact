import React from 'react'

import Testimonials from './Home/Testimonials';
import News from './Home/News';
import Footer from './Footer';
import Mainbanner from './Mainbanner';
import aboutBg from './../assets/img/about-bg.jpg';
import Gallery from './Home/Gallery';

function Teachermenu() {
  return (
    <>
    <Mainbanner
      title="our School Gallery"
      subtitle="Home - Gallery"
      background={aboutBg}
    />    
    <Gallery showHeader={false}/>
    <News/>
    <Footer/>
    </>
  )
}

export default Teachermenu