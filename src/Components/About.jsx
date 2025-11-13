import React from 'react'
import Aboutbanner from './Home/Aboutbanner';
import Facility from './Facility';
import Teachers from './Teachers';
import Testimonials from './Home/Testimonials';
import News from './Home/News';
import Footer from './Footer';
import Mainbanner from './Mainbanner';
import Choose from './Choose';
import aboutBg from './../assets/img/about-bg.jpg'

function About() {
  return (
    <>
    <Mainbanner
        title="About Our KidsAcademy"
        subtitle="Home - About Us"
        background={aboutBg}
   />
    <Facility/>
    <Aboutbanner/>
    <Choose/>
    <Teachers/>
    <Testimonials/>
    <News/>
    <Footer/>
    </>
  )
}

export default About