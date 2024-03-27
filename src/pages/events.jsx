import React from 'react'
import Header from "../components/header";
import Calendar from "../components/Calendar";
import "../styles/calendar.scss"

const events = () => {
  return (
    <div>
     <Header/> 
     <div>EVENTS</div>
     <Calendar />
    </div>
  )
}

export default events
