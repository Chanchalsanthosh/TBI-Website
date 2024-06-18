import React from 'react'
import Header from "../components/header";
import '../styles/incubate.scss';
import Form from "../components/form";

const incubate = () => {
  return (
    <div>
      <Header/>
      <div id="incubate">
        <div className='process'>
          <h2>PROCESS OF INCUBATION</h2>
           <img src="/process.jpg" />
          </div>
          <div className='bottom'>
          <div className='left'>
            <div class="caption">
            <h1>Bring your Ideas to Life</h1>
            <h2>Incubate With Us!</h2>
            </div>
          
            </div>
            <div className='right'>
          <div className='login'>
            <Form/>
           </div>
           </div>
      </div>
  
      </div>
      
    </div>
  )
}

export default incubate;
