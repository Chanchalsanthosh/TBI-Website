import '../styles/startup.scss';
import { motion } from "framer-motion";
import {useRef, useEffect, useState} from 'react';
import Courses from "../assests/course.json"

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
    <div className="App">
        <motion.div ref={carousel} className="carousel" whileHover={{ cursor: 'grab' }} onClick={handleGrabberClick}>
          <motion.div 
            drag="x" 
            dragConstraints={{ right:0, left: -width }}
            className="carousel__inner">
            
<div className='yt'>
{Courses.ytvid.map((i)=>(
        <motion.div key={i.id}>
          <iframe className="frame2"
       width ="700" 
       height="500"
      src={i.embedId}
      title="Embedded youtube"
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen/>
      <div className='description'>
      <p className="ytdesc">{i.desc}
      </p></div>
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