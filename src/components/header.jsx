import React from "react";
import { Link,useNavigate } from "react-router-dom";




const Header =()=>{
    const navigate = useNavigate();
    return (<nav>
     <div><img src="./logo.jpg" alt="" /></div>
     <main>
      <Link to ={"/"}>Home</Link>
      <Link to ={"/startup"}>Startup School</Link>
      <Link to ={"/Events"}>Events</Link> 
      <Link to ={"/mentor"}>Mentor</Link>       
      <Link to ={"/blog"}>Blog</Link> 
      <Link to ={"/companies"}>Companies</Link> 
      <button onClick = {()=> {navigate("/incubate")}}>Incubate</button>
     </main>
    </nav>
    )
};
export default Header;

