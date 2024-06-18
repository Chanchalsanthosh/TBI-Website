import React, { useRef } from "react";
import {animate,motion} from "framer-motion";

const About = () => {
  const StartupsCount = useRef(1);
  const CompanyCount = useRef(1);
  const MentorCount = useRef(1);

    const animationStartupsCount = () => {
      if (StartupsCount.current) {
        animate(0, 20, {
          duration: 1,
          onUpdate: (v) => (StartupsCount.current.textContent = v.toFixed()),
        });
      }
    };
  const animationCompanyCount = () => {
    if (CompanyCount.current) {
    animate(0, 10, {
      duration: 1,
      onUpdate: (v) => (CompanyCount.current.textContent = v.toFixed()),
    });
   }
  };
  const animationMentorCount = () => {
    if (CompanyCount.current) {
    animate(0, 15, {
      duration: 1,
      onUpdate: (v) => (MentorCount.current.textContent = v.toFixed()),
    });
  }
};

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    p: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },

    },
  }; 
  return (
   <div id="About"> 
    <div className='main1'>
      <motion.h1 {...animations.h1}>About <span>Us</span></motion.h1>
      <div className='description'><motion.p {...animations.p}>Government Engineering College Thrissur has signed a Memorandum of Understanding (MoU) with Small Industries Development Bank of India (SIDBI) for providing handholding support and to promote entrepreneurship in the region. As per the MoU, the college will set up a Swavalamban Chair for MSME Solutions under the project SAHAS (SIDBI Assistance for Harnessing Aspiring Swavalambis) under Technology Business Incubator Cell. This is the first time in India that SIDBI is signing an MoU with a college to promote entrepreneurship under this scheme.</motion.p></div>
    </div>
    <div className='side'> 
    <article>
      <p>
        +<motion.span ref={StartupsCount} whileInView={animationStartupsCount}></motion.span>
      </p>
      <span id="inside">Start Ups</span>
    </article>
   
    <article>
      <p>
        +<motion.span whileInView={animationCompanyCount} ref={CompanyCount}></motion.span>
      </p>
      <span id="inside">Companies</span>
    </article>
  
    <article>
      <p>
        +<motion.span ref={MentorCount} whileInView={animationMentorCount}></motion.span>
      </p>
      <span id="inside">Mentors</span>
    </article>
    <article>
      <a href="/events"><div className="eve"><h1>Events</h1></div></a>
    </article>

    </div>
   </div>
  )
}

export default About;



