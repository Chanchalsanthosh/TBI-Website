import React from 'react'
import Header from "./components/header2";
import Home from "./components/home";
import About from "./components/About";
import Announcement from "./components/Announcement";
import Company from "./components/company12";
import Gallery from "./components/Gallery2";
import Blog from "./components/blog2";
import Features from "./components/features";
import Footer from "./components/Footer";
import "./styles/header2.scss";
import "./styles/home.scss";
import "./styles/announcement.scss";
import "./styles/about.scss";
import "./styles/company.scss";
import "./styles/gallery.scss";
import "./styles/blog.scss";
import "./styles/features.scss";
import "./styles/footer.scss";
import "./styles/event.scss";


const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Announcement/>
      <About/>
      <Features/>
      <Company/>
      <Gallery/>
      <Blog/>
      <Footer/>
     
      
    </div>
  )
}

export default App



