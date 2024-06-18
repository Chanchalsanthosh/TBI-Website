import React from 'react';
import Header from "../components/header";
import Bloglist from "../components/bloglist";
import "../styles/blog1.scss";
import "../styles/bloglist.scss";


function blog1() {
  return (
    <div id="blog1">
     <Header/>
     <div className='heading'><h1>Blogs:Explore new things </h1></div>
    
     <div className='blog-side'>
      <Bloglist/>     
     </div>
     </div>
  )
}

export default blog1
