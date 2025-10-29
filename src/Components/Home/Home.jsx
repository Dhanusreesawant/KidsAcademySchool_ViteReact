import React from 'react'
import Homebanner from './Homebanner';
import Aboutbanner from './Aboutbanner';
import Classes from '../classes';
import './home.css'
import Facility from '../Facility';
import Teachers from '../Teachers';
import Gallery from './Gallery';
import CounterSection from "./CounterSection";
import Testimonials from './Testimonials';
import Partners from './Partners';
import Event from './Event';
import News from './News';
import Footer from '../Footer';

function Home() {
  return (
    <>
    <Homebanner/>
    <Facility/>
    <Aboutbanner/>
    <Classes/>
    <Teachers/>
    <Gallery/>
    <CounterSection/>
    <Testimonials/>
    <Partners/>
    <Event/>
    <News/>
    <Footer/>
    </>
  )
}

export default Home