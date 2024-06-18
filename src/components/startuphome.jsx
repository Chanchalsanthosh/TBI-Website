import React from "react";
import '../styles/startup.scss'
//import { useNavigate } from "react-router-dom";
//import YoutubePlayer from "../YoutubeEmbed";
//import Courses from "../data.json"
//import Yt from "../components/Yt"
//import Funding from "../components/Funding"
const Startuphome=()=>{
return(
  <>
    <div  id="startups">
    <div className='text'> STARTUP SCHOOL
    <h6 className='subtitle'>Learn to be the best in the business</h6></div>
    <div className='vidlec'><img className='vidimg' src='vidlec.jpg' alt='vidlec'/><h2>Video Lectures</h2></div>
    <div className='fundopp'><img className='fund' src='fund.png' alt='fundopp'/><h2>Funding Opportunities</h2></div>
    <div className='studmat'><img className='stud' src='stud.png' alt='studmat'/><h2>Study Material</h2></div>
    <div><div className='search'>Search Courses</div></div>      
     </div>

    </>
)
}
export default Startuphome

//</>/<div><Button onClick={() => navigate("/")}>Watch</Button></div>
//{Courses.map((i)=>(<div><iframe src="i.src"></iframe></div>))}


//<div className='tuto'>All tutorials</div>
//<div className='tuto'>Startup Roadmap</div>
//   <div className='tuto'>Materials</div>
/*<div embed>
{Courses.map((i)=>(
    <div key={i.id}>
<YoutubeEmbed className="ytmain" embedId="{i.embedId}"></YoutubeEmbed>
</div>
))}*/

/*<button onClick = {()=> {navigate("/hide")}}>All Video Lectures</button>
    <button onClick = {()=> {navigate("/widget")}}>All Materials</button>
    */