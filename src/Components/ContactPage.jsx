import React from 'react';
import MainBanner from './Mainbanner';
import aboutBg from './../assets/img/about-bg.jpg';
import Footer from './Footer';
import Contact from './Contact';

export default function BlogPage() {
  return (
        <>
        <MainBanner 
             title="our School Contact"
              subtitle="Home - Contact"
              background={aboutBg} />
         <Contact/>
       
        <Footer/>
        </>
         
     
  );
}
