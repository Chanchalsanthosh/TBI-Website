import React from 'react'
import bgvideo from "../assests/bgvideo.mp4"

const home = () => {
  return (
    <div className='main'>
        <video src={bgvideo} autoPlay  loop muted ></video>
      
    </div>
  )
}

export default home;
