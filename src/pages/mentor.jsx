import React from 'react'
import Header from "../components/header";
import FlippableCard from '../components/card/flippable-card';
import FlippableCard2 from '../components/card/flippable-card2';
import FlippableCard3 from '../components/card/flippable-card3';
import FlippableCard4 from '../components/card/flippable-card4';
import '../styles/mentor.scss'
const mentor = () => {
  
  return (
    
    <div class id="mentors">
      <Header/>
      <h1 className='heading'>Our Mentors</h1>
      <div className='card1'>
      <FlippableCard/>
      </div>
      <div className='card2'>
      <FlippableCard2/>
      </div>
      <div className='card3'>
      <FlippableCard3/>
      </div>
      <div className='card4'>
      <FlippableCard4/>
      </div>
      
    </div>
  )
}

export default mentor