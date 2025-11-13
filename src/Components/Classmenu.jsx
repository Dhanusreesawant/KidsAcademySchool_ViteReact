import React from 'react'

import Testimonials from './Home/Testimonials';
import News from './Home/News';
import Footer from './Footer';
import Mainbanner from './Mainbanner';
import AllClasses from './AllClasses';
import aboutBg from './../assets/img/about-bg.jpg';

function Classmenu() {
  return (
    <>
    <Mainbanner
      title="Our Popular Classes"
      subtitle="Home - Classes"
      background={aboutBg}
    />    
    <AllClasses/>
    <Testimonials/>
    <News/>
    <Footer/>
    </>
  )
}

export default Classmenu