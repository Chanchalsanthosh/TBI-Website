import React,{useState,useEffect}from "react";
import {firestore} from './firebase';
import {collection,getDocs} from '@firebase/firestore';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
const Company = () => {
  const navigate = useNavigate();
 const [companies,setCompanies]=useState([])
 useEffect(() => {
  const fetchData = async () => {
    const ref = collection(firestore,'Companies');
    try {
      const querySnapshot = await getDocs(ref);
      const newData = querySnapshot.docs.map(doc => doc.data());
      //const sortedData = newData.sort((a,b) => b.id - a.id);
      setCompanies(newData);
      console.log(companies)
    } catch (error) {
      console.error('Error fetching documents: ', error);
    }
  };
  fetchData()
}, []);
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
       
        {companies.map((i) => (
              <div key={i.id} className="own_card">
                <div class="left">
               {i.img && <img src={i.img} alt={"i.name"} />}
                </div>
              
               <div className="ccontent">
                <h2>{i.cname}</h2>
                <p>{i.cdesc.substring(0,100)}</p>
                <div class="buttons">
                <a href={i.link}>
                  <button>Visit Us</button>
                </a>
                <a href={"/company2"}>
                  <button>Know More</button>
                </a>
                 
                </div>
               
               </div>
              
            </div>
         ))}
       

      </Slider>
      
    </div>
  </div>
  )
}

export default Company;
