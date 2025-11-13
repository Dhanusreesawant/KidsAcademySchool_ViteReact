import React from 'react'

import Testimonials from './Home/Testimonials';
import News from './Home/News';
import Footer from './Footer';
import Mainbanner from './Mainbanner';
import aboutBg from './../assets/img/about-bg.jpg';
import Teachers from './Teachers';

function Teachermenu() {
  return (
    <>
    <Mainbanner
      title="Meet our Teachers"
      subtitle="Home - Teachers"
      background={aboutBg}
    />    
    <Teachers showAll={true} showHeader={false}/>
    <News/>
    <Footer/>
    </>
  )
}

export default Teachermenu