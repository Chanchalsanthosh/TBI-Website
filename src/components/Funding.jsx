import '../styles/startup.scss';
import { motion } from "framer-motion";
import {useRef, useEffect, useState} from 'react';
import Courses from "../assests/course.json"
import { Link } from 'react-router-dom';

function Yt() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  const handleGrabberClick = () => {
    // Add your logic here
    console.log('Grabber clicked');
  }

  useEffect(() =>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  },[]);


  return (
    <div className="fundingoppor">
        <motion.div ref={carousel} className="carousel" whileHover={{ cursor: 'grab' }} onClick={handleGrabberClick}>
          <motion.div 
            drag="x" 
            dragConstraints={{ right:0, left: -width }}
            className="carousel__inner">
            
<div className='fundlink'>
{Courses.funding.map((i)=>(
        <motion.div key={i.id}>
        <div className='fundtitle'><h2>{i.title}</h2></div>
        
      <div className='linkdesc'><h3>{i.description}</h3>
      </div>

      <div className="link"><h4><Link to={i.link}>{i.link}</Link></h4>
      </div>  
      </motion.div> 
    ))}
    </div>
          </motion.div>
        </motion.div>
    </div>
  );
}

export default Yt;



/*{images.map(img => {
  return(
    <motion.div key={img} className="item">
      <img src={img} alt="" />
    </motion.div>
  );
})} */