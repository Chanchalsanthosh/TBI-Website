import React from 'react'
import Header from "../components/header";
import Calendar from "../components/Calendar";
import "../styles/calendar.scss";
import Search from "../components/searchevent";
import eventvideo from "../assests/event.mp4"


import "slick-carousel/slick/slick.css";
import UserEvents from '../components/UserEvents';
import "../styles/userevets.scss";
import "../styles/searchevent.scss";



const events = () => {
 
  return (
    <div id="event">
      
     <Header/> 
     <div className='bgvideo'>
     <video src={eventvideo} autoPlay  loop muted ></video>
     </div>
     <h1>EVENTS</h1>
     <Search/>
    
     <div className='bottom1'>
      
       <UserEvents/>
     </div>
     <div className='top'>
     <Calendar />
     </div>


    </div>

  )
}

export default events
