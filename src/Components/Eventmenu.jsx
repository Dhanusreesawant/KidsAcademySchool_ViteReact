import React from 'react'

import Testimonials from './Home/Testimonials';
import News from './Home/News';
import Footer from './Footer';
import Mainbanner from './Mainbanner';
import aboutBg from './../assets/img/about-bg.jpg';
import Event from './Home/Event';
function Teachermenu() {
  return (
    <>
    <Mainbanner
      title="our School Event"
      subtitle="Home - Event"
      background={aboutBg}
    />    
    <Event showHeader = {false} showAll = {true}/>
    <News/>
    <Footer/>
    </>
  )
}

export default Teachermenu