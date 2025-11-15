import React from 'react';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Topheader from './Components/Topheader';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import About from "./Components/About";
import Classmenu from './Components/Classmenu';
import Teachermenu from './Components/Teachersmenu';
import Gallerymenu from './Components/Gallerymenu';
import Eventmenu from './Components/Eventmenu';
import BlogPage from './Components/BlogPage';
import ProductPage from './Components/Products/ProductPage';
import ContactPage from './Components/ContactPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Topheader />
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/classes" element={<Classmenu/>}/>
          <Route path="/teachers" element={<Teachermenu/>}/>
          <Route path="/gallery" element={<Gallerymenu/>}/>
          <Route path="/event" element={<Eventmenu/>}/>
          <Route path="/blog" element={<BlogPage/>}/>
          <Route path="/shop" element={<ProductPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="*" element={<h1>404 Page Not found</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
