// src/pages/BlogPage.jsx
import React from 'react';
import BlogList from './BlogList'
import MainBanner from './Mainbanner';
import aboutBg from './../assets/img/about-bg.jpg';
import BlogSidebar from './BlogSideBar';
import News from './Home/News';
import Footer from './Footer';

export default function BlogPage() {
  return (
        <>
        <MainBanner 
             title="our School Blogs"
              subtitle="Home - Blogs"
              background={aboutBg} />
         <div className="row mt-5 m-2">
          <div className="col-lg-9">
            <BlogList />
          </div>

          <div className="col-lg-3">
            <BlogSidebar />
          </div>
        </div>
        <News/>
        <Footer/>
        </>
         
     
  );
}
