import React from 'react'
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Announcement from "./components/announcement";
import Company from "./components/company";
import Blog from "./components/blog";
import Features from "./components/features";
import Footer from "./components/Footer";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/about.scss";
import "./styles/announcement.scss";
import "./styles/company.scss";
import "./styles/blog.scss";
import "./styles/features.scss";
import "./styles/footer.scss";
const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Announcement/>
      <About/>
     <Features/>
      <Company/>
      <Blog/>
      <Footer/>
      
    </div>
  )
}

export default App



