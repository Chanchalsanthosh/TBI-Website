import React from 'react';
import {motion} from "framer-motion";

const about = () => {
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
    <div className='main1'>
      <motion.h1 {...animations.h1}>About <span>Us</span></motion.h1>
      <div className='description'><motion.p {...animations.p}>Government Engineering College Thrissur has signed a Memorandum of Understanding (MoU) with Small Industries Development Bank of India (SIDBI) for providing handholding support and to promote entrepreneurship in the region. As per the MoU, the college will set up a Swavalamban Chair for MSME Solutions under the project SAHAS (SIDBI Assistance for Harnessing Aspiring Swavalambis) under Technology Business Incubator Cell. This is the first time in India that SIDBI is signing an MoU with a college to promote entrepreneurship under this scheme.</motion.p></div>
    </div>
  )
}

export default about
