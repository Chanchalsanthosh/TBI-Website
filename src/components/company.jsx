import React from "react";
import data from "../assests/dataimg.json";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import { useNavigate } from "react-router-dom";
const Company = () => {
 // const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay:true,
    speed:2000,
    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
    }
  };
  return (
    <div id="company">
      <h3>Our Startups</h3>
      <h1>COMPANIES</h1>

        <div className="slider-container">
      <Slider {...settings}>
       
        {data.Image.map((i) => (
              <div key={i.id} className="own_card">
                <div class="left">
               <img src={i.name} alt={"i.name"} />
                </div>
                <aside>
               <div className="ccontent">
                <h2>{i.cname}</h2>
                <p>{i.about}</p>
                <div class="buttons">
                <a href={i.url}>
                  <button>Visit Us</button>
                </a>
                <a href={i.knowmore}>
                  <button>Know More</button>
                </a>
                 
                </div>
               
               </div>
               </aside>
            </div>
         ))}
       

      </Slider>
      
    </div>
  </div>
  )
}

export default Company;
