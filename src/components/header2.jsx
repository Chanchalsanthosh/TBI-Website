import React from "react";
import { Link,useNavigate } from "react-router-dom";




const Header =()=>{
    const navigate = useNavigate();
    return (<nav>
     <div><img src="./logo.jpg" alt="" /></div>
     <main>
      <a href="#About">About Us</a>
      <Link to ={"/startup"}>Startup School</Link>
      <Link to ={"/Events"}>Events</Link> 
      <Link to ={"/mentor"}>Mentor</Link>       
      <a href="#blog">Blog</a> 
      <a href="#company">Companies</a> 
      
      <button className="incubator_bt" onClick = {()=> {navigate("/incubate")}}>Incubate</button>
     </main>
    </nav>
    )
};
export default Header;
