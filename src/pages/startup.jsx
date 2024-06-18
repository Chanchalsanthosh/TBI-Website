import React from 'react';
import Header from "../components/header";
//import '../styles/startup.scss'
import Startuphome from "../components/startuphome"; 
import Yt from "../components/Yt"
import Funding from "../components/Funding"

import { useNavigate } from "react-router-dom";

const Startup = () => {
  const navigate = useNavigate();
  return(
    <>
    <div>
      <Header/>
      <Startuphome/>
      <div><button className="but1" > All Video Lectures</button></div>
    <Yt/>
      <div><button className='but1'>Funding Opportunities</button></div>  
      <Funding/>
      </div>
      </>
  )
};
export default Startup


