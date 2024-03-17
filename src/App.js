import React from 'react'
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Announcement from "./components/announcement";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/about.scss";
import "./styles/announcement.scss";
const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Announcement/>
      <About/>
      
    </div>
  )
}

export default App



