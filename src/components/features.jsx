import React from 'react';

import { useNavigate } from "react-router-dom";



function Features() {
  const navigate = useNavigate();
  
 return (
    
  <div id="features">
  
  <div className="left-section">
    <div className="card1">
      <img src="logo1.jpeg" alt="" className="logo"></img>
      <h1>Startup School</h1>
      <p className="para1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
      <button onClick={()=> {navigate("/startup")}}>Explore</button>
     </div> 
    </div> 
  

  <div className="right-section">
    <div className="card2">
      <img src="logo1.jpeg" alt="" className="logo"></img>
      <h1>Mentor Network</h1>
      <p className="para1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
      <button onClick={()=> {navigate("/mentor")}} >Explore</button>
     </div> 
  </div>
  
  </div>
  

      
     
    
  )
}
/*return (
    
      

  <div id="features">
  
  <div className="left-section">
    <div className="card">
      <img src="logo1.jpeg" alt="" className="logo"></img>
      <h1>Startup School</h1>
      <p className="para1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
      <button onClick={()=> {navigate("/startup")}}>Explore</button>
     </div> 
    </div> 
  

  <div className="right-section">
    <div className="card2">
      <img src="logo1.jpeg" alt="" className="logo"></img>
      <h1>Mentor Network</h1>
      <p className="para1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
      <button onClick={()=> {navigate("/mentor")}} >Explore</button>
     </div> 
  </div>
  
  </div>
  

   <div id="features">
        <div className='heading'>
       <h1>Features</h1>
        </div>
       <div className='cardspace'>
         <div className='left'>
          <img src={bg1} alt="" className="image1"/>
            <div className='inside1'>
            <h1>Startup <br/>School</h1>
             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software </p>
             <button onClick={()=> {navigate("/startup")}}>Explore</button>
             </div>
          </div>
         <div className='right'>
         <img src={bg2} alt="" className="image2"/>
          <div className='inside2'>
            <h1>Mentor Network</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more rece</p>
            <button onClick={()=> {navigate("/mentor")}} >Explore</button>
            </div>
         </div>
       </div>

      
      </div>

  
 

)
}
*/
export default Features

