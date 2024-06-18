import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";




const Header =()=>{
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    return (<nav>
     <div><img src="./logo.jpg" alt="" /></div>
     <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <main className={menuOpen ? "open" : ""}>
      <Link to ={"/"}>Home</Link>
      <Link to ={"/startup"}>Startup School</Link>
      <Link to ={"/Events"}>Events</Link> 
      <Link to ={"/mentor"}>Mentor</Link>       
      <Link to ={"/blog1"}>Blog</Link>  
      <Link to ={"/company2"}>Companies</Link>   
      
      
      <button className="incubator_bt" onClick = {()=> {navigate("/incubate")}}>Incubate</button>
     </main>
    </nav>
    )
};
export default Header;

//<Link to ={"/announce"}> Announcements</Link>